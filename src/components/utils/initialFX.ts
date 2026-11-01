import { TextSplitter } from "../../utils/textSplitter";
import gsap from "gsap";
import { lenis } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (lenis) {
    lenis.start();
  }
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const selectors = [".landing-intro h2", ".landing-intro h1"];
  const elements = selectors.flatMap(selector => Array.from(document.querySelectorAll(selector)));
  const landingText = new TextSplitter(elements, {
    type: "chars,lines",
    linesClass: "split-line",
  });
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  const TextProps = { type: "chars,lines", linesClass: "split-h2" };

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const primaryRole = new TextSplitter(".landing-info-primary", TextProps);
  const secondaryRole = new TextSplitter(".landing-h2-1", TextProps);
  gsap.fromTo(
    [...primaryRole.chars, ...secondaryRole.chars],
    { opacity: 0, y: 35, filter: "blur(4px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.9,
      stagger: 0.025,
      ease: "power3.out",
      delay: 0.6,
    }
  );
}
