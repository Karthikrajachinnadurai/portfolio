import { useInView } from "react-intersection-observer";

export default function AnimatedSection({ children, className = "", delay = 0, id }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        // Respect reduced-motion: keep visible if user prefers reduced motion
      }}
    >
      {children}
    </section>
  );
}
