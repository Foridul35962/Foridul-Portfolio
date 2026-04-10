"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

const categories = [
  {
    title: "Frontend Development",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
    badge: "text-blue-300 bg-blue-500/10",
    skills: [
      { name: "HTML5", emoji: "🌐" },
      { name: "CSS3", emoji: "🎨" },
      { name: "React.js", emoji: "⚛️" },
      { name: "Next.js", emoji: "▲" },
      { name: "Tailwind CSS", emoji: "💨" },
      { name: "TypeScript", emoji: "🔷" },
    ],
  },
  {
    title: "Backend Development",
    color: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-500/20",
    badge: "text-indigo-300 bg-indigo-500/10",
    skills: [
      { name: "Node.js", emoji: "🟢" },
      { name: "Express.js", emoji: "🚂" },
      { name: "Docker", emoji: "🐳" },
      { name: "Kafka", emoji: "📨" },
      { name: "REST APIs", emoji: "🔗" },
      { name: "Microservices", emoji: "🧩" },
    ],
  },
  {
    title: "Database Management",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
    badge: "text-emerald-300 bg-emerald-500/10",
    skills: [
      { name: "MySQL", emoji: "🐬" },
      { name: "MongoDB", emoji: "🍃" },
      { name: "Redis", emoji: "🔴" },
      { name: "PostgreSQL", emoji: "🐘" },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/20",
    badge: "text-orange-300 bg-orange-500/10",
    skills: [
      { name: "Git", emoji: "🌿" },
      { name: "GitHub", emoji: "🐙" },
      { name: "Redux Toolkit", emoji: "🏪" },
      { name: "JWT", emoji: "🔑" },
      { name: "Netlify", emoji: "🌊" },
      { name: "Vercel", emoji: "▲" },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Tools of the Trade"
          description="A curated set of technologies I use to build production-grade applications."
        />

        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
          {categories.map((cat) => (
            <StaggerItem key={cat.title}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className={`glass rounded-2xl p-6 border ${cat.border} bg-gradient-to-br ${cat.color} group h-full`}
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {cat.title}
                  </h3>
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${cat.badge} ${cat.border}`}>
                    {cat.skills.length} tools
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-sm font-medium text-slate-300 hover:text-white transition-all cursor-default select-none"
                    >
                      <span className="text-base leading-none">{skill.emoji}</span>
                      <span>{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* DSA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 glass rounded-2xl p-6 border border-white/5 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-cyan-500/5"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-lg mb-1">
                DSA & Competitive Programming
              </p>
              <p className="text-slate-400 text-sm">
                Algorithms · Data Structures · Dynamic Programming · Graph Theory · System Design
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="font-mono text-2xl font-bold text-gradient">300+</p>
                <p className="text-slate-500 text-xs font-mono uppercase">LeetCode</p>
              </div>
              <div className="text-center">
                <p className="font-mono text-2xl font-bold text-gradient">Top 15%</p>
                <p className="text-slate-500 text-xs font-mono uppercase">Ranking</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
