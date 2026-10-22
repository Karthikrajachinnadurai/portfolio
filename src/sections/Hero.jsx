import { useState, useEffect } from "react";
import { Download, ChevronDown, MapPin, GraduationCap, Award, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import { personal, contact } from "../data/content";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const word = "AI/ML Engineer";
    if (displayText.length < word.length) {
      const timer = setTimeout(() => {
        setDisplayText(word.substring(0, displayText.length + 1));
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [displayText]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = contact.resumeUrl;
    link.download = "Karthik_Raja_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-[#07070D] pt-20 pb-16"
    >
      {/* Background ambient gradient and geometric floating blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-gradient from-cyan-100/30 via-slate-50/80 to-slate-50 dark:from-[#12121C]/40 dark:via-[#07070D]/80 dark:to-[#07070D]" />
        
        {/* Floating animated aurora blobs */}
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-cyan-300/20 dark:bg-[#00F0FF]/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute top-1/3 right-1/6 w-72 h-72 bg-violet-300/20 dark:bg-[#A78BFA]/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-amber-200/15 dark:bg-[#F5C542]/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Avatar with glowing multi-gradient ring */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
            {/* Outer animated gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-cyan-400 dark:from-[#00F0FF] dark:via-[#A78BFA] dark:to-[#00F0FF] rounded-full animate-glow blur-sm" />
            {/* Inner background ring */}
            <div className="absolute inset-1.5 sm:inset-2 bg-slate-50 dark:bg-[#07070D] rounded-full" />
            {/* User photo */}
            <img
              src="/assets/profile/Profile.jpg"
              alt="C. Karthik Raja"
              className="absolute inset-2.5 sm:inset-3 w-[calc(100%-20px)] sm:w-[calc(100%-24px)] h-[calc(100%-20px)] sm:h-[calc(100%-24px)] rounded-full object-cover border-2 border-white dark:border-[#1E1E2E] shadow-xl"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>

        {/* Greeting and Name */}
        <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-[#A1A1AA]">
            Hi, I'm
          </h2>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight text-slate-900 dark:text-[#F5F5F7] leading-tight">
            <span className="bg-gradient-to-r from-cyan-600 via-violet-600 to-amber-500 dark:from-[#00F0FF] dark:via-[#A78BFA] dark:to-[#F5C542] bg-clip-text text-transparent animate-pulse-slow">
              {personal.name}
            </span>
          </h1>

          {/* Typewriter text */}
          <div className="h-9 sm:h-11 flex items-center justify-center">
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800 dark:text-[#F5F5F7]">
              {displayText}
              <span className="text-cyan-600 dark:text-[#00F0FF] animate-pulse font-normal">|</span>
            </span>
          </div>

          {/* Badges Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-1 pb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-white/80 dark:bg-[#12121C]/90 text-slate-800 dark:text-[#F5F5F7] border border-slate-200 dark:border-[#1E1E2E] shadow-sm">
              <MapPin size={14} className="text-cyan-600 dark:text-[#00F0FF]" />
              {personal.location}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-white/80 dark:bg-[#12121C]/90 text-slate-800 dark:text-[#F5F5F7] border border-slate-200 dark:border-[#1E1E2E] shadow-sm">
              <GraduationCap size={14} className="text-violet-600 dark:text-[#A78BFA]" />
              Nehru Inst. of Technology
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-white/80 dark:bg-[#12121C]/90 text-amber-700 dark:text-[#F5C542] border border-amber-300/40 dark:border-[#F5C542]/30 shadow-sm">
              <Award size={14} className="text-amber-600 dark:text-[#F5C542]" />
              Student Council President
            </span>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed pt-1">
            {personal.tagline}
          </p>
        </div>

        {/* 3 Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 pt-8 pb-8">
          <button
            onClick={() => scrollTo("projects")}
            id="hero-view-work-btn"
            className="px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-violet-500 dark:from-[#00F0FF] dark:to-[#A78BFA] text-white dark:text-[#07070D] shadow-md dark:shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            View My Work
          </button>

          <a
            href={contact.resumeUrl || "/resume.pdf"}
            download="Karthik_Raja_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-download-resume"
            className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-white dark:bg-[#12121C] text-slate-800 dark:text-[#F5F5F7] border border-slate-200 dark:border-[#1E1E2E] hover:border-cyan-500/50 dark:hover:border-[#00F0FF]/50 hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <Download size={18} className="text-cyan-600 dark:text-[#00F0FF]" />
            <span>Download Resume</span>
          </a>

          <button
            onClick={() => scrollTo("contact")}
            id="hero-contact-btn"
            className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-white dark:bg-[#12121C] text-cyan-700 dark:text-[#00F0FF] border border-cyan-500/30 dark:border-[#00F0FF]/30 hover:bg-cyan-50 dark:hover:bg-[#00F0FF]/10 hover:border-cyan-500/60 dark:hover:border-[#00F0FF]/60 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Icons row */}
        <div className="flex items-center justify-center space-x-3 sm:space-x-4">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-xl bg-white dark:bg-[#12121C] text-slate-600 dark:text-[#A1A1AA] hover:text-cyan-600 dark:hover:text-[#00F0FF] border border-slate-200 dark:border-[#1E1E2E] hover:border-cyan-500/40 dark:hover:border-[#00F0FF]/40 shadow-sm hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:scale-110 transition-all duration-200"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-xl bg-white dark:bg-[#12121C] text-slate-600 dark:text-[#A1A1AA] hover:text-cyan-600 dark:hover:text-[#00F0FF] border border-slate-200 dark:border-[#1E1E2E] hover:border-cyan-500/40 dark:hover:border-[#00F0FF]/40 shadow-sm hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:scale-110 transition-all duration-200"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Send Email"
            className="p-3 rounded-xl bg-white dark:bg-[#12121C] text-slate-600 dark:text-[#A1A1AA] hover:text-cyan-600 dark:hover:text-[#00F0FF] border border-slate-200 dark:border-[#1E1E2E] hover:border-cyan-500/40 dark:hover:border-[#00F0FF]/40 shadow-sm hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:scale-110 transition-all duration-200"
          >
            <Mail size={20} />
          </a>
          <a
            href={`tel:${contact.phone}`}
            aria-label="Call Karthik Raja"
            className="p-3 rounded-xl bg-white dark:bg-[#12121C] text-slate-600 dark:text-[#A1A1AA] hover:text-cyan-600 dark:hover:text-[#00F0FF] border border-slate-200 dark:border-[#1E1E2E] hover:border-cyan-500/40 dark:hover:border-[#00F0FF]/40 shadow-sm hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:scale-110 transition-all duration-200"
          >
            <Phone size={20} />
          </a>
        </div>

        {/* Scroll down indicator */}
        <div className="pt-10">
          <button
            onClick={() => scrollTo("about")}
            aria-label="Scroll to About section"
            className="inline-flex flex-col items-center text-xs text-slate-500 dark:text-[#A1A1AA] hover:text-cyan-600 dark:hover:text-[#00F0FF] transition-colors gap-1"
          >
            <span>Explore</span>
            <ChevronDown size={18} className="animate-bounce text-cyan-600 dark:text-[#00F0FF]" />
          </button>
        </div>
      </div>
    </section>
  );
}
