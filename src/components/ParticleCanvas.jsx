import { useEffect, useRef } from "react";

export default function ParticleCanvas({ isDark }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.6;
        this.speedX = (Math.random() - 0.5) * 0.35;
        this.speedY = (Math.random() - 0.5) * 0.35;
        this.opacity = Math.random() * 0.45 + 0.15;
        if (isDark) {
          // Electric Cyan (0, 240, 255) or Soft Violet (167, 139, 250)
          this.color = Math.random() > 0.55 ? "0, 240, 255" : "167, 139, 250";
        } else {
          // Subtle sky blue / violet for light mode
          this.color = Math.random() > 0.55 ? "2, 132, 199" : "124, 58, 237";
        }
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
        ctx.fill();
      }
    }

    const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 16000));
    particles = Array.from({ length: count }, () => new Particle());

    const drawConnections = () => {
      const strokeColor = isDark ? "0, 240, 255" : "2, 132, 199";
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${strokeColor}, ${0.1 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawConnections();
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      id="particles-canvas"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
