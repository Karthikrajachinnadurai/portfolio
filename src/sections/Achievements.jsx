import { useInView } from "react-intersection-observer";
import AnimatedSection from "../components/AnimatedSection";
import { achievements } from "../data/content";

const TYPE_STYLE = {
  award: "from-yellow-500/20 to-orange-500/10 border-yellow-500/30",
  presentation: "from-blue-500/20 to-primary-500/10 border-blue-500/30",
  leadership: "from-purple-500/20 to-accent-500/10 border-purple-500/30",
};

function AchievementCard({ item, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`relative flex gap-4 p-5 rounded-2xl bg-gradient-to-br border transition-all duration-500 hover:scale-[1.01] hover:shadow-card-hover ${
        TYPE_STYLE[item.type] || "from-white/5 to-white/2 border-white/10"
      } ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center text-2xl">
        {item.icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-white text-sm leading-snug">{item.title}</h3>
          <span className="flex-shrink-0 text-[10px] text-gray-400 font-medium whitespace-nowrap">{item.date}</span>
        </div>
        <p className="text-primary-300 text-xs font-medium mb-1">{item.event}</p>
        <p className="text-gray-400 text-xs leading-relaxed">{item.org}</p>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <AnimatedSection id="achievements" className="py-24 relative overflow-hidden">
      <div className="orb w-72 h-72 bg-accent-500 top-0 right-0 opacity-10" aria-hidden="true" />

      <div className="section-container relative z-10">
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-500/15 border border-primary-500/30 text-primary-300 uppercase tracking-widest mb-4">
            Achievements
          </span>
          <h2 className="section-title">
            Milestones & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="section-subtitle">
            Competitions won, papers presented, and leadership roles — a snapshot of my journey so far.
          </p>
        </div>

        {/* Achievement cards grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((item, i) => (
            <AchievementCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
