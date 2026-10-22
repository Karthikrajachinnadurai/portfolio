import { Code2, Brain, Sparkles, Layers } from "lucide-react";

const SKILL_GROUPS = [
  {
    id: "languages",
    title: "Languages",
    icon: <Code2 size={18} className="text-cyan-600 dark:text-[#00F0FF]" />,
    iconBg: "bg-cyan-50 dark:bg-[#00F0FF]/10 border border-cyan-200 dark:border-[#00F0FF]/20",
    skills: ["Python", "C"],
    projectAnchor: "Core language behind automated pipelines, data preprocessing, and system tools.",
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    icon: <Brain size={18} className="text-violet-600 dark:text-[#A78BFA]" />,
    iconBg: "bg-violet-50 dark:bg-[#A78BFA]/10 border border-violet-200 dark:border-[#A78BFA]/20",
    skills: ["Classical ML", "Deep Learning", "Neural Networks", "TensorFlow"],
    projectAnchor: "Applied across supervised classification, diagnostic vision models, and time-series forecasting.",
  },
  {
    id: "applied-ai",
    title: "Applied AI",
    icon: <Sparkles size={18} className="text-cyan-600 dark:text-[#00F0FF]" />,
    iconBg: "bg-cyan-50 dark:bg-[#00F0FF]/10 border border-cyan-200 dark:border-[#00F0FF]/20",
    skills: ["DistilBERT & NLP", "LangChain & RAG", "OpenAI Whisper"],
    projectAnchor: "Shipped in an emotion-aware mental health assistant and local URL news research tools.",
  },
  {
    id: "engineering",
    title: "Engineering",
    icon: <Layers size={18} className="text-violet-600 dark:text-[#A78BFA]" />,
    iconBg: "bg-violet-50 dark:bg-[#A78BFA]/10 border border-violet-200 dark:border-[#A78BFA]/20",
    skills: ["Model Integration", "APIs (FastAPI, REST)", "Data Tooling (FAISS, MySQL, Docker)"],
    projectAnchor: "Production-style backends with vector search indices, JWT auth, and live endpoints.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-white dark:bg-[#07070D]">
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-300/15 dark:bg-[#00F0FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-violet-300/15 dark:bg-[#A78BFA]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 dark:text-[#F5F5F7] mb-3">
            Technical <span className="text-cyan-600 dark:text-[#00F0FF]">Expertise</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-[#A1A1AA] max-w-2xl mx-auto">
            Languages, models, and systems I use to ship machine-learning products.
          </p>
        </div>

        {/* 4 Groups Layout: 1 col on mobile, 2 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.id}
              className="bg-white/90 dark:bg-[#12121C]/85 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-[#1E1E2E] p-6 sm:p-7 shadow-sm hover:border-cyan-500/40 dark:hover:border-[#00F0FF]/40 hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Group Title */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div className={`p-2 rounded-xl ${group.iconBg}`}>
                    {group.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 dark:text-[#F5F5F7]">
                    {group.title}
                  </h3>
                </div>

                {/* Compact Skills Chips */}
                <div className="flex flex-wrap gap-2 pt-1 mb-4">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-100 dark:bg-[#161626] text-slate-800 dark:text-[#F5F5F7] border border-slate-200 dark:border-[#1E1E2E] hover:border-cyan-500/30 dark:hover:border-[#00F0FF]/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Real Project Anchor */}
              {group.projectAnchor && (
                <div className="pt-3.5 mt-auto border-t border-slate-100 dark:border-[#1E1E2E]">
                  <p className="text-xs text-slate-500 dark:text-[#A1A1AA] leading-relaxed">
                    <span className="font-semibold text-slate-800 dark:text-[#F5F5F7]">Applied in:</span>{" "}
                    {group.projectAnchor}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
