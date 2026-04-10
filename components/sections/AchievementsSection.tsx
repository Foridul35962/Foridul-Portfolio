"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Code2, Star, Zap, Target, Award } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

function useCountUp(end: number, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const [isRunning, setIsRunning] = useState(false);

  const startAnimation = () => {
    if (isRunning) return;
    setIsRunning(true);
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * (end - start) + start));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return { count, startAnimation };
}

function CounterCard({
  icon: Icon,
  value,
  suffix,
  label,
  sublabel,
  color,
  delay,
}: {
  icon: React.ElementType;
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
  color: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const { count, startAnimation } = useCountUp(value, 1800);

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(startAnimation, delay * 1000);
      return () => clearTimeout(t);
    }
  }, [isInView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.04, y: -4 }}
      className="glass rounded-2xl p-6 border border-white/5 hover:border-indigo-500/20 transition-colors group text-center"
    >
      <div
        className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
      >
        <Icon size={22} />
      </div>
      <div className="font-display text-4xl font-bold text-gradient mb-1">
        {count}
        {suffix}
      </div>
      <p className="text-white font-semibold text-sm mb-1">{label}</p>
      <p className="text-slate-500 text-xs font-mono">{sublabel}</p>
    </motion.div>
  );
}

const counters = [
  {
    icon: Code2,
    value: 300,
    suffix: "+",
    label: "LeetCode Problems",
    sublabel: "Solved across all difficulties",
    color: "bg-indigo-500/10 border border-indigo-500/20 text-indigo-400",
    delay: 0,
  },
  {
    icon: Star,
    value: 15,
    suffix: "%",
    label: "Global Ranking",
    sublabel: "Top percentile on LeetCode",
    color: "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400",
    delay: 0.1,
  },
  {
    icon: Trophy,
    value: 10,
    suffix: "+",
    label: "Projects Shipped",
    sublabel: "Production-grade applications",
    color: "bg-purple-500/10 border border-purple-500/20 text-purple-400",
    delay: 0.2,
  },
  {
    icon: Zap,
    value: 5,
    suffix: "+",
    label: "Contests Entered",
    sublabel: "LeetCode & Codeforces",
    color: "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400",
    delay: 0.3,
  },
];

const badges = [
  { icon: Target, label: "DSA Specialist", desc: "Arrays, Trees, Graphs, DP mastery" },
  { icon: Award, label: "Backend Expert", desc: "API design & microservices" },
  { icon: Star, label: "System Thinker", desc: "Scalable architecture design" },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-max">
        <SectionHeader
          eyebrow="Achievements"
          title="Numbers That Speak"
          description="Milestones from my journey in competitive programming and software development."
        />

        {/* Counter grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {counters.map((c) => (
            <CounterCard key={c.label} {...c} />
          ))}
        </div>

        {/* Skill mastery badges */}
        <StaggerContainer className="grid sm:grid-cols-3 gap-4" staggerDelay={0.1}>
          {badges.map(({ icon: Icon, label, desc }) => (
            <StaggerItem key={label}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="glass rounded-2xl p-5 border border-white/5 hover:border-indigo-500/20 transition-all flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* LeetCode progress bar visual */}
        <FadeInUp delay={0.3}>
          <div className="mt-6 glass rounded-2xl p-6 border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold">LeetCode Progress</h3>
              <span className="font-mono text-sm text-indigo-300">300+ solved</span>
            </div>
            <div className="space-y-3">
              {[
                { label: "Easy", count: 120, total: 150, color: "bg-emerald-500" },
                { label: "Medium", count: 140, total: 180, color: "bg-yellow-500" },
                { label: "Hard", count: 40, total: 70, color: "bg-red-500" },
              ].map(({ label, count, total, color }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="text-slate-400 text-xs font-mono w-14">{label}</span>
                  <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(count / total) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                      className={`h-full ${color} rounded-full`}
                    />
                  </div>
                  <span className="text-slate-500 text-xs font-mono w-16 text-right">
                    {count}/{total}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
