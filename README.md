# portfolio-harshith

## Sampangi Harshith Kumar — Developer Portfolio

This portfolio is built with React and TypeScript for Sampangi Harshith Kumar, a fourth-year Computer Science and Engineering student specialising in AI and Machine Learning at SRM University-AP. It preserves the site's animated presentation, Three.js character, project showcase, and chess experience while presenting his software, AI/ML, and IoT work.

## Features

- Animated portfolio sections with GSAP and smooth scrolling.
- Interactive Three.js character on supported desktop layouts.
- Project showcase and complete project list at `/myworks`.
- Chess game and portfolio assistant at `/play`.
- Responsive React interface, with Vite for local frontend development.

## Run locally

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. The site routes are `/`, `/myworks`, and `/play`.

The chat endpoint in `api/chat.js` is a Vercel serverless function. A plain Vite server does not run that function. To test chat locally, use the Vercel CLI and provide the server-side `GROQ_API_KEY` environment variable:

```powershell
Copy-Item .env.example .env.local
# Set GROQ_API_KEY in .env.local, then run:
npx vercel dev
```

Do not commit a real API key. The `.env.example` value is only a placeholder.

## Build and lint

```bash
npm run build
npm run lint
```

## Personalize content

Update `src/config.ts` for profile information, education and learning journey, skills, projects, and verified contact links. Project descriptions and repository links are based on the public repositories listed below:

- [PrepPilot AI](https://github.com/HarshithhKumar/PrepPilot-AI)
- [HookRelay](https://github.com/HarshithhKumar/HookRelay)
- [Kinetix](https://github.com/HarshithhKumar/Kinetix)
- [FarmaI](https://github.com/HarshithhKumar/Farmai-agricultural-app)
- [GestureFusion](https://github.com/HarshithhKumar/GestureFusion)
- [Heat Index](https://github.com/HarshithhKumar/heat-index) — [live demo](https://heat-index-hk.netlify.app)
- [Burnly](https://github.com/HarshithhKumar/Burnly)

Contact links and profile details are centralized in `src/config.ts`. The Resume button remains disabled until `public/resume/Sampangi-Harshith-Kumar-Resume.pdf` is added and configured.

## Main directories

- `src/components/` — homepage sections, animations, and the 3D character.
- `src/pages/` — project listing and chess/chat experience.
- `src/config.ts` — centralized portfolio content.
- `public/` — static assets, 3D model resources, and chess engine files.
- `api/chat.js` — Vercel chat function; requires `GROQ_API_KEY`.

The project is distributed under the MIT License; see `LICENSE`.
