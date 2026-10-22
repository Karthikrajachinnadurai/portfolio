import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import { CertImage } from "../components/ImageWithFallback";
import { education, certifications } from "../data/content";

// Timeline node
function EduItem({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`relative pl-12 pb-8 transition-all duration-500 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-sm z-10">
        {item.icon}
      </div>
      {/* Connector */}
      {index < education.length - 1 && (
        <div className="absolute left-4 top-8 bottom-0 w-px bg-gradient-to-b from-primary-500/40 to-transparent" aria-hidden="true" />
      )}

      {/* Card */}
      <div className="glass-card-hover p-4 ml-2">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display font-bold text-white text-sm">{item.degree}</h3>
          <span className="text-xs text-gray-400 whitespace-nowrap">{item.year}</span>
        </div>
        <p className="text-primary-300 text-xs font-medium mb-1">{item.institution}</p>
        <p className="text-gray-400 text-xs font-semibold">{item.grade}</p>
      </div>
    </div>
  );
}

// Lightbox component
function Lightbox({ src, alt, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate: ${alt}`}
    >
      <button
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={20} />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function CertCard({ cert, index, onExpand }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`glass-card-hover p-4 transition-all duration-500 cursor-pointer ${
        cert.image ? "hover:ring-2 hover:ring-primary-500/40" : ""
      } ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
      onClick={() => cert.image && onExpand(cert)}
      role={cert.image ? "button" : undefined}
      aria-label={cert.image ? `View certificate: ${cert.title}` : undefined}
      tabIndex={cert.image ? 0 : undefined}
      onKeyDown={(e) => e.key === "Enter" && cert.image && onExpand(cert)}
    >
      {/* Certificate thumbnail (optional) */}
      {cert.image && (
        <div className="aspect-video mb-3 rounded-lg overflow-hidden">
          <CertImage src={cert.image} alt={cert.title} className="w-full h-full" />
        </div>
      )}

      <div className="flex items-start gap-3">
        <div className="text-xl flex-shrink-0">🏅</div>
        <div>
          <h3 className="font-semibold text-white text-sm leading-snug mb-1">{cert.title}</h3>
          <p className="text-primary-300 text-xs">{cert.issuer}</p>
          {cert.date && <p className="text-gray-500 text-xs mt-0.5">{cert.date}</p>}
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <AnimatedSection id="education" className="py-24 relative overflow-hidden">
      <div className="orb w-64 h-64 bg-primary-500 bottom-0 left-0 opacity-10" aria-hidden="true" />

      <div className="section-container relative z-10">
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-500/15 border border-primary-500/30 text-primary-300 uppercase tracking-widest mb-4">
            Education & Certifications
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Academic Journey</span>
          </h2>
          <p className="section-subtitle">
            Formal education backed by continuous self-learning through certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-8 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-transparent rounded" aria-hidden="true" />
              Education
            </h3>
            <div className="relative">
              {education.map((item, i) => (
                <EduItem key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-display font-bold text-lg text-white mb-8 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-accent-500 to-transparent rounded" aria-hidden="true" />
              Certifications
            </h3>
            <div className="grid gap-3">
              {certifications.map((cert, i) => (
                <CertCard
                  key={cert.id}
                  cert={cert}
                  index={i}
                  onExpand={setLightbox}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && lightbox.image && (
        <Lightbox
          src={lightbox.image}
          alt={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </AnimatedSection>
  );
}
