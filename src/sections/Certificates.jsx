import { useState } from "react";
import { X, Sparkles, Building2, ShieldCheck } from "lucide-react";
import { certificatesData } from "../data/content";

export default function Certificates() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeModalCert, setActiveModalCert] = useState(null);

  const filterTabs = ["All", "Certification", "Contest", "Symposium", "Workshop"];

  const filteredCerts =
    selectedFilter === "All"
      ? certificatesData
      : certificatesData.filter((c) => c.category === selectedFilter);

  return (
    <section id="certificates" className="py-20 relative overflow-hidden bg-slate-50 dark:bg-[#07070D]">
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-cyan-300/15 dark:bg-[#00F0FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-violet-300/15 dark:bg-[#A78BFA]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-100/70 dark:bg-[#00F0FF]/10 text-cyan-700 dark:text-[#00F0FF] border border-cyan-300/40 dark:border-[#00F0FF]/25 uppercase tracking-widest mb-3">
            <Sparkles size={13} />
            <span>Credentials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display text-slate-900 dark:text-[#F5F5F7] mb-4">
            <span className="text-cyan-600 dark:text-[#00F0FF]">Certifications</span> & Achievements
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-[#A1A1AA] max-w-3xl mx-auto">
            Professional certifications, symposium paper presentations, and competitive programming contest victories.
          </p>
        </div>

        {/* Summary Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          <div className="bg-white/90 dark:bg-[#12121C]/85 backdrop-blur-md p-4 rounded-xl border border-slate-200/80 dark:border-[#1E1E2E] text-center shadow-sm">
            <div className="text-2xl font-black font-display text-cyan-600 dark:text-[#00F0FF]">8</div>
            <div className="text-xs text-slate-600 dark:text-[#A1A1AA] mt-0.5">Total Credentials</div>
          </div>
          <div className="bg-white/90 dark:bg-[#12121C]/85 backdrop-blur-md p-4 rounded-xl border border-slate-200/80 dark:border-[#1E1E2E] text-center shadow-sm">
            <div className="text-2xl font-black font-display text-amber-600 dark:text-[#F5C542]">2</div>
            <div className="text-xs text-slate-600 dark:text-[#A1A1AA] mt-0.5">Contest Awards (1st & 3rd)</div>
          </div>
          <div className="bg-white/90 dark:bg-[#12121C]/85 backdrop-blur-md p-4 rounded-xl border border-slate-200/80 dark:border-[#1E1E2E] text-center shadow-sm">
            <div className="text-2xl font-black font-display text-violet-600 dark:text-[#A78BFA]">4+</div>
            <div className="text-xs text-slate-600 dark:text-[#A1A1AA] mt-0.5">Global / National Providers</div>
          </div>
          <div className="bg-white/90 dark:bg-[#12121C]/85 backdrop-blur-md p-4 rounded-xl border border-slate-200/80 dark:border-[#1E1E2E] text-center shadow-sm">
            <div className="text-2xl font-black font-display text-emerald-600 dark:text-[#22C55E]">100%</div>
            <div className="text-xs text-slate-600 dark:text-[#A1A1AA] mt-0.5">Verified & Evaluated</div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedFilter === tab
                  ? "bg-gradient-to-r from-cyan-500 to-violet-500 dark:from-[#00F0FF] dark:to-[#A78BFA] text-white dark:text-[#07070D] shadow-sm dark:shadow-[0_0_15px_rgba(0,240,255,0.35)] scale-105"
                  : "bg-white dark:bg-[#12121C] text-slate-700 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-[#F5F5F7] hover:border-cyan-500/30 dark:hover:border-[#00F0FF]/30 border border-slate-200 dark:border-[#1E1E2E]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveModalCert(cert)}
              className="group bg-white/90 dark:bg-[#12121C]/85 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-[#1E1E2E] p-6 shadow-sm hover:border-cyan-500/50 dark:hover:border-[#00F0FF]/50 hover:shadow-md dark:hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-[#22C55E] bg-emerald-50 dark:bg-[#22C55E]/15 border border-emerald-200 dark:border-[#22C55E]/30 px-2.5 py-1 rounded-full">
                    <ShieldCheck size={14} />
                    Verified
                  </span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-md border ${
                      cert.type === "Award"
                        ? "bg-amber-50 dark:bg-[#F5C542]/15 text-amber-700 dark:text-[#F5C542] border-amber-200 dark:border-[#F5C542]/30"
                        : "bg-slate-100 dark:bg-[#161626] text-violet-700 dark:text-[#A78BFA] border-slate-200 dark:border-[#1E1E2E]"
                    }`}
                  >
                    {cert.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-[#F5F5F7] mb-2 group-hover:text-cyan-600 dark:group-hover:text-[#00F0FF] transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-slate-700 dark:text-[#D4D4D8] mb-1 flex items-center gap-1.5">
                  <Building2 size={13} className="text-cyan-600 dark:text-[#00F0FF]" />
                  <span>{cert.issuer}</span>
                </p>

                <p className="text-xs text-slate-500 dark:text-[#A1A1AA] mb-4">
                  {cert.institution}
                </p>

                <p className="text-xs text-slate-600 dark:text-[#A1A1AA] line-clamp-2 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-[#1E1E2E]">
                  {cert.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-[#161626] text-slate-700 dark:text-[#D4D4D8] border border-slate-200 dark:border-[#1E1E2E]"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-[#161626]/60 text-slate-500 dark:text-[#A1A1AA]">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-xs text-cyan-600 dark:text-[#00F0FF] font-semibold mt-3 pt-2">
                  <span className="group-hover:text-violet-600 dark:group-hover:text-[#A78BFA] transition-colors">Click to view details</span>
                  <span className="text-slate-500 dark:text-[#A1A1AA]">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      {activeModalCert && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 dark:bg-black/75 backdrop-blur-md animate-fade-in-up">
          <div className="bg-white dark:bg-[#12121C] rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 dark:border-[#1E1E2E] relative">
            <button
              onClick={() => setActiveModalCert(null)}
              aria-label="Close certificate modal"
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-[#161626] text-slate-600 dark:text-[#A1A1AA] hover:text-cyan-600 dark:hover:text-[#00F0FF] hover:border-cyan-500/40 dark:hover:border-[#00F0FF]/40 border border-slate-200 dark:border-[#1E1E2E] transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 dark:bg-[#00F0FF]/10 text-cyan-700 dark:text-[#00F0FF] border border-cyan-200 dark:border-[#00F0FF]/25 shadow-sm">
                {activeModalCert.category} • {activeModalCert.type}
              </span>
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-[#F5F5F7] mt-2">
                {activeModalCert.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-[#A1A1AA] mt-1">
                Issued by: <strong className="text-slate-900 dark:text-[#F5F5F7]">{activeModalCert.issuer}</strong>
              </p>
            </div>

            <div className="space-y-4 text-xs text-slate-600 dark:text-[#A1A1AA]">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#07070D]/70 border border-slate-200 dark:border-[#1E1E2E] leading-relaxed text-slate-700 dark:text-[#D4D4D8]">
                {activeModalCert.description}
              </div>

              {activeModalCert.credentialId && (
                <div className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-[#1E1E2E] bg-slate-50/60 dark:bg-[#07070D]/50">
                  <span className="text-slate-500 dark:text-[#A1A1AA]">Credential ID:</span>
                  <span className="font-mono font-semibold text-cyan-600 dark:text-[#00F0FF]">
                    {activeModalCert.credentialId}
                  </span>
                </div>
              )}

              <div>
                <h4 className="font-bold text-slate-900 dark:text-[#F5F5F7] uppercase tracking-wider text-[11px] mb-2">
                  Skills & Concepts Covered
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalCert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-cyan-50 dark:bg-[#161626] text-cyan-800 dark:text-[#00F0FF] border border-cyan-200 dark:border-[#1E1E2E]"
                    >
                      {skill}
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
