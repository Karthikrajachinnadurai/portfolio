// ============================================================
//  src/data/content.js – Karthik Raja's Portfolio Content
// ============================================================

export const personal = {
  name: "C. Karthik Raja",
  initials: "KR",
  title: "AI/ML Engineer",
  tagline: "I build AI that understands people and solves real-world challenges.",
  about: `Final-year Computer Science and Engineering student at Nehru Institute of Technology (Autonomous), maintaining a CGPA of 8.67 through the 6th semester with expected graduation in 2027. I am focused on beginning my career as an AI/ML Engineer, applying a strong foundation in Python, Machine Learning, Deep Learning, and NLP to build innovative, impactful solutions. In addition to technical excellence, I serve as Student Council President (2026–2027), leading campus initiatives and representing student voices.`,
  languages: ["Tamil", "English"],
  location: "Tamil Nadu, India",
  college: "Nehru Institute of Technology (Autonomous)",
  cgpa: "8.67",
  passingYear: "2027",
};

export const contact = {
  email: "karthikrajachinnadurai@gmail.com",
  phone: "+91 88254 65883",
  location: "Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/karthikrajachinnadurai",
  linkedinHandle: "karthikrajachinnadurai",
  github: "https://github.com/Karthikrajachinnadurai",
  githubHandle: "Karthikrajachinnadurai",
  resumeUrl: "/resume.pdf",
};

export const quickStats = [
  { label: "Years Study", value: "3+", icon: "📚" },
  { label: "CGPA", value: "8.67", icon: "📊" },
  { label: "Projects", value: "3+", icon: "🚀" },
  { label: "Certifications", value: "5+", icon: "🏅" },
  { label: "Awards & Honors", value: "3", icon: "🥇" },
];

export const skillsData = [
  {
    category: "Languages",
    title: "Programming Languages",
    skills: [
      { name: "Python 3", level: 90, tag: "Advanced" },
      { name: "C", level: 80, tag: "Proficient" },
    ],
  },
  {
    category: "AI & ML",
    title: "AI & Deep Learning",
    skills: [
      { name: "Machine Learning", level: 88, tag: "Advanced" },
      { name: "Deep Learning & Neural Networks", level: 85, tag: "Advanced" },
      { name: "DistilBERT & NLP", level: 86, tag: "Specialized" },
      { name: "TensorFlow", level: 82, tag: "Proficient" },
      { name: "LangChain & RAG", level: 84, tag: "Hands-on" },
      { name: "OpenAI Whisper", level: 80, tag: "Integration" },
      { name: "GenAI & LLMs (Ollama)", level: 80, tag: "Active" },
    ],
  },
  {
    category: "Web & APIs",
    title: "Web Development & APIs",
    skills: [
      { name: "FastAPI", level: 85, tag: "Backend" },
      { name: "React.js", level: 84, tag: "Frontend" },
      { name: "HTML & CSS / Tailwind", level: 88, tag: "Styling" },
      { name: "Django", level: 78, tag: "Framework" },
      { name: "Bootstrap", level: 80, tag: "UI" },
      { name: "Streamlit", level: 85, tag: "AI UI" },
    ],
  },
  {
    category: "Data & Tools",
    title: "Databases & Tools",
    skills: [
      { name: "MySQL", level: 86, tag: "Database" },
      { name: "FAISS Vector DB", level: 82, tag: "Vector Search" },
      { name: "NumPy & Pandas", level: 88, tag: "Data Analysis" },
      { name: "Git & GitHub", level: 88, tag: "Version Control" },
      { name: "Docker", level: 75, tag: "DevOps" },
      { name: "VS Code & PyCharm", level: 90, tag: "IDE" },
      { name: "Jupyter Notebook", level: 90, tag: "Research" },
    ],
  },
  {
    category: "Leadership & Soft Skills",
    title: "Core Competencies",
    skills: [
      { name: "Student Leadership (President)", level: 95, tag: "Executive" },
      { name: "Problem Solving & Logic", level: 92, tag: "Analytical" },
      { name: "Technical Communication", level: 90, tag: "Presentation" },
      { name: "Quick Adaptive Learning", level: 94, tag: "Agile" },
    ],
  },
];

export const experienceData = [
  {
    id: "exp-president",
    role: "Student Council President",
    organization: "Nehru Institute of Technology (Autonomous)",
    period: "2026 – 2027",
    type: "Leadership",
    location: "Coimbatore, Tamil Nadu",
    badge: "Elected Campus Leader",
    overview:
      "Elected by peers and faculty to head the institution's apex Student Council, representing over thousands of engineering students and coordinating campus-wide technical, academic, and cultural events.",
    responsibilities: [
      "Act as primary liaison between student body and college senior administration, dean, and department heads.",
      "Lead and oversee college committees, symposium delegations, and multi-departmental technical fests.",
      "Facilitate open feedback mechanisms, grievance resolutions, and student career empowerment workshops.",
      "Spearhead initiatives supporting technical learning clubs, coding hackathons, and collaborative student projects.",
    ],
    achievements: [
      "Recognized for proactive leadership in unifying student clubs and boosting symposium participation.",
      "Championed student-led peer learning sessions in programming, AI foundations, and career readiness.",
    ],
    technologies: ["Leadership", "Public Speaking", "Event Management", "Strategic Communication", "Team Delegation"],
  },
];

export const projectsData = [
  {
    id: "mental-health",
    title: "AI Mental Health Assistant",
    category: "AI & NLP",
    badge: "Flagship AI Project",
    status: "Completed",
    featured: true,
    summary:
      "An end-to-end AI mental health platform featuring fine-tuned DistilBERT emotion classification, CBT-inspired therapeutic responses, speech recognition via Whisper, and interactive wellness tracking.",
    overview:
      "Designed to address emotional well-being using modern natural language processing. The system analyzes conversational text and audio to detect nuanced emotional states and generate empathetic, context-aware responses inspired by Cognitive Behavioral Therapy principles.",
    features: [
      "Fine-tuned DistilBERT on multi-class emotion datasets for high-accuracy emotion prediction.",
      "Comprehensive AI inference pipeline: text preprocessing, confidence estimation, and personalized response synthesis.",
      "Integrated OpenAI Whisper for seamless voice-to-text input, making mental health support accessible hands-free.",
      "Robust FastAPI backend with JWT authentication and MySQL for encrypted chat history and user session safety.",
      "React frontend featuring emotion analytics trends, wellness milestone streaks, and dynamic dark/light aesthetics.",
    ],
    challenges:
      "Balancing emotional nuance classification while mitigating hallucinated clinical advice; solved by grounding responses in established CBT safety guidelines and confidence threshold filters.",
    technologies: ["Python", "TensorFlow", "DistilBERT", "FastAPI", "React.js", "MySQL", "OpenAI Whisper"],
    github: "https://github.com/Karthikrajachinnadurai",
    demo: null,
  },
  {
    id: "news-research",
    title: "News Research Tool (RAG System)",
    category: "AI Engineer",
    badge: "Generative AI",
    status: "Completed",
    featured: true,
    summary:
      "A Retrieval-Augmented Generation (RAG) research platform that ingests live article URLs, chunks content, indexes vector embeddings with FAISS, and answers questions using Ollama Llama 3.2 with verified citations.",
    overview:
      "A powerful tool for researchers and analysts to extract factual insights from news articles without reading through dense text. Enables real-time document analysis with complete source attribution.",
    features: [
      "Automated URL content parsing and intelligent recursive character text chunking.",
      "Semantic vector indexing using HuggingFace embeddings and high-speed FAISS similarity search.",
      "Integration with local Ollama Llama 3.2 model for privacy-first, zero-cloud inference cost.",
      "Interactive Streamlit interface with click-through source references and question history tracking.",
    ],
    challenges:
      "Minimizing retrieval latency and chunk fragmentation across dynamic web news layouts; resolved using semantic splitting and FAISS index caching.",
    technologies: ["Python", "LangChain", "RAG", "FAISS", "Ollama (Llama 3.2)", "HuggingFace", "Streamlit"],
    github: "https://github.com/Karthikrajachinnadurai",
    demo: null,
  },
  {
    id: "atm-system",
    title: "ATM Transaction System",
    category: "Full Stack & Systems",
    badge: "Systems & Security",
    status: "Completed",
    featured: false,
    summary:
      "A console-based ATM management engine featuring authenticated banking operations, persistent MySQL transaction logging, and real-time SMS alerts integrated through Twilio API.",
    overview:
      "Built to demonstrate foundational software engineering best practices: concurrency, transactional atomicity, credential hashing, and external communication webhooks.",
    features: [
      "Secure PIN authentication, session handling, and defensive input validation.",
      "Core banking features: Cash deposit, instant withdrawal, and balance ledger inquiries.",
      "Relational MySQL schema ensuring ACID compliance and transaction durability.",
      "Integrated Twilio API for instantaneous SMS transaction alerts delivered directly to the user's phone.",
    ],
    challenges:
      "Preventing race conditions and improper state modification during withdrawal operations; solved using database transactions and verification checks.",
    technologies: ["Python", "MySQL", "Twilio API", "Security & Auth"],
    github: "https://github.com/Karthikrajachinnadurai",
    demo: null,
  },
];

export const certificatesData = [
  {
    id: "cert-1st-prize",
    title: "1st Place — Pen & Program Coding Event",
    category: "Contest",
    issuer: "TechGeeks 2025 National Level Symposium",
    institution: "Dhaanish Ahmed Institute of Technology, Coimbatore",
    date: "8 April 2025",
    type: "Award",
    verified: true,
    credentialId: "TECHGEEKS-2025-1ST",
    skills: ["Competitive Programming", "Python", "Algorithms", "Problem Solving"],
    description:
      "Secured 1st Place in the intense Pen & Program multi-round competitive coding contest competing against top engineering colleges across Tamil Nadu.",
  },
  {
    id: "cert-3rd-prize",
    title: "3rd Place — AI Powered Rail Safety for Public Benefit",
    category: "Symposium",
    issuer: "TechGeeks 2025 National Level Symposium",
    institution: "Dhaanish Ahmed Institute of Technology, Coimbatore",
    date: "8 April 2025",
    type: "Award",
    verified: true,
    credentialId: "TECHGEEKS-2025-3RD",
    skills: ["AI Systems", "Computer Vision", "Public Safety", "Technical Presentation"],
    description:
      "Awarded 3rd Place for innovative presentation proposing AI-driven automated track inspection and obstacle prevention mechanisms for Indian Railways.",
  },
  {
    id: "cert-paper-presentation",
    title: "Presentation — AI Powered Rail Safety for Public Benefit",
    category: "Symposium",
    issuer: "Tech Magnetz 2024 National Level Symposium",
    institution: "Hindusthan Institute of Technology, Coimbatore",
    date: "26 March 2024",
    type: "Presentation",
    verified: true,
    credentialId: "TECHMAGNETZ-2024-PRES",
    skills: ["Deep Learning", "Sensor Fusion", "Paper Presentation", "Research"],
    description:
      "Presented peer-reviewed research on implementing real-time computer vision models on edge devices for rail infrastructure hazard detection.",
  },
  {
    id: "cert-stanford",
    title: "Supervised Machine Learning: Regression & Classification",
    category: "Certification",
    issuer: "DeepLearning.AI & Stanford Online (Coursera)",
    institution: "Stanford University / DeepLearning.AI",
    date: "May 2026",
    type: "Course",
    verified: true,
    credentialId: "COURSERA-STANFORD-ML",
    skills: ["Supervised Learning", "Linear Regression", "Logistic Regression", "Gradient Descent", "Evaluation Metrics"],
    description:
      "Comprehensive certification covering foundational algorithms, loss optimization, regularization, and performance tuning by Andrew Ng.",
  },
  {
    id: "cert-ibm",
    title: "Python for Data Science, AI & Development",
    category: "Certification",
    issuer: "IBM (Coursera)",
    institution: "IBM Developer Skills Network",
    date: "Certified",
    type: "Course",
    verified: true,
    credentialId: "IBM-PY-DS-AI",
    skills: ["Python 3", "Pandas", "NumPy", "Data Scraping", "REST APIs"],
    description:
      "Hands-on program in Python programming for data extraction, manipulation, statistical analysis, and AI application engineering.",
  },
  {
    id: "cert-oracle",
    title: "AI Foundations Associate",
    category: "Certification",
    issuer: "Oracle University",
    institution: "Oracle",
    date: "Certified",
    type: "Industry",
    verified: true,
    credentialId: "ORACLE-AI-FOUNDATIONS",
    skills: ["AI Foundations", "Machine Learning Concepts", "Neural Networks", "Cloud AI"],
    description:
      "Official Oracle credential certifying essential principles of Artificial Intelligence, Machine Learning workloads, and enterprise architectures.",
  },
  {
    id: "cert-nptel",
    title: "NPTEL Certification",
    category: "Certification",
    issuer: "Indian Institute of Technology Madras (IIT Madras)",
    institution: "IIT Madras (NPTEL)",
    date: "Certified",
    type: "Academic",
    verified: true,
    credentialId: "NOC25CS60S443407364",
    skills: ["Computer Science", "Data Structures", "System Design"],
    description:
      "Prestigious national certification from IIT Madras demonstrating proficiency through proctored examinations.",
  },
  {
    id: "cert-workshop",
    title: "Workshop: Green Skills and Python",
    category: "Workshop",
    issuer: "Nehru Institute of Technology",
    institution: "Nehru Institute of Technology (Autonomous)",
    date: "Completed",
    type: "Workshop",
    verified: true,
    credentialId: "NIT-GREEN-PYTHON-2025",
    skills: ["Python for Sustainability", "Data Modeling", "Environmental Tech"],
    description:
      "Intensive hands-on workshop exploring scientific data modeling and python scripts for climate analysis and resource optimization.",
  },
];

export const educationData = [
  {
    id: "edu-1",
    degree: "B.E. Computer Science and Engineering",
    institution: "Nehru Institute of Technology (Autonomous)",
    location: "Coimbatore, Tamil Nadu",
    period: "2023 – 2027 (Expected)",
    grade: "CGPA: 8.67 (through 6th Semester)",
    icon: "🎓",
    highlight: "Student Council President (2026–2027)",
  },
  {
    id: "edu-2",
    degree: "Higher Secondary — Class XII (CBSE)",
    institution: "Sri Ramakrishna Public School",
    location: "Tamil Nadu, India",
    period: "2022",
    grade: "78.6%",
    icon: "📚",
    highlight: "Computer Science & Mathematics Stream",
  },
  {
    id: "edu-3",
    degree: "Secondary School — Class X (CBSE)",
    institution: "Sri Ramakrishna Public School",
    location: "Tamil Nadu, India",
    period: "2020",
    grade: "89.9%",
    icon: "📖",
    highlight: "High Distinction",
  },
];
