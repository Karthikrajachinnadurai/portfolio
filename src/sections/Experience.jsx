import { useState } from "react";
import { Calendar, MapPin, Award, CheckCircle2, ChevronRight, X, Sparkles } from "lucide-react";
import { experienceData } from "../data/content";

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-slate-100/70 dark:bg-[#0A0A12]">
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-300/15 dark:bg-[#00F0FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-300/15 dark:bg-[#A78BFA]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-100/70 dark:bg-[#00F0FF]/10 text-cyan-700 dark:text-[#00F0FF] border border-cyan-300/40 dark:border-[#00F0FF]/25 uppercase tracking-widest mb-3">
            <Sparkles size={13} />
            <span>Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display text-slate-900 dark:text-[#F5F5F7] mb-4">
            Leadership & <span className="text-cyan-600 dark:text-[#00F0FF]">Experience</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-[#A1A1AA] max-w-3xl mx-auto">
            Hands-on campus leadership and student governance at Nehru Institute of Technology.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className={`grid ${experienceData.length === 1 ? 'max-w-2xl' : 'md:grid-cols-2 max-w-5xl'} gap-6 lg:gap-8 mx-auto`}>
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              onClick={() => setSelectedExp(exp)}
              className="group bg-white/90 dark:bg-[#12121C]/85 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-[#1E1E2E] p-6 sm:p-8 shadow-sm hover:border-cyan-500/50 dark:hover:border-[#00F0FF]/50 hover:shadow-md dark:hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 dark:bg-[#00F0FF]/10 text-cyan-700 dark:text-[#00F0FF] border border-cyan-200 dark:border-[#00F0FF]/25 shadow-sm">
                    {exp.badge}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-[#A1A1AA] font-medium">
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-[#F5F5F7] mb-1 group-hover:text-cyan-600 dark:group-hover:text-[#00F0FF] transition-colors">
                  {exp.role}
                </h3>
                <h4 className="text-sm font-semibold text-violet-600 dark:text-[#A78BFA] mb-2">
                  {exp.organization}
                </h4>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-[#A1A1AA] mb-4">
                  <MapPin size={13} className="text-cyan-600 dark:text-[#00F0FF]" />
                  <span>{exp.location}</span>
                </div>

                <p className="text-sm text-slate-600 dark:text-[#A1A1AA] line-clamp-3 leading-relaxed mb-5">
                  {exp.overview}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {exp.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-[#161626] text-slate-700 dark:text-[#D4D4D8] border border-slate-200 dark:border-[#1E1E2E]"
                    >
                      {tech}
                    </span>
                  ))}
                  {exp.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-[#161626] text-slate-500 dark:text-[#A1A1AA] border border-slate-200 dark:border-[#1E1E2E]">
                      +{exp.technologies.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-[#1E1E2E] text-xs font-semibold text-cyan-600 dark:text-[#00F0FF] group-hover:translate-x-1 transition-transform">
                  <span>Click card for full details</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Modal Dialog */}
      {selectedExp && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 dark:bg-black/75 backdrop-blur-md animate-fade-in-up">
          <div className="bg-white dark:bg-[#12121C] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-[#1E1E2E] relative">
            <button
              onClick={() => setSelectedExp(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-[#161626] text-slate-600 dark:text-[#A1A1AA] hover:text-cyan-600 dark:hover:text-[#00F0FF] hover:border-cyan-500/40 dark:hover:border-[#00F0FF]/40 border border-slate-200 dark:border-[#1E1E2E] transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 dark:bg-[#00F0FF]/10 text-cyan-700 dark:text-[#00F0FF] border border-cyan-200 dark:border-[#00F0FF]/25 shadow-sm">
                {selectedExp.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900 dark:text-[#F5F5F7] mt-2">
                {selectedExp.role}
              </h3>
              <p className="text-base font-semibold text-violet-600 dark:text-[#A78BFA] mt-1">
                {selectedExp.organization}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-[#A1A1AA] mt-2">
                <span className="flex items-center gap-1">
                  <Calendar size={14} className="text-cyan-600 dark:text-[#00F0FF]" /> {selectedExp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} className="text-violet-600 dark:text-[#A78BFA]" /> {selectedExp.location}
                </span>
              </div>
            </div>

            <div className="space-y-6 text-sm text-slate-600 dark:text-[#A1A1AA]">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-[#F5F5F7] uppercase tracking-wider text-xs mb-2">
                  Role Overview
                </h4>
                <p className="leading-relaxed bg-slate-50 dark:bg-[#07070D]/70 p-4 rounded-xl border border-slate-200 dark:border-[#1E1E2E] text-slate-700 dark:text-[#D4D4D8]">
                  {selectedExp.overview}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-[#F5F5F7] uppercase tracking-wider text-xs mb-3">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2.5">
                  {selectedExp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-emerald-500 dark:text-[#00F0FF] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-slate-700 dark:text-[#D4D4D8]">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-[#F5F5F7] uppercase tracking-wider text-xs mb-3">
                  Key Achievements
                </h4>
                <ul className="space-y-2.5">
                  {selectedExp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Award size={16} className="text-amber-500 dark:text-[#F5C542] flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-slate-700 dark:text-[#D4D4D8]">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-[#F5F5F7] uppercase tracking-wider text-xs mb-3">
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-cyan-50 dark:bg-[#161626] text-cyan-800 dark:text-[#00F0FF] border border-cyan-200 dark:border-[#1E1E2E]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
