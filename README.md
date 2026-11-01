<div align="center">

# Harshith Kumar

### Software Engineer · AI/ML Enthusiast · Full-Stack Developer

Building useful products at the intersection of software, AI, and connected systems.

[GitHub](https://github.com/HarshithhKumar) · [LinkedIn](https://www.linkedin.com/in/sampangi-harshith-kumar/) · [LeetCode](https://leetcode.com/u/codewharshith/) · [Email](mailto:harshithkumar2023@gmail.com)

</div>

---

## About

I'm **Sampangi Harshith Kumar**, a fourth-year Computer Science and Engineering student specialising in **AI and Machine Learning at SRM University-AP**.

I enjoy taking ideas from concept to working software—from full-stack web applications and AI-powered products to experiments involving machine learning, IoT, and real-time systems. I'm always learning, building, and sharpening my software engineering fundamentals.

This repository contains the source code for my interactive developer portfolio.

## Explore the portfolio

| Section | What you'll find |
| --- | --- |
| **Home** — `/` | Introduction, background, skills, experience, and contact details |
| **My Works** — `/myworks` | A collection of projects and experiments |
| **Play** — `/play` | Interactive chess experience and portfolio assistant |

## Highlights

- **Interactive 3D experience** built with Three.js and React Three Fiber.
- **Motion-rich interface** with GSAP animations and smooth scrolling.
- **Project showcase** featuring full-stack, AI/ML, and IoT work.
- **Chess experience** powered by the project's chess functionality.
- **Responsive React application** developed with TypeScript and Vite.
- **Portfolio assistant API** implemented as a Vercel serverless function.

## Featured projects

| Project | Overview | Stack |
| --- | --- | --- |
| [PrepPilot AI](https://github.com/HarshithhKumar/PrepPilot-AI) | AI-powered study workspace for structured notes, revision, and practice. | React, Node.js, Express, MongoDB, Gemini, Stripe |
| [HookRelay](https://github.com/HarshithhKumar/HookRelay) | Event-processing application for verified webhooks, keyword rules, and traceable message jobs. | FastAPI, React, PostgreSQL, SQLAlchemy, Docker |
| [Kinetix](https://github.com/HarshithhKumar/Kinetix) | Human-activity recognition experiment using smartphone motion-sensor data and a BiLSTM model. | Python, TensorFlow, FastAPI, React |
| [FarmaI](https://github.com/HarshithhKumar/Farmai-agricultural-app) | Agricultural application exploring crop recommendations and plant-disease detection. | Python, Flask, TensorFlow |
| [GestureFusion](https://github.com/HarshithhKumar/GestureFusion) | Gesture-interaction prototype combining ESP32 motion sensing and signal processing. | ESP32, MATLAB, Python |
| [Heat Index](https://github.com/HarshithhKumar/heat-index) | Weather dashboard for current conditions, forecasts, and air quality. | HTML, CSS, JavaScript |
| [Burnly](https://github.com/HarshithhKumar/Burnly) | Educational regression project exploring calorie-estimation workflows. | Python, scikit-learn |

**Live demo:** [Heat Index](https://heat-index-hk.netlify.app)

## Tech I work with

- **Languages:** C, C++, Java, JavaScript, Python, SQL
- **Frontend:** React, HTML, CSS, Tailwind CSS, React Router, Vite
- **Backend:** Node.js, Express, FastAPI, REST APIs
- **Databases & services:** MongoDB, Mongoose, MySQL, PostgreSQL, Firebase, Cloudinary
- **AI/ML & data:** TensorFlow, Keras, LSTM, scikit-learn, Pandas, NumPy, Gemini API
- **IoT & embedded:** ESP32, Embedded C, MATLAB, Simulink, OSC/UDP
- **Tools & deployment:** Git, GitHub, VS Code, Postman, Docker, Vercel, Render

## Research experience

**Research Intern — IoT and Internet of Musical Things (IoMusT)**  
*SRM University-AP · June–August 2025*

Explored ESP32-based gesture sensing, sensor-data acquisition, signal processing with MATLAB and Simulink, OSC/UDP communication, and real-time musical interaction.

## Run locally

### Prerequisites

- Node.js and npm
- Git

### Install and start

```bash
git clone https://github.com/HarshithhKumar/portfolio-harshith.git
cd portfolio-harshith
npm ci
npm run dev
```

Open the local URL printed by Vite.

### Run the chat API locally

The endpoint in `api/chat.js` is a **Vercel serverless function**, so it is not served by the plain Vite development server. To run the application with the API locally, use the Vercel CLI:

```powershell
Copy-Item .env.example .env.local
# Add your GROQ_API_KEY to .env.local
npx vercel dev
```

Keep your real API key in `.env.local`. **Never commit secrets or API keys.** The committed `.env.example` contains only a placeholder.

## Useful scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
├── api/
│   └── chat.js                 # Vercel serverless chat endpoint
├── public/
│   ├── images/                 # Static project artwork
│   └── models/                 # 3D character assets
├── src/
│   ├── components/             # Homepage sections, animation, 3D scene
│   ├── pages/                  # My Works and Play pages
│   ├── config.ts               # Portfolio content and links
│   └── ...
├── .env.example                # Sample environment configuration
├── package.json
└── vite.config.ts
```

## Connect with me

I'm interested in software engineering opportunities, collaborative projects, and building products that solve real problems.

- **GitHub:** [@HarshithhKumar](https://github.com/HarshithhKumar)
- **LinkedIn:** [Sampangi Harshith Kumar](https://www.linkedin.com/in/sampangi-harshith-kumar/)
- **LeetCode:** [codewharshith](https://leetcode.com/u/codewharshith/)
- **Email:** [harshithkumar2023@gmail.com](mailto:harshithkumar2023@gmail.com)

---

<p align="center">
  Made with curiosity and code by <a href="https://github.com/HarshithhKumar">Harshith Kumar</a>.
</p>
