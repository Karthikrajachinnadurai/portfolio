import { ArrowUp, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personal, contact } from "../data/content";

const FOOTER_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-[#07070D] border-t border-slate-200/80 dark:border-[#1E1E2E] py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-200/80 dark:border-[#1E1E2E]">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 text-center md:text-left">
            <button
              onClick={() => scrollTo("home")}
              className="text-2xl font-black font-display tracking-tight bg-gradient-to-r from-cyan-600 via-violet-600 to-cyan-600 dark:from-[#00F0FF] dark:via-[#A78BFA] dark:to-[#00F0FF] bg-clip-text text-transparent hover:opacity-90 transition-opacity"
            >
              {personal.name}
            </button>
            <p className="text-sm font-medium text-slate-600 dark:text-[#A1A1AA] mt-1">
              AI/ML Engineer & Student Council President
            </p>
            <p className="text-xs text-slate-500 dark:text-[#71717A] mt-2 max-w-sm mx-auto md:mx-0">
              Passionate about building AI systems that genuinely understand and help people.
            </p>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-xs sm:text-sm font-medium text-slate-600 dark:text-[#A1A1AA] hover:text-cyan-600 dark:hover:text-[#00F0FF] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Icons (3 cols) */}
          <div className="md:col-span-3 flex items-center justify-center md:justify-end space-x-2.5">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-white dark:bg-[#12121C] text-slate-600 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-[#00F0FF] hover:border-cyan-500/40 dark:hover:border-[#00F0FF]/40 border border-slate-200 dark:border-[#1E1E2E] shadow-sm transition-all"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-white dark:bg-[#12121C] text-slate-600 dark:text-[#A1A1AA] hover:text-cyan-600 dark:hover:text-[#00F0FF] border border-slate-200 dark:border-[#1E1E2E] shadow-sm transition-all"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-white dark:bg-[#12121C] text-slate-600 dark:text-[#A1A1AA] hover:text-cyan-600 dark:hover:text-[#00F0FF] border border-slate-200 dark:border-[#1E1E2E] shadow-sm transition-all"
            >
              <Mail size={16} />
            </a>
            <a
              href={`tel:${contact.phone}`}
              aria-label="Call Karthik Raja"
              className="p-2.5 rounded-xl bg-white dark:bg-[#12121C] text-slate-600 dark:text-[#A1A1AA] hover:text-emerald-600 dark:hover:text-[#22C55E] hover:border-emerald-500/40 dark:hover:border-[#22C55E]/40 border border-slate-200 dark:border-[#1E1E2E] shadow-sm transition-all"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-[#A1A1AA]">
          <p>© {currentYear} {personal.name}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#12121C] hover:bg-slate-50 dark:hover:bg-[#161626] border border-slate-200 dark:border-[#1E1E2E] hover:border-cyan-500/40 dark:hover:border-[#00F0FF]/40 font-semibold text-slate-800 dark:text-[#F5F5F7] hover:text-cyan-600 dark:hover:text-[#00F0FF] transition-all shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp size={13} className="text-cyan-600 dark:text-[#00F0FF]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
