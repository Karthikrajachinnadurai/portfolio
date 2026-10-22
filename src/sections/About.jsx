import { GraduationCap, MapPin, Award, Globe, Code, Sparkles, BookOpen } from "lucide-react";
import { personal, contact, quickStats, educationData } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-slate-100/70 dark:bg-[#0A0A12]">
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-300/15 dark:bg-[#00F0FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-300/15 dark:bg-[#A78BFA]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-100/70 dark:bg-[#00F0FF]/10 text-cyan-700 dark:text-[#00F0FF] border border-cyan-300/40 dark:border-[#00F0FF]/25 uppercase tracking-widest mb-3">
            <Sparkles size={13} />
            <span>Discover</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display text-slate-900 dark:text-[#F5F5F7] mb-4">
            About <span className="text-cyan-600 dark:text-[#00F0FF]">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-[#A1A1AA] max-w-3xl mx-auto">
            Get to know more about my journey, education, and passion for artificial intelligence.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
          {quickStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/90 dark:bg-[#12121C]/85 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 dark:border-[#1E1E2E] shadow-sm hover:border-cyan-500/40 dark:hover:border-[#00F0FF]/40 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-black font-display bg-gradient-to-r from-cyan-600 via-violet-600 to-amber-500 dark:from-[#00F0FF] dark:via-[#A78BFA] dark:to-[#F5C542] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-[#A1A1AA] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid: Story + Highlights */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Bio & Leadership Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white/90 dark:bg-[#12121C]/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-[#1E1E2E] shadow-sm">
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-[#F5F5F7] mb-4 flex items-center gap-2">
                <Code className="text-cyan-600 dark:text-[#00F0FF]" size={24} />
                <span>Building AI that Makes a Difference</span>
              </h3>
              
              <div className="space-y-4 text-slate-600 dark:text-[#A1A1AA] leading-relaxed text-base">
                <p>
                  I'm a final-year <strong className="text-slate-900 dark:text-[#F5F5F7] font-semibold">Computer Science and Engineering</strong> student at{" "}
                  <strong className="text-cyan-600 dark:text-[#00F0FF] font-semibold">{personal.college}</strong>,
                  maintaining a CGPA of <strong className="text-cyan-600 dark:text-[#00F0FF] font-semibold">{personal.cgpa}</strong> through the 6th semester.
                </p>
                <p>
                  My goal is to begin my career as an <strong className="text-slate-900 dark:text-[#F5F5F7] font-semibold">AI/ML Engineer</strong>,
                  leveraging a strong foundation in Python, Machine Learning, Deep Learning, and Natural Language Processing.
                  My flagship project—an <strong className="text-cyan-600 dark:text-[#00F0FF] font-semibold">AI Mental Health Assistant</strong> using fine-tuned DistilBERT and Whisper—embodies my commitment to applying AI in human-centered, meaningful ways.
                </p>
                <p>
                  Beyond technical pursuits, I serve as <strong className="text-violet-600 dark:text-[#A78BFA] font-semibold">Student Council President (2026–2027)</strong>.
                  In this role, I represent the student community, coordinate college-wide technical symposia, and collaborate closely with college administration.
                </p>
              </div>

              {/* Badges / Highlights */}
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-[#1E1E2E] flex flex-wrap gap-2.5">
                <span className="px-3 py-1.5 rounded-xl text-xs font-medium bg-cyan-50 dark:bg-[#00F0FF]/10 text-cyan-700 dark:text-[#00F0FF] border border-cyan-200 dark:border-[#00F0FF]/25 shadow-sm">
                  🎯 Specialization: AI / Deep Learning / NLP
                </span>
                <span className="px-3 py-1.5 rounded-xl text-xs font-medium bg-violet-50 dark:bg-[#A78BFA]/10 text-violet-700 dark:text-[#A78BFA] border border-violet-200 dark:border-[#A78BFA]/25 shadow-sm">
                  👑 Leadership: Student Council President
                </span>
                <span className="px-3 py-1.5 rounded-xl text-xs font-medium bg-amber-50 dark:bg-[#F5C542]/10 text-amber-700 dark:text-[#F5C542] border border-amber-200 dark:border-[#F5C542]/30 shadow-sm">
                  ⚡ Graduation: Expected 2027
                </span>
              </div>
            </div>

            {/* Academic Journey Timeline Cards */}
            <div className="bg-white/90 dark:bg-[#12121C]/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-[#1E1E2E] shadow-sm">
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-[#F5F5F7] mb-5 flex items-center gap-2">
                <BookOpen className="text-violet-600 dark:text-[#A78BFA]" size={22} />
                <span>Education & Academic Background</span>
              </h3>

              <div className="space-y-4">
                {educationData.map((edu) => (
                  <div
                    key={edu.id}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-[#07070D]/70 border border-slate-200/80 dark:border-[#1E1E2E] flex items-start gap-4 transition-colors hover:border-cyan-500/30 dark:hover:border-[#00F0FF]/30"
                  >
                    <div className="text-2xl p-2 rounded-lg bg-white dark:bg-[#12121C] border border-slate-200 dark:border-[#1E1E2E] shadow-sm">{edu.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <h4 className="font-semibold text-slate-900 dark:text-[#F5F5F7] text-base">{edu.degree}</h4>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-[#00F0FF]/10 text-cyan-800 dark:text-[#00F0FF] border border-cyan-200 dark:border-[#00F0FF]/20">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-[#A1A1AA] mt-0.5">{edu.institution}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs">
                        <span className="font-bold text-cyan-600 dark:text-[#00F0FF]">{edu.grade}</span>
                        {edu.highlight && (
                          <span className="text-slate-500 dark:text-[#A1A1AA]">• {edu.highlight}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Personal Details & Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white/90 dark:bg-[#12121C]/85 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 dark:border-[#1E1E2E] shadow-sm">
              <h4 className="font-bold text-lg text-slate-900 dark:text-[#F5F5F7] mb-4">Quick Facts</h4>
              
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-[#1E1E2E]">
                  <span className="text-slate-500 dark:text-[#A1A1AA] flex items-center gap-2">
                    <GraduationCap size={16} className="text-cyan-600 dark:text-[#00F0FF]" /> Institution
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-[#F5F5F7] text-right">Nehru Inst. of Tech.</span>
                </li>
                <li className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-[#1E1E2E]">
                  <span className="text-slate-500 dark:text-[#A1A1AA] flex items-center gap-2">
                    <Award size={16} className="text-amber-600 dark:text-[#F5C542]" /> Current Role
                  </span>
                  <span className="font-semibold text-amber-700 dark:text-[#F5C542] text-right">Student Council President</span>
                </li>
                <li className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-[#1E1E2E]">
                  <span className="text-slate-500 dark:text-[#A1A1AA] flex items-center gap-2">
                    <MapPin size={16} className="text-violet-600 dark:text-[#A78BFA]" /> Location
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-[#F5F5F7] text-right">{personal.location}</span>
                </li>
                <li className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-[#1E1E2E]">
                  <span className="text-slate-500 dark:text-[#A1A1AA] flex items-center gap-2">
                    <Globe size={16} className="text-emerald-600 dark:text-[#22C55E]" /> Languages
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-[#F5F5F7] text-right">{personal.languages.join(", ")}</span>
                </li>
                <li className="flex items-center justify-between py-1.5">
                  <span className="text-slate-500 dark:text-[#A1A1AA] flex items-center gap-2">
                    <Sparkles size={16} className="text-cyan-600 dark:text-[#00F0FF]" /> Availability
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-[#22C55E]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-[#22C55E] animate-pulse" />
                    Open to Opportunities
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
