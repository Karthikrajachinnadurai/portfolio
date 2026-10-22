import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/SocialIcons";
import { personal, contact } from "../data/content";

// Formspree Form ID from environment or configuration
const FORMSPREE_ID =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_FORMSPREE_ID) ||
  "";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // If Formspree ID is not configured yet, fallback to mailto so messages are never lost
    if (!FORMSPREE_ID || FORMSPREE_ID.trim() === "" || FORMSPREE_ID === "YOUR_FORMSPREE_ID") {
      const subject = formData.subject || `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;
      setLoading(false);
      setStatus({
        type: "success",
        message: "Opening your email app to send directly to Karthik Raja...",
      });
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID.trim()}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed. Please try again or email directly.");
      }
    } catch (err) {
      console.error("Contact Form Error:", err);
      setStatus({
        type: "error",
        message: `Failed to deliver message via server. You can email me directly at ${contact.email}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-slate-100/70 dark:bg-[#0A0A12]">
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
            <span>Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display text-slate-900 dark:text-[#F5F5F7] mb-4">
            Get In <span className="text-cyan-600 dark:text-[#00F0FF]">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-[#A1A1AA] max-w-3xl mx-auto">
            Whether you have an opportunity, a project to collaborate on, or just want to say hello—I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/90 dark:bg-[#12121C]/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-[#1E1E2E] space-y-6 shadow-sm">
              <div>
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-[#F5F5F7] mb-2">
                  Contact Information
                </h3>
                <p className="text-sm text-slate-600 dark:text-[#A1A1AA]">
                  Feel free to reach out directly through any of these channels.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-[#07070D]/70 border border-slate-200/80 dark:border-[#1E1E2E] text-slate-800 dark:text-[#F5F5F7] hover:border-cyan-500/50 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-100/70 dark:bg-[#00F0FF]/10 text-cyan-700 dark:text-[#00F0FF] border border-cyan-200 dark:border-[#00F0FF]/20 group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 dark:text-[#A1A1AA] font-medium">Email Me</p>
                    <p className="text-xs sm:text-sm font-semibold truncate text-slate-900 dark:text-[#F5F5F7] group-hover:text-cyan-600 dark:group-hover:text-[#00F0FF] transition-colors">
                      {contact.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-[#07070D]/70 border border-slate-200/80 dark:border-[#1E1E2E] text-slate-800 dark:text-[#F5F5F7] hover:border-emerald-500/50 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-100/70 dark:bg-[#22C55E]/10 text-emerald-700 dark:text-[#22C55E] border border-emerald-200 dark:border-[#22C55E]/20 group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 dark:text-[#A1A1AA] font-medium">Call / WhatsApp</p>
                    <p className="text-xs sm:text-sm font-semibold truncate text-slate-900 dark:text-[#F5F5F7] group-hover:text-emerald-600 dark:group-hover:text-[#22C55E] transition-colors">
                      {contact.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-[#07070D]/70 border border-slate-200/80 dark:border-[#1E1E2E] text-slate-800 dark:text-[#F5F5F7]">
                  <div className="p-2.5 rounded-lg bg-violet-100/70 dark:bg-[#A78BFA]/10 text-violet-700 dark:text-[#A78BFA] border border-violet-200 dark:border-[#A78BFA]/20">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-[#A1A1AA] font-medium">Location</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-[#F5F5F7]">{contact.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-[#A1A1AA] mb-3">
                  Connect on Social Media
                </h4>
                <div className="flex gap-2.5">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-[#161626] border border-slate-200 dark:border-[#1E1E2E] text-xs font-semibold text-slate-700 dark:text-[#F5F5F7] hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:border-[#00F0FF]/40 dark:hover:text-[#00F0FF] transition-all shadow-sm"
                  >
                    <GithubIcon size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-[#161626] border border-slate-200 dark:border-[#1E1E2E] text-xs font-semibold text-slate-700 dark:text-[#F5F5F7] hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:border-[#00F0FF]/40 dark:hover:text-[#00F0FF] transition-all shadow-sm"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Working Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white/90 dark:bg-[#12121C]/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-[#1E1E2E] shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-[#A1A1AA] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#1E1E2E] bg-slate-50 dark:bg-[#07070D]/80 text-slate-900 dark:text-[#F5F5F7] placeholder-slate-400 dark:placeholder-[#71717A] focus:outline-none focus:border-cyan-500 dark:focus:border-[#00F0FF] focus:ring-1 focus:ring-cyan-500 dark:focus:ring-[#00F0FF] text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-[#A1A1AA] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#1E1E2E] bg-slate-50 dark:bg-[#07070D]/80 text-slate-900 dark:text-[#F5F5F7] placeholder-slate-400 dark:placeholder-[#71717A] focus:outline-none focus:border-cyan-500 dark:focus:border-[#00F0FF] focus:ring-1 focus:ring-cyan-500 dark:focus:ring-[#00F0FF] text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-[#A1A1AA] mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. AI Engineering Collaboration / Opportunity"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#1E1E2E] bg-slate-50 dark:bg-[#07070D]/80 text-slate-900 dark:text-[#F5F5F7] placeholder-slate-400 dark:placeholder-[#71717A] focus:outline-none focus:border-cyan-500 dark:focus:border-[#00F0FF] focus:ring-1 focus:ring-cyan-500 dark:focus:ring-[#00F0FF] text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-[#A1A1AA] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project, idea, or role..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-[#1E1E2E] bg-slate-50 dark:bg-[#07070D]/80 text-slate-900 dark:text-[#F5F5F7] placeholder-slate-400 dark:placeholder-[#71717A] focus:outline-none focus:border-cyan-500 dark:focus:border-[#00F0FF] focus:ring-1 focus:ring-cyan-500 dark:focus:ring-[#00F0FF] text-sm transition-all resize-none"
                  />
                </div>

                {status.message && (
                  <div
                    className={`flex items-center gap-2.5 p-3.5 rounded-xl text-xs sm:text-sm font-medium ${
                      status.type === "success"
                        ? "bg-emerald-50 dark:bg-[#22C55E]/15 text-emerald-700 dark:text-[#22C55E] border border-emerald-200 dark:border-[#22C55E]/30"
                        : "bg-red-50 dark:bg-red-500/15 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-500/30"
                    }`}
                  >
                    {status.type === "success" ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-violet-500 dark:from-[#00F0FF] dark:to-[#A78BFA] text-white dark:text-[#07070D] shadow-md dark:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:scale-[1.01] active:scale-98 transition-all disabled:opacity-50"
                >
                  <Send size={16} />
                  <span>{loading ? "Sending Message..." : "Send Message"}</span>
                </button>

                <p className="text-[11px] text-slate-500 dark:text-[#A1A1AA] text-center pt-1">
                  * Required fields. Your information will be kept confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
