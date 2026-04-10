"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";
import { FadeInUp } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useState } from "react";

const experience = [
  {
    type: "work",
    title: "Full-Stack Developer",
    org: "Freelance / Self-Employed",
    period: "2025 — Present",
    location: "Remote",
    description:
      "Building full-stack web applications for clients, with a focus on scalable backend systems, RESTful APIs, and modern frontend interfaces. Delivered 4+ production projects.",
    highlights: ["Microservices Architecture", "REST API Design", "Database Optimization", "Docker Deployment"],
    color: "indigo",
  },
  {
    type: "work",
    title: "Backend Developer Intern",
    org: "Syntecxhub",
    period: "2025",
    location: "Remote",
    description:
      "Contributed to backend API development, implemented authentication systems with JWT, optimized database queries, and assisted in migrating a monolith to microservices.",
    highlights: ["JWT Auth", "Query Optimization", "REST APIs", "Node.js"],
    color: "cyan",
  },
];

const education = [
  {
    type: "education",
    title: "B.Sc. in Computer Science & Engineering",
    org: "National University",
    period: "2022 — Present",
    location: "Dhaka, Bangladesh",
    description:
      "Studying core CS fundamentals — algorithms, data structures, operating systems, database management, and software engineering principles.",
    highlights: ["Algorithms", "Data Structures", "OS", "DBMS", "Software Engineering"],
    color: "purple",
  },
];

const colorMap: Record<string, { dot: string; border: string; badge: string; line: string }> = {
  indigo: {
    dot: "bg-indigo-500",
    border: "border-indigo-500/30",
    badge: "text-indigo-300 bg-indigo-500/10",
    line: "bg-indigo-500/20",
  },
  cyan: {
    dot: "bg-cyan-500",
    border: "border-cyan-500/30",
    badge: "text-cyan-300 bg-cyan-500/10",
    line: "bg-cyan-500/20",
  },
  purple: {
    dot: "bg-purple-500",
    border: "border-purple-500/30",
    badge: "text-purple-300 bg-purple-500/10",
    line: "bg-purple-500/20",
  },
};

function TimelineItem({
  item,
  index,
}: {
  item: (typeof experience)[0];
  index: number;
}) {
  const colors = colorMap[item.color];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-10"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full ${colors.dot} ring-4 ring-slate-950 z-10`} />
        <div className={`w-0.5 flex-1 mt-1 ${colors.line} min-h-[40px]`} />
      </div>

      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className={`glass rounded-2xl p-6 border ${colors.border} mb-6 group`}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-0.5">
              {item.title}
            </h3>
            <p className={`font-mono text-sm font-medium ${colors.badge.split(" ")[0]}`}>
              {item.org}
            </p>
          </div>
          <div className="text-right space-y-1">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono justify-end">
              <Calendar size={11} />
              {item.period}
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono justify-end">
              <MapPin size={11} />
              {item.location}
            </div>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>

        <div className="flex flex-wrap gap-2">
          {item.highlights.map((h) => (
            <span
              key={h}
              className={`px-2.5 py-0.5 text-xs font-mono rounded-full border ${colors.badge} ${colors.border}`}
            >
              {h}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  const items = activeTab === "experience" ? experience : education;

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <SectionHeader
          eyebrow="Journey"
          title="Experience & Education"
          description="My professional path and academic background."
        />

        {/* Tabs */}
        <FadeInUp>
          <div className="flex justify-center mb-12">
            <div className="glass rounded-xl p-1 border border-white/10 inline-flex gap-1">
              {(["experience", "education"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
                    activeTab === tab
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab === "experience" ? (
                    <Briefcase size={14} />
                  ) : (
                    <GraduationCap size={14} />
                  )}
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {items.map((item, index) => (
              <TimelineItem key={item.title} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
