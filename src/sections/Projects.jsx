import { useState, useEffect } from "react";
import { Tag, ExternalLink, Code2, AlertCircle, RefreshCw } from "lucide-react";

const GITHUB_USERNAME = "Karthikrajachinnadurai";

// Read GITHUB_TOKEN from the environment only. Never hardcode, print, or commit it.
const GITHUB_TOKEN =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_GITHUB_TOKEN) ||
  (typeof process !== "undefined" && process.env?.GITHUB_TOKEN) ||
  "";

// Clean category taxonomy
const CATEGORIES = [
  "All",
  "Machine Learning",
  "Data Science",
  "Healthcare AI",
  "Academic Systems",
  "AI Engineer",
];

// Flat vector illustrations for each card cover (Quantum Aurora tuned)
function ProjectIllustration({ type }) {
  switch (type) {
    case "supply-chain":
      return (
        <svg className="w-full h-full opacity-80" viewBox="0 0 320 160" fill="none">
          <line x1="20" y1="30" x2="300" y2="30" stroke="rgba(255,255,255,0.12)" strokeDasharray="3 3" />
          <line x1="20" y1="70" x2="300" y2="70" stroke="rgba(255,255,255,0.12)" strokeDasharray="3 3" />
          <line x1="20" y1="110" x2="300" y2="110" stroke="rgba(255,255,255,0.12)" strokeDasharray="3 3" />
          <path d="M 30 115 L 90 95 L 150 100 L 210 60 L 270 40" stroke="#F5F5F7" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="30" cy="115" r="3.5" fill="#F5F5F7" />
          <circle cx="90" cy="95" r="3.5" fill="#F5F5F7" />
          <circle cx="150" cy="100" r="3.5" fill="#F5F5F7" />
          <circle cx="210" cy="60" r="3.5" fill="#F5F5F7" />
          <circle cx="270" cy="40" r="4.5" fill="#00F0FF" />
          <g transform="translate(45, 45) scale(0.9)" stroke="#F5F5F7" strokeWidth="1.8" fill="none">
            <rect x="0" y="5" width="22" height="15" rx="1.5" />
            <path d="M 22 10 L 30 10 L 34 15 L 34 20 L 22 20 Z" />
            <circle cx="7" cy="21" r="2.5" fill="#F5F5F7" />
            <circle cx="28" cy="21" r="2.5" fill="#F5F5F7" />
          </g>
          <g transform="translate(240, 75) scale(0.9)" stroke="#F5F5F7" strokeWidth="1.8" fill="none">
            <path d="M 0 10 L 12 0 L 24 10 L 24 24 L 0 24 Z" />
            <rect x="8" y="14" width="8" height="10" />
          </g>
        </svg>
      );

    case "board-game":
      return (
        <svg className="w-full h-full opacity-80" viewBox="0 0 320 160" fill="none">
          <g transform="translate(60, 20)">
            {[0, 1, 2, 3, 4].map((i) => (
              <path
                key={i}
                transform={`translate(${i * 26}, 0) scale(0.65)`}
                d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.784 1.399 8.164-7.333-3.856-7.333 3.856 1.399-8.164-5.934-5.784 8.2-1.192zm0 0"
                fill="#F5C542"
              />
            ))}
          </g>
          <g opacity="0.65">
            <circle cx="60" cy="65" r="4" fill="#00F0FF" />
            <circle cx="100" cy="65" r="4" fill="#F5C542" />
            <circle cx="140" cy="65" r="4" fill="#A78BFA" />
            <circle cx="60" cy="95" r="4" fill="#A78BFA" />
            <circle cx="100" cy="95" r="4" fill="#F5F5F7" />
            <circle cx="140" cy="95" r="4" fill="#00F0FF" />
          </g>
          <g transform="translate(190, 50)" fill="#F5F5F7">
            <rect x="0" y="35" width="12" height="35" rx="1.5" opacity="0.7" />
            <rect x="18" y="20" width="12" height="50" rx="1.5" opacity="0.85" />
            <rect x="36" y="5" width="12" height="65" rx="1.5" fill="#00F0FF" />
            <rect x="54" y="25" width="12" height="45" rx="1.5" opacity="0.75" />
            <line x1="-5" y1="70" x2="75" y2="70" stroke="#F5F5F7" strokeWidth="1.5" />
          </g>
        </svg>
      );

    case "drug-response":
      return (
        <svg className="w-full h-full opacity-80" viewBox="0 0 320 160" fill="none">
          <path
            d="M 20 80 Q 55 40, 90 80 T 160 80 T 230 80 T 300 80"
            stroke="rgba(0,240,255,0.45)"
            strokeWidth="2"
            fill="none"
          />
          <g transform="translate(45, 30)" stroke="#00F0FF" strokeWidth="2.5">
            <line x1="8" y1="0" x2="8" y2="16" />
            <line x1="0" y1="8" x2="16" y2="8" />
          </g>
          <g transform="translate(260, 40) scale(0.8)" stroke="rgba(167,139,250,0.6)" strokeWidth="2.5">
            <line x1="8" y1="0" x2="8" y2="16" />
            <line x1="0" y1="8" x2="16" y2="8" />
          </g>
          <g transform="translate(130, 45) rotate(-30)" fill="none" stroke="#F5F5F7" strokeWidth="2">
            <rect x="0" y="0" width="40" height="18" rx="9" fill="rgba(0,240,255,0.18)" />
            <line x1="20" y1="0" x2="20" y2="18" stroke="#00F0FF" strokeWidth="2" />
          </g>
          <g transform="translate(190, 70) rotate(20)" fill="none" stroke="#A78BFA" strokeWidth="2">
            <rect x="0" y="0" width="36" height="16" rx="8" fill="rgba(167,139,250,0.22)" />
            <line x1="18" y1="0" x2="18" y2="16" stroke="#A78BFA" strokeWidth="2" />
          </g>
        </svg>
      );

    case "rag-news":
      return (
        <svg className="w-full h-full opacity-80" viewBox="0 0 320 160" fill="none">
          <rect x="40" y="30" width="55" height="70" rx="3" stroke="#F5F5F7" strokeWidth="2" fill="rgba(0,240,255,0.12)" />
          <line x1="50" y1="45" x2="82" y2="45" stroke="#00F0FF" strokeWidth="2" />
          <line x1="50" y1="58" x2="82" y2="58" stroke="#F5F5F7" strokeWidth="2" />
          <line x1="50" y1="71" x2="72" y2="71" stroke="#F5F5F7" strokeWidth="2" />
          <path d="M 105 65 L 145 65" stroke="#A78BFA" strokeWidth="2" strokeDasharray="3 3" />
          <g transform="translate(160, 40)" stroke="#F5F5F7" strokeWidth="1.8">
            <circle cx="20" cy="15" r="7" fill="#00F0FF" />
            <circle cx="55" cy="10" r="5" fill="#A78BFA" />
            <circle cx="45" cy="45" r="6" fill="#F5C542" />
            <circle cx="10" cy="50" r="5" fill="#00F0FF" />
            <line x1="20" y1="15" x2="55" y2="10" opacity="0.6" />
            <line x1="20" y1="15" x2="45" y2="45" opacity="0.6" />
            <line x1="10" y1="50" x2="45" y2="45" opacity="0.6" />
            <line x1="20" y1="15" x2="10" y2="50" opacity="0.6" />
          </g>
        </svg>
      );

    case "atm-system":
      return (
        <svg className="w-full h-full opacity-80" viewBox="0 0 320 160" fill="none">
          <rect x="50" y="25" width="80" height="95" rx="5" stroke="#F5F5F7" strokeWidth="2" fill="rgba(0,240,255,0.1)" />
          <rect x="62" y="38" width="56" height="26" rx="2" fill="rgba(0,240,255,0.25)" stroke="#00F0FF" strokeWidth="1.5" />
          <g transform="translate(66, 75)" fill="#F5F5F7">
            <circle cx="5" cy="5" r="2.5" />
            <circle cx="17" cy="5" r="2.5" />
            <circle cx="29" cy="5" r="2.5" />
            <circle cx="41" cy="5" r="2.5" />
            <circle cx="5" cy="17" r="2.5" />
            <circle cx="17" cy="17" r="2.5" />
            <circle cx="29" cy="17" r="2.5" />
            <circle cx="41" cy="17" r="2.5" />
          </g>
          <g transform="translate(180, 45) rotate(12)" stroke="#F5F5F7" strokeWidth="2" fill="rgba(167,139,250,0.18)">
            <rect x="0" y="0" width="70" height="42" rx="4" />
            <line x1="0" y1="12" x2="70" y2="12" stroke="#F5F5F7" strokeWidth="2" />
            <rect x="10" y="22" width="14" height="10" rx="1.5" fill="#F5C542" stroke="none" />
          </g>
        </svg>
      );

    case "healthcare-ai":
    default:
      return (
        <svg className="w-full h-full opacity-80" viewBox="0 0 320 160" fill="none">
          <path d="M 20 80 L 70 80 L 85 45 L 105 110 L 120 70 L 135 85 L 150 80 L 300 80" stroke="#F5F5F7" strokeWidth="2" />
          <circle cx="85" cy="45" r="3.5" fill="#00F0FF" />
          <circle cx="105" cy="110" r="3.5" fill="#A78BFA" />
          <g opacity="0.4" stroke="#F5F5F7" strokeWidth="1">
            <circle cx="220" cy="50" r="14" />
            <circle cx="220" cy="50" r="28" strokeDasharray="3 3" />
            <circle cx="250" cy="90" r="10" />
            <line x1="220" y1="50" x2="250" y2="90" />
          </g>
        </svg>
      );
  }
}

// RAG Flagship Project pinned at the very first position (Cyan-to-Violet gradient, AI Engineer category)
const RAG_PROJECT = {
  id: "rag-news-research",
  name: "News Research Tool (RAG System)",
  coverMain: "News Research Tool",
  coverSub: "LangChain RAG & FAISS Vector Engine",
  gradient: "from-[#005274] via-[#1E1B4B] to-[#2E1065]",
  illustrationType: "rag-news",
  category: "AI Engineer",
  description:
    "Retrieval-Augmented Generation (RAG) platform extracting factual insights and citations from article URLs using semantic chunking, vector embeddings, and local LLM reasoning.",
  chips: ["Python", "LangChain", "RAG", "FAISS", "Ollama (Llama 3.2)"],
  url: "https://github.com/Karthikrajachinnadurai",
};

// Fallback public projects with refined Cyan-to-Violet and Cyan-to-Deep-Blue gradients
const FALLBACK_PUBLIC_REPOS = [
  RAG_PROJECT,
  {
    id: "gh-emotion-classifier",
    name: "Emotion Classifier (Mental Health)",
    coverMain: "Emotion Classification",
    coverSub: "Speech-to-Text & NLP Detection",
    gradient: "from-[#005B7F] via-[#2A1D5D] to-[#1E1B4B]",
    illustrationType: "healthcare-ai",
    category: "Healthcare AI",
    description:
      "AI Mental Health Assistant with Speech-to-Text and Emotion Detection using fine-tuned models.",
    chips: ["Python", "FastAPI", "NLP", "Speech-to-Text"],
    url: "https://github.com/Karthikrajachinnadurai/Emotion_classifier",
  },
  {
    id: "gh-flower-cnn",
    name: "CNN Flower Classification",
    coverMain: "Flower Classifier (CNN)",
    coverSub: "Deep Learning & Image Recognition",
    gradient: "from-[#00475E] via-[#0E2C68] to-[#0A1238]",
    illustrationType: "board-game",
    category: "Machine Learning",
    description:
      "Flower Classification using Convolutional Neural Networks for botanical image recognition.",
    chips: ["Python", "CNN", "Computer Vision", "TensorFlow"],
    url: "https://github.com/Karthikrajachinnadurai/CNN-Flower",
  },
  {
    id: "gh-ann",
    name: "Titanic Survival Prediction (ANN)",
    coverMain: "Titanic Survival Prediction",
    coverSub: "Artificial Neural Network",
    gradient: "from-[#086788] via-[#12356B] to-[#091636]",
    illustrationType: "board-game",
    category: "Machine Learning",
    description:
      "Titanic Survival Prediction using an Artificial Neural Network (ANN) built with TensorFlow/Keras.",
    chips: ["Python", "ANN", "Deep Learning", "Keras"],
    url: "https://github.com/Karthikrajachinnadurai/ANN",
  },
  {
    id: "gh-xray-cnn",
    name: "Chest X-Ray COVID-19 Classifier",
    coverMain: "Chest X-Ray Classifier",
    coverSub: "Deep Convolutional Neural Network",
    gradient: "from-[#00475E] via-[#0D2152] to-[#091129]",
    illustrationType: "healthcare-ai",
    category: "Healthcare AI",
    description:
      "X-Ray COVID-19 Classification with Convolutional Neural Networks.",
    chips: ["Python", "CNN", "Deep Learning", "TensorFlow"],
    url: "https://github.com/Karthikrajachinnadurai/X-ray-CNN",
  },
  {
    id: "gh-opencv",
    name: "OpenCV Computer Vision Basics",
    coverMain: "OpenCV Computer Vision",
    coverSub: "Image Processing Pipeline",
    gradient: "from-[#005274] via-[#0C2D54] to-[#0A1535]",
    illustrationType: "supply-chain",
    category: "Machine Learning",
    description:
      "Image Processing Pipeline: Color Conversion, Grayscale, Gaussian Blur, Canny Edge Detection.",
    chips: ["Python", "OpenCV", "Computer Vision"],
    url: "https://github.com/Karthikrajachinnadurai/OpenCV-Basics",
  },
  {
    id: "gh-nlp-emotion",
    name: "NLP Emotion Classification",
    coverMain: "NLP Emotion Classification",
    coverSub: "TF-IDF, Word2Vec & Multi-Model",
    gradient: "from-[#004D68] via-[#24174D] to-[#1E1B4B]",
    illustrationType: "healthcare-ai",
    category: "Machine Learning",
    description:
      "NLP Emotion Classification using Logistic Regression, Random Forest, Gradient Boosting & SVM with TF-IDF and Word2Vec.",
    chips: ["Python", "NLP", "Scikit-Learn", "TF-IDF"],
    url: "https://github.com/Karthikrajachinnadurai/NLP-Emotion-Classification",
  },
  {
    id: "gh-brain-tumor",
    name: "Brain Tumor Detection",
    coverMain: "Brain Tumor Detection",
    coverSub: "CNN & MobileNetV2 MRI Classifier",
    gradient: "from-[#003E54] via-[#10245E] to-[#1E1B4B]",
    illustrationType: "healthcare-ai",
    category: "Healthcare AI",
    description:
      "Brain Tumor Detection using CNN and MobileNetV2 - Classifies brain MRI scans into Glioma, Meningioma, No Tumor, and Pituitary with 93% accuracy.",
    chips: ["Python", "CNN", "MobileNetV2", "TensorFlow"],
    url: "https://github.com/Karthikrajachinnadurai/Brain_Tumor_Detection",
  },
  {
    id: "gh-power-forecasting",
    name: "Power Consumption Forecasting",
    coverMain: "Power Consumption Forecast",
    coverSub: "RNN Time-Series & TensorFlow",
    gradient: "from-[#005B7F] via-[#0E2C68] to-[#0A1238]",
    illustrationType: "supply-chain",
    category: "Data Science",
    description:
      "RNN-based Household Power Consumption Time Series Forecasting using TensorFlow and Keras.",
    chips: ["Python", "RNN", "Time Series", "TensorFlow"],
    url: "https://github.com/Karthikrajachinnadurai/RNN-Power-Consumption-Forecasting",
  },
  {
    id: "gh-mnist-cnn",
    name: "Handwritten Digit Recognition",
    coverMain: "Digit Recognition (MNIST)",
    coverSub: "CNN & TensorFlow Deep Learning",
    gradient: "from-[#00475E] via-[#1A255A] to-[#160E36]",
    illustrationType: "board-game",
    category: "Machine Learning",
    description:
      "CNN-based Handwritten Digit Recognition using TensorFlow and Keras on MNIST Dataset.",
    chips: ["Python", "CNN", "TensorFlow", "Keras"],
    url: "https://github.com/Karthikrajachinnadurai/MNIST-CNN-Digit-Recognition",
  },
  {
    id: "gh-cancer-project",
    name: "Cancer Survival & Recurrence Dashboard",
    coverMain: "Cancer Dashboard",
    coverSub: "Survival & Recurrence Modeling",
    gradient: "from-[#005B7F] via-[#2A1D5D] to-[#2E1065]",
    illustrationType: "drug-response",
    category: "Healthcare AI",
    description:
      "A machine learning-powered web dashboard for predicting cancer patient survival and recurrence.",
    chips: ["Python", "Machine Learning", "Healthcare AI", "Scikit-Learn"],
    url: "https://github.com/Karthikrajachinnadurai/CancerProject",
  },
  {
    id: "gh-atm-c",
    name: "ATM Transaction System",
    coverMain: "ATM Transaction System",
    coverSub: "Console Banking & PIN Auth",
    gradient: "from-[#005274] via-[#0C2D54] to-[#0A1535]",
    illustrationType: "atm-system",
    category: "Academic Systems",
    description:
      "Terminal-based banking transaction engine supporting user PIN verification, balance ledger tracking, and secure deposit/withdrawal routines.",
    chips: ["C", "System I/O", "Data Structures"],
    url: "https://github.com/Karthikrajachinnadurai/ATM_PROJECT_C",
  },
];

// Determine category for dynamic GitHub repos
function categorizeRepo(repo) {
  const text = `${repo.name || ""} ${repo.description || ""}`.toLowerCase();
  if (text.includes("atm") || text.includes("transaction") || text.includes("banking") || text.includes("form")) {
    return "Academic Systems";
  }
  if (text.includes("brain") || text.includes("tumor") || text.includes("cancer") || text.includes("x-ray") || text.includes("covid") || text.includes("health") || text.includes("emotion")) {
    return "Healthcare AI";
  }
  if (text.includes("forecast") || text.includes("power") || text.includes("series") || text.includes("consumption") || text.includes("data")) {
    return "Data Science";
  }
  if (text.includes("rag") || text.includes("retrieval") || text.includes("research") || text.includes("assistant")) {
    return "AI Engineer";
  }
  return "Machine Learning";
}

// Generate refined cyan-to-violet and cyan-to-deep-blue gradient and illustration for dynamic GitHub repos
function getRepoCoverVisual(repo) {
  const text = (repo.name || "").toLowerCase();
  if (text.includes("atm")) {
    return {
      gradient: "from-[#005274] via-[#0C2D54] to-[#0A1535]",
      illustrationType: "atm-system",
      main: "ATM Transaction System",
      sub: "Console Banking & PIN Auth",
    };
  }
  if (text.includes("emotion")) {
    return {
      gradient: "from-[#005B7F] via-[#2A1D5D] to-[#1E1B4B]",
      illustrationType: "healthcare-ai",
      main: "Emotion Classification",
      sub: "Speech-to-Text & NLP Detection",
    };
  }
  if (text.includes("tumor")) {
    return {
      gradient: "from-[#003E54] via-[#10245E] to-[#1E1B4B]",
      illustrationType: "healthcare-ai",
      main: "Brain Tumor Detection",
      sub: "CNN & MobileNetV2 MRI Classifier",
    };
  }
  if (text.includes("power") || text.includes("forecast")) {
    return {
      gradient: "from-[#005B7F] via-[#0E2C68] to-[#0A1238]",
      illustrationType: "supply-chain",
      main: "Power Consumption Forecast",
      sub: "RNN Time-Series & TensorFlow",
    };
  }
  if (text.includes("cancer")) {
    return {
      gradient: "from-[#005B7F] via-[#2A1D5D] to-[#2E1065]",
      illustrationType: "drug-response",
      main: "Cancer Dashboard",
      sub: "Survival & Recurrence Modeling",
    };
  }
  if (text.includes("x-ray")) {
    return {
      gradient: "from-[#00475E] via-[#0D2152] to-[#091129]",
      illustrationType: "healthcare-ai",
      main: "Chest X-Ray Classifier",
      sub: "Deep Convolutional Neural Network",
    };
  }
  if (text.includes("mnist") || text.includes("digit")) {
    return {
      gradient: "from-[#00475E] via-[#1A255A] to-[#160E36]",
      illustrationType: "board-game",
      main: "Digit Recognition (MNIST)",
      sub: "CNN & TensorFlow Deep Learning",
    };
  }
  if (text.includes("flower")) {
    return {
      gradient: "from-[#00475E] via-[#0E2C68] to-[#0A1238]",
      illustrationType: "board-game",
      main: "Flower Classifier (CNN)",
      sub: "Deep Learning & Image Recognition",
    };
  }
  if (text.includes("ann") || text.includes("titanic")) {
    return {
      gradient: "from-[#086788] via-[#12356B] to-[#091636]",
      illustrationType: "board-game",
      main: "Titanic Survival Prediction",
      sub: "Artificial Neural Network",
    };
  }
  if (text.includes("opencv") || text.includes("cv")) {
    return {
      gradient: "from-[#005274] via-[#0C2D54] to-[#0A1535]",
      illustrationType: "supply-chain",
      main: "OpenCV Computer Vision",
      sub: "Image Processing Pipeline",
    };
  }
  return {
    gradient: "from-[#004D68] via-[#24174D] to-[#1E1B4B]",
    illustrationType: "board-game",
    main: repo.name.replace(/[-_]/g, " "),
    sub: repo.language || "Machine Learning Pipeline",
  };
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [projectsList, setProjectsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadAllProjects = async () => {
    setLoading(true);
    setError(null);

    try {
      const headers = {
        Accept: "application/vnd.github+json",
      };

      if (GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
      }

      // Paginate GitHub repos sorted by pushed date
      let page = 1;
      let allGitHubRepos = [];

      while (true) {
        const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&page=${page}&sort=pushed&direction=desc`;
        const res = await fetch(url, { headers });

        if (!res.ok) {
          throw new Error(
            res.status === 403
              ? "GitHub rate limit reached. Using cached repositories."
              : `GitHub API error: ${res.status}`
          );
        }

        const data = await res.json();
        if (!Array.isArray(data) || data.length === 0) break;
        allGitHubRepos = allGitHubRepos.concat(data);
        if (data.length < 100) break;
        page++;
      }

      // Exclude forks, private repos, portfolio repos, and profile README repos
      const validRepos = allGitHubRepos.filter((r) => {
        if (r.fork || r.private) return false;
        const name = (r.name || "").toLowerCase().trim();
        if (name === "portfolio" || name.includes("portfolio") || name === GITHUB_USERNAME.toLowerCase()) {
          return false;
        }
        return true;
      });

      // Explicitly sort validRepos strictly by most recent pushed_at timestamp descending
      validRepos.sort(
        (a, b) => new Date(b.pushed_at || 0).getTime() - new Date(a.pushed_at || 0).getTime()
      );

      // Build items array
      const items = [];

      // Check if a dedicated RAG repository exists on GitHub
      const githubRagRepo = validRepos.find((r) =>
        `${r.name || ""} ${r.description || ""}`.toLowerCase().includes("rag")
      );

      // 1. Keep RAG in FIRST position
      if (githubRagRepo) {
        items.push({
          id: `gh-${githubRagRepo.id}`,
          name: githubRagRepo.name.replace(/[-_]/g, " "),
          coverMain: "News Research Tool",
          coverSub: "LangChain RAG & FAISS Vector Engine",
          gradient: "from-[#005274] via-[#1E1B4B] to-[#2E1065]",
          illustrationType: "rag-news",
          category: "AI Engineer",
          description:
            githubRagRepo.description ||
            "Retrieval-Augmented Generation (RAG) platform extracting factual insights from article URLs using semantic chunking, FAISS vector search, and local LLM reasoning.",
          chips: ["Python", "LangChain", "RAG", "FAISS", "Ollama Llama 3.2"],
          url: githubRagRepo.html_url,
          homepage: githubRagRepo.homepage || "",
          archived: Boolean(githubRagRepo.archived),
        });
      } else {
        items.push(RAG_PROJECT);
      }

      // 2. Add all other repositories in order of recent GitHub push
      for (const repo of validRepos) {
        // Skip if this was the RAG repo already placed first
        if (githubRagRepo && repo.id === githubRagRepo.id) continue;

        const repoNameLower = (repo.name || "").toLowerCase().trim();
        // Skip portfolio website repo or profile repo
        if (repoNameLower === "portfolio" || repoNameLower.includes("portfolio") || repoNameLower === GITHUB_USERNAME.toLowerCase()) {
          continue;
        }

        const isAtm = (repo.name || "").toLowerCase().includes("atm");
        const rawDesc = (repo.description || "").trim();

        // For ATM repo without description, provide default description
        let desc = rawDesc;
        if (!desc && isAtm) {
          desc =
            "Terminal-based banking transaction engine supporting user PIN verification, balance ledger tracking, and secure deposit/withdrawal routines.";
        }

        // Skip repos with no description
        if (!desc) continue;
        if (!repo.html_url) continue;

        const cover = getRepoCoverVisual(repo);
        const chips = [];
        if (isAtm) {
          chips.push("C", "System I/O", "Data Structures");
        } else {
          if (repo.language && repo.language !== "Jupyter Notebook") {
            chips.push(repo.language);
          } else {
            chips.push("Python");
          }
          if (repo.topics && Array.isArray(repo.topics)) {
            chips.push(...repo.topics.slice(0, 3));
          }
        }

        items.push({
          id: `gh-${repo.id}`,
          name: isAtm ? "ATM Transaction System" : repo.name.replace(/[-_]/g, " "),
          coverMain: cover.main,
          coverSub: cover.sub,
          gradient: cover.gradient,
          illustrationType: cover.illustrationType,
          category: categorizeRepo(repo),
          description: desc,
          chips: chips.length > 0 ? chips : ["Python", "Machine Learning"],
          url: repo.html_url,
          homepage: repo.homepage || "",
          archived: Boolean(repo.archived),
        });
      }

      // Strict filter: only items with real, non-empty public URLs
      const verifiedItems = items.filter((p) => Boolean(p.url && p.url.trim()));
      setProjectsList(verifiedItems.length > 0 ? verifiedItems : FALLBACK_PUBLIC_REPOS);
    } catch (err) {
      console.warn("Using fallback public repositories:", err);
      setProjectsList(FALLBACK_PUBLIC_REPOS);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllProjects();
  }, []);

  // Filter based on selected pill
  const filteredProjects =
    activeCategory === "All"
      ? projectsList
      : projectsList.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-white dark:bg-[#07070D]">
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-300/15 dark:bg-[#00F0FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-violet-300/15 dark:bg-[#A78BFA]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 dark:text-[#F5F5F7] mb-2">
            Featured <span className="text-cyan-600 dark:text-[#00F0FF]">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-[#A1A1AA]">
            Selected machine-learning systems, intelligent NLP pipelines, and engineering tools.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-violet-500 dark:from-[#00F0FF] dark:to-[#A78BFA] text-white dark:text-[#07070D] shadow-sm dark:shadow-[0_0_15px_rgba(0,240,255,0.35)] scale-105"
                  : "bg-white dark:bg-[#12121C] text-slate-700 dark:text-[#A1A1AA] border border-slate-200 dark:border-[#1E1E2E] hover:border-cyan-500/40 dark:hover:border-[#00F0FF]/40 hover:text-slate-900 dark:hover:text-[#F5F5F7]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white/80 dark:bg-[#12121C]/85 rounded-2xl border border-slate-200 dark:border-[#1E1E2E] overflow-hidden shadow-sm animate-pulse h-[440px]"
              >
                <div className="h-[190px] bg-slate-200 dark:bg-[#161626]" />
                <div className="p-6 space-y-3">
                  <div className="h-5 bg-slate-200 dark:bg-[#161626] rounded w-2/3" />
                  <div className="h-4 bg-slate-200 dark:bg-[#161626] rounded w-full" />
                  <div className="h-4 bg-slate-200 dark:bg-[#161626] rounded w-4/5" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="max-w-md mx-auto text-center p-8 bg-white dark:bg-[#12121C] rounded-2xl border border-red-500/30">
            <AlertCircle className="w-8 h-8 text-red-500 dark:text-red-400 mx-auto mb-2" />
            <p className="text-sm text-red-700 dark:text-red-300 mb-4">{error}</p>
            <button
              onClick={loadAllProjects}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-red-600 text-white"
            >
              <RefreshCw size={14} /> Retry
            </button>
          </div>
        )}

        {/* Grid: 3 cards desktop, 2 tablet, 1 mobile. Equal height, gap 24px */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredProjects.map((project) => {
              const hasRealUrl = Boolean(project.url && project.url.trim());
              const isCompleted = hasRealUrl && !project.archived;
              const primaryLink = (project.homepage && project.homepage.trim()) || project.url;

              const CardWrapper = hasRealUrl ? "a" : "div";
              const wrapperProps = hasRealUrl
                ? {
                    href: primaryLink,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": `Open ${project.name}`,
                  }
                : {};

              return (
                <CardWrapper
                  key={project.id}
                  {...wrapperProps}
                  className={`group bg-white dark:bg-[#12121C]/90 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-[#1E1E2E] shadow-sm dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between overflow-hidden h-full ${
                    hasRealUrl
                      ? "hover:border-cyan-500/50 dark:hover:border-[#00F0FF]/50 hover:shadow-md dark:hover:shadow-[0_8px_30px_rgba(0,240,255,0.18)] hover:-translate-y-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:focus-visible:ring-[#00F0FF]"
                      : "cursor-default"
                  }`}
                >
                  {/* Top half: 190px Gradient Cover with Flat Illustration */}
                  <div
                    className={`h-[190px] relative overflow-hidden bg-gradient-to-br ${project.gradient} p-4 flex flex-col justify-between flex-shrink-0 border-b border-black/10 dark:border-[#1E1E2E]/60`}
                  >
                    {/* Status Pill Top-Right */}
                    <div className="self-end z-10">
                      {isCompleted ? (
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/90 dark:bg-[#22C55E]/15 text-white dark:text-[#22C55E] dark:border dark:border-[#22C55E]/30 shadow-sm flex items-center gap-1.5 backdrop-blur-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-[#22C55E]" />
                          Completed
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/90 dark:bg-[#F5C542]/15 text-white dark:text-[#F5C542] dark:border dark:border-[#F5C542]/30 shadow-sm flex items-center gap-1.5 backdrop-blur-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-[#F5C542] animate-pulse" />
                          Processing
                        </span>
                      )}
                    </div>

                    {/* Flat Vector Illustration */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <ProjectIllustration type={project.illustrationType} />
                    </div>

                    {/* Cover Title centered at bottom */}
                    <div className="relative z-10 text-center pb-1">
                      <h4 className="text-white font-bold text-base leading-tight drop-shadow-md">
                        {project.coverMain}
                      </h4>
                      <p className="text-white/80 dark:text-[#A1A1AA] text-xs font-normal mt-0.5">
                        {project.coverSub}
                      </p>
                    </div>
                  </div>

                  {/* Body: Left-aligned content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title & Category Header Row */}
                      <div className="flex items-start justify-between gap-3 mb-2.5">
                        <h3 className="font-bold text-slate-900 dark:text-[#F5F5F7] group-hover:text-cyan-600 dark:group-hover:text-[#00F0FF] transition-colors text-base sm:text-lg leading-snug">
                          {project.name}
                        </h3>
                        <span className="text-violet-600 dark:text-[#A78BFA] text-xs font-semibold flex items-center gap-1 flex-shrink-0 pt-0.5">
                          <Tag size={12} />
                          {project.category}
                        </span>
                      </div>

                      {/* 2-3 lines concrete description */}
                      <p className="text-sm text-slate-600 dark:text-[#A1A1AA] leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.chips.slice(0, 3).map((chip, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-[#161626] text-slate-700 dark:text-[#D4D4D8] border border-slate-200 dark:border-[#1E1E2E]"
                          >
                            {chip}
                          </span>
                        ))}
                        {project.chips.length > 3 && (
                          <span className="px-2 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-[#161626]/60 text-slate-500 dark:text-[#A1A1AA] border border-transparent">
                            +{project.chips.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Footer Row */}
                      <div className="pt-3.5 border-t border-slate-100 dark:border-[#1E1E2E]">
                        {hasRealUrl ? (
                          <div className="flex items-center justify-between text-xs font-semibold text-cyan-600 dark:text-[#00F0FF] group-hover:text-violet-600 dark:group-hover:text-[#A78BFA] group-hover:translate-x-0.5 transition-all">
                            <span className="flex items-center gap-1.5">
                              <Code2 size={14} />
                              <span>Click to explore</span>
                            </span>
                            <ExternalLink size={14} />
                          </div>
                        ) : (
                          <div className="text-xs text-amber-600 dark:text-[#F5C542] font-medium">
                            Repository not public yet
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
