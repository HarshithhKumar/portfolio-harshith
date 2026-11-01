import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon?: string;
  iconText?: string;
  url: string;
}

// Technologies and tools included in the portfolio's verified skill set.
const techStack: TechItem[][] = [
  [
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", url: "https://isocpp.org" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://typescriptlang.org" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://python.org" },
  ],
  [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", url: "https://vite.dev" },
  ],
  [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", url: "https://expressjs.com" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", url: "https://fastapi.tiangolo.com" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", url: "https://flask.palletsprojects.com" },
  ],
  [
    { name: "REST APIs", iconText: "API", url: "https://developer.mozilla.org/en-US/docs/Glossary/REST" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://mongodb.com" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", url: "https://postgresql.org" },
    { name: "SQLAlchemy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg", url: "https://sqlalchemy.org" },
  ],
  [
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", url: "https://firebase.google.com" },
    { name: "Stripe", iconText: "PAY", url: "https://stripe.com" },
    { name: "Gemini API", iconText: "AI", url: "https://ai.google.dev/gemini-api/docs" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", url: "https://tensorflow.org" },
  ],
  [
    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", url: "https://scikit-learn.org" },
    { name: "Hugging Face Transformers", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", url: "https://huggingface.co/docs/transformers" },
    { name: "ESP32", iconText: "ESP32", url: "https://www.espressif.com/en/products/socs/esp32" },
    { name: "MATLAB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg", url: "https://mathworks.com/products/matlab.html" },
  ],
  [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com/HarshithhKumar" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://docker.com" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", url: "https://vercel.com" },
  ],
  [
    { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", url: "https://netlify.com" },
    { name: "Render", iconText: "R", url: "https://render.com" },
    { name: "OpenWeather API", iconText: "WX", url: "https://openweathermap.org/api" },
  ],
  [
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", url: "https://en.cppreference.com/w/c" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", url: "https://dev.java" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com" },
    { name: "React Router", iconText: "RR", url: "https://reactrouter.com" },
  ],
  [
    { name: "Axios", iconText: "HTTP", url: "https://axios-http.com" },
    { name: "Mongoose", iconText: "M", url: "https://mongoosejs.com" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://mysql.com" },
    { name: "JWT Authentication", iconText: "JWT", url: "https://jwt.io" },
  ],
  [
    { name: "Multer", iconText: "UP", url: "https://github.com/expressjs/multer" },
    { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg", url: "https://keras.io" },
    { name: "LSTM", iconText: "RNN", url: "https://www.tensorflow.org/guide/keras/rnn" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", url: "https://pandas.pydata.org" },
  ],
  [
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", url: "https://numpy.org" },
    { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg", url: "https://matplotlib.org" },
    { name: "Seaborn", iconText: "SNS", url: "https://seaborn.pydata.org" },
    { name: "Google OAuth 2.0", iconText: "OAuth", url: "https://developers.google.com/identity/protocols/oauth2" },
  ],
  [
    { name: "Cloudinary", iconText: "CLD", url: "https://cloudinary.com" },
    { name: "Embedded C", iconText: "C", url: "https://en.cppreference.com/w/c" },
    { name: "Simulink", iconText: "SIM", url: "https://www.mathworks.com/products/simulink.html" },
    { name: "Arduino IDE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", url: "https://www.arduino.cc/en/software" },
  ],
  [
    { name: "OSC/UDP", iconText: "UDP", url: "https://opensoundcontrol.stanford.edu" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", url: "https://postman.com" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>
        
        <div className="techstack-pyramid">
          {techStack.flat().map((tech) => (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="techstack-item"
              title={tech.name}
              data-cursor="disable"
            >
              {tech.icon ? (
                <img src={tech.icon} alt="" loading="lazy" decoding="async" />
              ) : (
                <div className="techstack-icon-fallback" aria-hidden="true">
                  {tech.iconText}
                </div>
              )}
              <span>{tech.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
