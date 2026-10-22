import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import { eventPhotos } from "../data/content";

// Sample placeholder tiles shown when no photos are present
const PLACEHOLDER_TILES = [
  { label: "TechGeeks 2025", emoji: "🥇", color: "from-yellow-600/20 to-orange-600/10 border-yellow-500/20" },
  { label: "AI Rail Safety", emoji: "🥉", color: "from-orange-600/20 to-red-600/10 border-orange-500/20" },
  { label: "Tech Magnetz 2024", emoji: "📄", color: "from-blue-600/20 to-primary-600/10 border-blue-500/20" },
  { label: "Student Council", emoji: "👑", color: "from-purple-600/20 to-accent-600/10 border-purple-500/20" },
];

function Lightbox({ photo, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo: ${photo.alt}`}
    >
      <button
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={20} />
      </button>
      <img
        src={photo.src}
        alt={photo.alt}
        className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <p className="absolute bottom-6 text-white/70 text-sm">{photo.alt}</p>
    </div>
  );
}

export default function Events() {
  const [lightbox, setLightbox] = useState(null);
  const photos = eventPhotos.length > 0 ? eventPhotos : null;

  return (
    <AnimatedSection id="events" className="py-24">
      <div className="section-container">
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-500/15 border border-primary-500/30 text-primary-300 uppercase tracking-widest mb-4">
            Events & Gallery
          </span>
          <h2 className="section-title">
            Moments & <span className="gradient-text">Memories</span>
          </h2>
          <p className="section-subtitle">
            Competitions, presentations, and council activities — drop your event photos in{" "}
            <code className="text-primary-400 text-xs bg-primary-500/10 px-1.5 py-0.5 rounded">/public/assets/events/</code>
          </p>
        </div>

        {photos ? (
          // Real photo gallery
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {photos.map((photo, i) => (
              <button
                key={i}
                className="relative group rounded-xl overflow-hidden aspect-square glass-card focus-visible:ring-2 focus-visible:ring-primary-400"
                onClick={() => setLightbox(photo)}
                aria-label={`View photo: ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                </div>
              </button>
            ))}
          </div>
        ) : (
          // Placeholder tiles
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PLACEHOLDER_TILES.map((tile) => (
              <div
                key={tile.label}
                className={`aspect-square rounded-2xl bg-gradient-to-br border flex flex-col items-center justify-center gap-3 ${tile.color}`}
              >
                <span className="text-4xl">{tile.emoji}</span>
                <span className="text-xs font-medium text-gray-300 text-center px-2">{tile.label}</span>
              </div>
            ))}
            <div className="col-span-2 sm:col-span-4 mt-4 text-center">
              <p className="text-sm text-gray-500">
                📸 Add your photos to{" "}
                <code className="text-primary-400">/public/assets/events/</code> and update{" "}
                <code className="text-primary-400">src/data/content.js</code>
              </p>
            </div>
          </div>
        )}
      </div>

      {lightbox && <Lightbox photo={lightbox} onClose={() => setLightbox(null)} />}
    </AnimatedSection>
  );
}
