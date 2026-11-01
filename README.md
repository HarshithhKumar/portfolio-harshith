# Portfolio Website

An interactive developer portfolio built with **React, TypeScript, and Vite**. The site combines animated sections, a Three.js character, project showcases, and an interactive chess experience.

## Live Portfolio

[Click here to visit the portfolio](https://portfolio-harshith-sigma.vercel.app/)

## Pages

- **Home**: introduction, skills, experience, and contact section.
- **My Works**: project showcase at `/myworks`.
- **Play**: chess experience and portfolio assistant at `/play`.

## Features

- Interactive 3D character using Three.js and React Three Fiber.
- GSAP animations and smooth scrolling.
- Responsive React and TypeScript interface.
- Dedicated project showcase.
- Chess functionality and portfolio assistant.
- Vercel serverless chat endpoint.

## Tech stack

- **Languages:** C, C++, Java, JavaScript, Python, SQL
- **Frontend:** React, HTML, CSS, Tailwind CSS, React Router, Vite
- **Backend:** Node.js, Express, FastAPI, REST APIs
- **Databases and services:** MongoDB, Mongoose, MySQL, PostgreSQL, Firebase, Cloudinary
- **AI and data:** TensorFlow, Keras, LSTM, scikit-learn, Pandas, NumPy, Gemini API
- **IoT and embedded:** ESP32, Embedded C, MATLAB, Simulink, OSC/UDP
- **Tools and deployment:** Git, GitHub, VS Code, Postman, Docker, Vercel, Render

## Run locally

### Requirements

- Node.js
- npm
- Git

### Install dependencies and start the development server

```bash
git clone https://github.com/HarshithhKumar/portfolio-harshith.git
cd portfolio-harshith
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Run the chat API locally

The endpoint in `api/chat.js` is a **Vercel serverless function**. The standard Vite development server does not run this function. Use the Vercel CLI to run the application with the API:

```powershell
Copy-Item .env.example .env.local
# Add GROQ_API_KEY to .env.local
npx vercel dev
```

The `.env.example` file contains a placeholder only. Keep real API keys in `.env.local` and never commit them.

## Commands

- `npm run dev`: start the Vite development server.
- `npm run build`: type-check and create a production build.
- `npm run preview`: preview the production build.
- `npm run lint`: run ESLint.

## Project structure

- `api/chat.js`: Vercel serverless chat endpoint.
- `public/images/`: static project artwork.
- `public/models/`: 3D character assets.
- `src/components/`: homepage sections, animations, and 3D scene.
- `src/pages/`: My Works and Play pages.
- `src/config.ts`: portfolio content and links.
- `package.json`: dependencies and scripts.
- `vite.config.ts`: Vite configuration.

## License

Distributed under the MIT License. See [LICENSE](LICENSE).
