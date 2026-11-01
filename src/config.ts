type ContactDetails = {
    email?: string;
    phone?: string;
    github: string;
    resume?: string;
    linkedin?: string;
    leetcode?: string;
};

const contact: ContactDetails = {
    email: "harshithkumar2023@gmail.com",
    phone: "+91-99494-30180",
    github: "https://github.com/HarshithhKumar",
    linkedin: "https://www.linkedin.com/in/sampangi-harshith-kumar/",
    leetcode: "https://leetcode.com/u/codewharshith/"
};

export const config = {
    developer: {
        name: "Harshith",
        heroName: "Harshith Kumar",
        fullName: "Sampangi Harshith Kumar",
        title: "Fourth-Year Computer Science and Engineering Student | Aspiring Software Engineer",
        roles: ["Fourth-Year CSE Student", "Aspiring Software Engineer"],
        description: "I build full-stack applications and AI-powered products, and I am interested in machine learning, intelligent applications, and connected systems."
    },
    social: {
        github: "HarshithhKumar",
        location: "Hyderabad, Telangana, India"
    },
    about: {
        title: "About Me",
        description: "I'm Sampangi Harshith Kumar, a fourth-year Computer Science and Engineering student specialising in AI and Machine Learning at SRM University-AP. I enjoy turning ideas into practical software, from full-stack applications to products that use AI to make information more useful. My research internship introduced me to IoT, sensor-driven systems, signal processing, and real-time interaction, and it showed me how much I enjoy connecting software with the physical world. I keep strengthening my programming and software engineering fundamentals by building, experimenting, and improving real projects. My goal is to grow into a capable software engineer and contribute to products that solve meaningful problems."
    },
    experiences: [
        {
            position: "B.Tech Computer Science and Engineering (AI/ML)",
            company: "SRM University-AP",
            period: "2023 - Present",
            description: "Started my engineering journey in August 2023, building foundations in programming, mathematics, algorithms, and core computer science. Earlier education: Sri Chaitanya Junior Kalasala, Hyderabad (Intermediate Public Examination, 79%), and Sri Chaitanya High School, Hyderabad (CBSE Class X, 84%)."
        },
        {
            position: "Research Intern — IoT and Internet of Musical Things",
            company: "SRM University-AP",
            period: "2025",
            description: "From June to August 2025, explored ESP32 gesture recognition, sensor data acquisition, signal preprocessing in MATLAB and Simulink, OSC/UDP communication, and real-time audio interaction—connecting hardware, software, and responsive systems."
        },
        {
            position: "Machine Learning and Activity Recognition",
            company: "Kinetix",
            period: "2025",
            description: "Worked with smartphone accelerometer and gyroscope time-series from the UCI HAR dataset, preprocessing sensor windows and training an LSTM model in TensorFlow and Keras to classify six activities. The resume reports approximately 97% test accuracy; evaluation details remain under re-validation."
        },
        {
            position: "Full-Stack Product Development",
            company: "StreamVerse",
            period: "2025",
            description: "Developed an AI-powered video-streaming platform using React, Node.js, Express, and MongoDB, with JWT and Google OAuth sign-in, Creator Studio, playlists, subscriptions, watch history, and AI-powered search and recommendations."
        },
        {
            position: "Professional Certification",
            company: "Oracle Certified Professional: Java SE 17 Developer",
            period: "2026",
            description: "Earned the Oracle Certified Professional credential in Java SE 17 in March 2026."
        },
        {
            position: "AI-Powered Product Building",
            company: "PrepPilot AI",
            period: "2026",
            description: "Built an AI exam-notes platform with React, Node.js, Express, MongoDB, Gemini API, and Google OAuth, with Stripe payments and structured study notes and revision tools."
        },
        {
            position: "Fourth-Year Engineering",
            company: "SRM University-AP",
            period: "2026 - Present",
            description: "Currently focusing on advanced programming and data structures, full-stack development, AI and machine learning, and software engineering practices while preparing to contribute to useful, maintainable products."
        }
    ],
    projects: [
        {
            id: 1,
            title: "PrepPilot AI",
            category: "AI / Education",
            technologies: "React, Express, MongoDB, Firebase, Gemini, Stripe",
            image: "https://raw.githubusercontent.com/HarshithhKumar/PrepPilot-AI/main/docs/screenshots/sign-in.png",
            description: "A study workspace that turns topics into structured notes, revision points, and practice questions. It supports saved study materials, PDF export, Google sign-in, and an account-based credit system.",
            link: "https://github.com/HarshithhKumar/PrepPilot-AI"
        },
        {
            id: 2,
            title: "HookRelay",
            category: "Backend / Automation",
            technologies: "FastAPI, React, SQLAlchemy, PostgreSQL, Docker",
            image: "https://raw.githubusercontent.com/HarshithhKumar/HookRelay/main/docs/screenshots/dashboard.png",
            description: "An event-processing application that verifies signed comment events, matches keyword rules, and creates traceable message jobs. Its outbound integration uses a mock upstream API.",
            link: "https://github.com/HarshithhKumar/HookRelay"
        },
        {
            id: 3,
            title: "Kinetix",
            category: "AI / Activity Recognition",
            technologies: "Python, TensorFlow, FastAPI, React",
            image: "https://raw.githubusercontent.com/HarshithhKumar/Kinetix/main/docs/screenshots/live-prediction.png",
            description: "A human-activity recognition demo that classifies smartphone accelerometer and gyroscope data using a BiLSTM model, with a FastAPI backend and React dashboard. Model evaluation is being re-validated.",
            link: "https://github.com/HarshithhKumar/Kinetix"
        },
        {
            id: 4,
            title: "FarmaI",
            category: "AI / Agriculture",
            technologies: "Python, Flask, TensorFlow, Transformers",
            image: "/images/project-farmai.svg",
            description: "An agricultural application with crop and fertilizer recommendations, soil-image prediction, and a plant-leaf disease detection workflow.",
            link: "https://github.com/HarshithhKumar/Farmai-agricultural-app"
        },
        {
            id: 5,
            title: "GestureFusion",
            category: "IoT / Machine Learning",
            technologies: "ESP32, MATLAB, Python, scikit-learn",
            image: "/images/project-gesturefusion.svg",
            description: "An exploratory gesture-interaction prototype connecting ESP32 motion sensing, MATLAB signal processing, and a Python Random Forest training workflow. The current training pipeline uses synthetic data.",
            link: "https://github.com/HarshithhKumar/GestureFusion"
        },
        {
            id: 6,
            title: "Heat Index",
            category: "Weather / Web",
            technologies: "HTML, CSS, JavaScript, OpenWeather API, Netlify Functions",
            image: "/images/project-heat-index.svg",
            description: "A lightweight weather dashboard for city search, current conditions, forecasts, air quality, and sunrise and sunset information.",
            link: "https://github.com/HarshithhKumar/heat-index",
            demo: "https://heat-index-hk.netlify.app"
        },
        {
            id: 7,
            title: "Burnly",
            category: "Machine Learning",
            technologies: "Python, scikit-learn, pytest",
            image: "/images/project-burnly.svg",
            description: "An educational regression workflow for calorie-estimation experiments, with data preparation, model evaluation, and a results dashboard. Synthetic-data results are not validated for real-world or health use.",
            link: "https://github.com/HarshithhKumar/Burnly"
        }
    ],
    contact,
    skills: {
        areas: [
            {
                title: "FULL-STACK DEVELOPMENT",
                description: "Building end-to-end web products",
                details: "I work across responsive React frontends, REST APIs, authentication and authorization, database integration, payment flows, and application deployment.",
                tools: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Stripe", "Render", "Vercel"]
            },
            {
                title: "AI & MACHINE LEARNING",
                description: "Exploring intelligent, data-driven applications",
                details: "I experiment with model training and evaluation, time-series data, and generative AI integrations for practical products.",
                tools: ["Gemini API", "TensorFlow", "Keras", "LSTM", "Scikit-learn", "Pandas", "NumPy"]
            },
            {
                title: "IoT & EMBEDDED SYSTEMS",
                description: "Connecting software with sensor-driven devices",
                details: "My IoMusT research internship introduced me to sensor acquisition, signal preprocessing, and real-time interaction between hardware and software.",
                tools: ["ESP32", "Embedded C", "MATLAB", "Simulink", "OSC/UDP", "IoT"]
            },
            {
                title: "DATA STRUCTURES & PROBLEM SOLVING",
                description: "Strengthening core computer science foundations",
                details: "I continue to practise programming and build a stronger foundation in object-oriented design and the systems behind software.",
                tools: ["C", "C++", "Java", "DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"]
            },
            {
                title: "PRODUCT ENGINEERING",
                description: "Turning ideas into working applications",
                details: "I focus on practical project architecture, API design, data modelling, secure sign-in, testing, debugging, and deployment workflows.",
                tools: ["Project Architecture", "API Design", "MongoDB", "MySQL", "Testing", "Debugging", "Render", "Vercel"]
            }
        ]
    }
};
