import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const smoothstep = (edge0: number, edge1: number, value: number) => {
  const t = THREE.MathUtils.clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};

const deformMesh = (
  mesh: THREE.Mesh,
  deform: (
    position: THREE.Vector3,
    normal: THREE.Vector3,
    normalized: THREE.Vector3
  ) => void
) => {
  const geometry = mesh.geometry.clone();
  geometry.computeBoundingBox();
  const bounds = geometry.boundingBox;
  if (!bounds) {
    throw new Error(`Character mesh "${mesh.name}" has no geometry bounds`);
  }

  const size = bounds.getSize(new THREE.Vector3());
  const center = bounds.getCenter(new THREE.Vector3());
  const positionAttribute = geometry.getAttribute("position");
  const normalAttribute = geometry.getAttribute("normal");
  if (!normalAttribute) {
    throw new Error(`Character mesh "${mesh.name}" has no vertex normals`);
  }

  const position = new THREE.Vector3();
  const normal = new THREE.Vector3();
  const normalized = new THREE.Vector3();
  for (let index = 0; index < positionAttribute.count; index++) {
    position.fromBufferAttribute(positionAttribute, index);
    normal.fromBufferAttribute(normalAttribute, index);
    normalized.set(
      size.x ? (position.x - center.x) / (size.x / 2) : 0,
      size.y ? (position.y - bounds.min.y) / size.y : 0,
      size.z ? (position.z - bounds.min.z) / size.z : 0
    );
    deform(position, normal, normalized);
    positionAttribute.setXYZ(index, position.x, position.y, position.z);
  }

  positionAttribute.needsUpdate = true;
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  mesh.geometry = geometry;
};

const sculptFace = (face: THREE.SkinnedMesh) => {
  deformMesh(face, (position, _normal, normalized) => {
    const side = Math.abs(normalized.x);
    const faceFront = smoothstep(0.58, 0.84, normalized.z);
    const jaw = smoothstep(0.08, 0.2, normalized.y) *
      (1 - smoothstep(0.34, 0.5, normalized.y)) *
      smoothstep(0.36, 0.78, side) *
      faceFront;
    position.x -= Math.sign(normalized.x) * 0.035 * jaw;

    const cheek = Math.exp(
      -(((side - 0.45) / 0.2) ** 2 + ((normalized.y - 0.49) / 0.12) ** 2)
    );
    position.z += 0.018 * cheek * faceFront;

    const bridge = Math.exp(
      -((normalized.x / 0.13) ** 2 + ((normalized.y - 0.65) / 0.14) ** 2)
    );
    const noseTip = Math.exp(
      -((normalized.x / 0.14) ** 2 + ((normalized.y - 0.51) / 0.07) ** 2)
    );
    const chin = Math.exp(
      -((normalized.x / 0.3) ** 2 + ((normalized.y - 0.1) / 0.09) ** 2)
    );
    position.z += faceFront * (0.012 * bridge + 0.024 * noseTip + 0.01 * chin);
  });
};

const sculptHair = (hair: THREE.Mesh) => {
  deformMesh(hair, (position, normal, normalized) => {
    const crown = smoothstep(0.38, 0.82, normalized.y);
    position.y += 0.006 * crown;
    position.x += Math.sign(normalized.x) * 0.003 * crown;

    const curlTexture =
      Math.sin(normalized.x * 17 + Math.sin(normalized.z * 9)) *
      Math.cos(normalized.z * 15 - Math.sin(normalized.x * 8));
    const textureWeight = crown * (0.55 + 0.45 * smoothstep(0.15, 0.65, 1 - Math.abs(normalized.x)));
    position.addScaledVector(normal, 0.0025 * curlTexture * textureWeight);
  });
};

const sculptEyebrows = (brows: THREE.Mesh) => {
  deformMesh(brows, (position) => {
    const center = Math.sign(position.x) * 0.39;
    const width = Math.max(0, 1 - Math.abs(position.x - center) / 0.4);
    position.y += Math.sign(position.y - 13.62) * 0.008 * width;
  });
};

const addSkinnedChestPanel = (
  character: THREE.Object3D,
  torso: THREE.SkinnedMesh,
  rows: { y: number; halfWidth: number }[],
  color: string,
  surfaceOffset: number
) => {
  const skinIndex = torso.geometry.attributes.skinIndex;
  const skinWeight = torso.geometry.attributes.skinWeight;
  if (!skinIndex || !skinWeight) {
    throw new Error("Character torso is missing skin weights");
  }

  character.updateMatrixWorld(true);
  torso.skeleton.update();
  const raycaster = new THREE.Raycaster();
  const vertices: number[] = [];
  const indices: number[] = [];
  const detailSkinIndices: number[] = [];
  const detailSkinWeights: number[] = [];

  rows.forEach(({ y, halfWidth }) => {
    [-1, 0, 1].forEach((side) => {
      const x = halfWidth * side;
      const origin = torso.localToWorld(new THREE.Vector3(x, y, 5));
      const direction = new THREE.Vector3(0, 0, -1).transformDirection(
        torso.matrixWorld
      );
      raycaster.set(origin, direction);
      const hit = raycaster.intersectObject(torso, false)[0];
      if (!hit) {
        throw new Error("Unable to place outfit detail on the torso surface");
      }

      const localHit = torso.worldToLocal(hit.point.clone());
      const vertex = new THREE.Vector3(x, y, localHit.z + surfaceOffset);
      vertices.push(vertex.x, vertex.y, vertex.z);
      if (!hit.face) {
        throw new Error("Unable to determine torso skin weights for outfit detail");
      }

      const faceVertices = [hit.face.a, hit.face.b, hit.face.c];
      const surfaceVertices = faceVertices.map((index) =>
        torso.getVertexPosition(index, new THREE.Vector3())
      );
      const barycentric = THREE.Triangle.getBarycoord(
        localHit,
        surfaceVertices[0],
        surfaceVertices[1],
        surfaceVertices[2],
        new THREE.Vector3()
      );
      if (!barycentric) {
        throw new Error("Unable to interpolate torso skin weights");
      }
      const jointWeights = new Map<number, number>();

      faceVertices.forEach((faceIndex, vertexIndex) => {
        const weight = barycentric.getComponent(vertexIndex);
        for (let component = 0; component < 4; component++) {
          const jointIndex = skinIndex.getComponent(faceIndex, component);
          jointWeights.set(
            jointIndex,
            (jointWeights.get(jointIndex) ?? 0) +
              skinWeight.getComponent(faceIndex, component) * weight
          );
        }
      });

      const influences = [...jointWeights.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4);
      const totalWeight = influences.reduce((sum, [, weight]) => sum + weight, 0);
      if (totalWeight === 0) {
        throw new Error("Character torso has no usable skin weights");
      }

      for (let influence = 0; influence < 4; influence++) {
        const [jointIndex, weight] = influences[influence] ?? [0, 0];
        detailSkinIndices.push(jointIndex);
        detailSkinWeights.push(weight / totalWeight);
      }
    });
  });

  for (let row = 0; row < rows.length - 1; row++) {
    const top = row * 3;
    const bottom = top + 3;
    indices.push(
      top, bottom, top + 1,
      top + 1, bottom, bottom + 1,
      top + 1, bottom + 1, top + 2,
      top + 2, bottom + 1, bottom + 2
    );
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );
  geometry.setAttribute(
    "skinIndex",
    new THREE.Uint16BufferAttribute(detailSkinIndices, 4)
  );
  geometry.setAttribute(
    "skinWeight",
    new THREE.Float32BufferAttribute(detailSkinWeights, 4)
  );
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  const material = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.82,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
  });
  const detail = new THREE.SkinnedMesh(geometry, material);
  detail.bind(torso.skeleton, torso.bindMatrix);
  detail.bindMode = torso.bindMode;
  detail.frustumCulled = false;
  detail.castShadow = false;
  detail.receiveShadow = false;

  if (!torso.parent) {
    throw new Error("Character torso has no parent for outfit details");
  }
  detail.matrixAutoUpdate = torso.matrixAutoUpdate;
  if (torso.matrixAutoUpdate) {
    detail.position.copy(torso.position);
    detail.quaternion.copy(torso.quaternion);
    detail.scale.copy(torso.scale);
  } else {
    detail.matrix.copy(torso.matrix);
  }
  torso.parent.add(detail);
};

const applyOutfitDetails = (
  character: THREE.Object3D,
  torso: THREE.SkinnedMesh
) => {
  const boneY = (name: string) => {
    const bone = character.getObjectByName(name);
    if (!(bone instanceof THREE.Bone)) {
      throw new Error(`Character bone "${name}" was not found`);
    }

    return torso.worldToLocal(bone.getWorldPosition(new THREE.Vector3())).y;
  };
  const collarY = boneY("spine005");
  const chestY = boneY("spine003");
  const lowerChestY = boneY("spine002");
  const chestSpan = chestY - lowerChestY;
  const shirtTop = collarY - chestSpan * 0.09;
  const shirtBottom = lowerChestY + chestSpan * 0.5;
  const shirtRows = Array.from({ length: 7 }, (_, index) => {
    const progress = index / 6;
    return {
      y: THREE.MathUtils.lerp(shirtTop, shirtBottom, progress),
      halfWidth: THREE.MathUtils.lerp(0.19, 0.34, progress),
    };
  });
  const tieBottom = lowerChestY + chestSpan * 0.28;
  const tieRows = [
    { y: shirtTop, halfWidth: 0.07 },
    { y: shirtTop - chestSpan * 0.1, halfWidth: 0.07 },
    { y: tieBottom + chestSpan * 0.28, halfWidth: 0.11 },
    { y: tieBottom + chestSpan * 0.12, halfWidth: 0.09 },
    { y: tieBottom, halfWidth: 0 },
  ];

  addSkinnedChestPanel(character, torso, shirtRows, "#f4f3ef", 0.015);
  addSkinnedChestPanel(character, torso, tieRows, "#14284a", 0.06);
};

const applyAvatarColors = (character: THREE.Object3D) => {
  const face = character.getObjectByName("Plane007");
  const hair = character.getObjectByName("hair");
  const brows = character.getObjectByName("Eyebrow");
  if (!(face instanceof THREE.SkinnedMesh)) {
    throw new Error('Character face "Plane007" is not a skinned mesh');
  }
  if (!(hair instanceof THREE.Mesh)) {
    throw new Error('Character hair mesh "hair" was not found');
  }
  if (!(brows instanceof THREE.Mesh)) {
    throw new Error('Character eyebrow mesh "Eyebrow" was not found');
  }
  sculptFace(face);
  sculptHair(hair);
  sculptEyebrows(brows);

  const colors = new Map([
    ["hair", "#241711"],
    ["Eyebrow", "#21130f"],
    ["Plane007", "#986047"],
    ["Ear001", "#986047"],
    ["Hand", "#986047"],
    ["Neck", "#986047"],
    ["BODYSHIRT", "#3b3d42"],
  ]);

  colors.forEach((color, name) => {
    const object = character.getObjectByName(name);
    if (!object) {
      throw new Error(`Character mesh "${name}" was not found`);
    }
    if (!(object instanceof THREE.Mesh)) {
      throw new Error(
        `Character object "${name}" is ${object.type}, not a mesh`
      );
    }

    const recolor = (material: THREE.Material) => {
      const clonedMaterial = material.clone();
      if (!(clonedMaterial instanceof THREE.MeshStandardMaterial)) {
        throw new Error(`Character mesh "${name}" has an unsupported material`);
      }

      clonedMaterial.color.set(color);
      if (name === "BODYSHIRT") {
        clonedMaterial.roughness = 0.78;
      }
      if (name === "hair") {
        clonedMaterial.roughness = 0.82;
      }

      return clonedMaterial;
    };

    object.material = Array.isArray(object.material)
      ? object.material.map(recolor)
      : recolor(object.material);
  });

  const torso = character.getObjectByName("BODYSHIRT");
  if (!(torso instanceof THREE.SkinnedMesh)) {
    throw new Error('Character torso "BODYSHIRT" is not a skinned mesh');
  }
  applyOutfitDetails(character, torso);
};

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            applyAvatarColors(character);
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = false;
                child.receiveShadow = false;
                mesh.frustumCulled = true;
                if (mesh.material && !Array.isArray(mesh.material)) {
                  (mesh.material as THREE.ShaderMaterial).precision = 'mediump';
                }
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
