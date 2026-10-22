import { ThemeProvider, useTheme } from "./context/ThemeContext";
import ParticleCanvas from "./components/ParticleCanvas";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";

function Portfolio() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDark ? "dark bg-[#07070D] text-[#F5F5F7]" : "bg-slate-50 text-slate-900"
      } transition-colors duration-300 font-sans selection:bg-[#00F0FF]/30 selection:text-white`}
    >
      {/* Dynamic ambient particle background */}
      <ParticleCanvas isDark={isDark} />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
