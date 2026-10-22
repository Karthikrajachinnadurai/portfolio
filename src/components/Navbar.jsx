import { useState, useEffect } from "react";
import { Sun, Moon, Download, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { personal, contact } from "../data/content";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Leadership" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 120;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    setMobileMenuOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = contact.resumeUrl;
    link.download = "Karthik_Raja_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#07070D]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-[#1E1E2E] shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.6)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl sm:text-2xl font-black font-display tracking-tight bg-gradient-to-r from-cyan-600 via-violet-600 to-cyan-600 dark:from-[#00F0FF] dark:via-[#A78BFA] dark:to-[#00F0FF] bg-clip-text text-transparent hover:opacity-90 transition-opacity"
          >
            {personal.name}
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                  activeSection === link.id
                    ? "text-cyan-700 dark:text-[#00F0FF] bg-cyan-50 dark:bg-[#00F0FF]/10 border border-cyan-200 dark:border-[#00F0FF]/25 shadow-sm dark:shadow-[0_0_12px_rgba(0,240,255,0.15)] font-semibold"
                    : "text-slate-600 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-[#F5F5F7] hover:bg-slate-100 dark:hover:bg-[#12121C] border border-transparent"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-2.5 sm:space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2 sm:p-2.5 rounded-xl text-slate-700 dark:text-[#F5F5F7] bg-white dark:bg-[#12121C] border border-slate-200 dark:border-[#1E1E2E] hover:border-cyan-500/40 dark:hover:border-[#00F0FF]/40 transition-all shadow-sm"
            >
              {isDark ? <Sun size={18} className="text-[#F5C542]" /> : <Moon size={18} className="text-cyan-600" />}
            </button>

            {/* Resume Button with Cyan-to-Violet gradient */}
            <a
              href={contact.resumeUrl || "/resume.pdf"}
              download="Karthik_Raja_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="nav-resume-btn"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 dark:from-[#00F0FF] dark:to-[#A78BFA] text-white dark:text-[#07070D] shadow-sm dark:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-md dark:hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Download size={15} />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="lg:hidden p-2 rounded-xl text-slate-800 dark:text-[#F5F5F7] bg-white dark:bg-[#12121C] border border-slate-200 dark:border-[#1E1E2E] hover:border-cyan-500/40 dark:hover:border-[#00F0FF]/40 transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#0A0A12]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-[#1E1E2E] px-4 pt-3 pb-5 space-y-1 shadow-2xl animate-fade-in-up">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? "bg-cyan-50 dark:bg-[#00F0FF]/10 border border-cyan-200 dark:border-[#00F0FF]/25 text-cyan-700 dark:text-[#00F0FF] font-semibold"
                  : "text-slate-700 dark:text-[#A1A1AA] hover:text-slate-900 dark:hover:text-[#F5F5F7] hover:bg-slate-100 dark:hover:bg-[#12121C]"
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <a
              href={contact.resumeUrl || "/resume.pdf"}
              download="Karthik_Raja_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-violet-500 dark:from-[#00F0FF] dark:to-[#A78BFA] text-white dark:text-[#07070D] shadow-sm dark:shadow-[0_0_20px_rgba(0,240,255,0.3)] cursor-pointer"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
