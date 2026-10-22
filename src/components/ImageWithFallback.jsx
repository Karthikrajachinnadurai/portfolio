import { useState } from "react";

// Graceful image with fallback to initials avatar
export default function ProfileImage({
  src,
  alt,
  initials = "KR",
  className = "",
  size = 280,
}) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-primary-600 to-accent-600 text-white font-display font-bold select-none ${className}`}
        style={{ fontSize: size * 0.28 }}
        role="img"
        aria-label={alt}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      className={`object-cover ${className}`}
      onError={() => setError(true)}
    />
  );
}

// Project screenshot with fallback
export function ProjectImage({ src, alt, className = "" }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-surface-card to-surface-dark-2 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">🖥️</div>
          <p className="text-xs">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`object-cover w-full h-full ${className}`}
      onError={() => setError(true)}
    />
  );
}

// Certificate image with fallback
export function CertImage({ src, alt, className = "" }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-primary-900/50 to-accent-600/10 border border-primary-500/20 rounded-lg ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="text-center p-4">
          <div className="text-3xl mb-1">🏅</div>
          <p className="text-xs text-gray-400 text-center">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`object-cover ${className}`}
      onError={() => setError(true)}
    />
  );
}
