"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Image from "next/image";

interface Project {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  featured?: boolean;
  gradient: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    name: "ClinicFlow",
    tagline: "Healthcare Management System",
    description:
      "A full-stack clinic management platform with patient records, appointment scheduling, doctor dashboards, and real-time notifications. Built with a microservices architecture to handle high throughput.",
    tech: ["Next.js", "Node.js", "MongoDB", "Redis", "Docker", "JWT"],
    github: "https://github.com/Foridul35962/ClinicFlow",
    demo: "#",
    featured: true,
    gradient: "from-cyan-500/10 via-blue-500/5 to-indigo-500/10",
    accentColor: "text-cyan-400",
  },
  {
    name: "LaborLedger",
    tagline: "Labor Management Platform",
    description:
      "A workforce management system for tracking labor hours, payroll computation, shift scheduling, and compliance reporting. Features real-time attendance tracking.",
    tech: ["React.js", "Express.js", "Mongoose", "Redux Toolkit", "JWT", "Docker"],
    github: "https://github.com/Foridul35962/LaborLedger",
    demo: "https://labor-ledger.vercel.app/",
    gradient: "from-emerald-500/10 via-teal-500/5 to-cyan-500/10",
    accentColor: "text-emerald-400",
  },
  {
    name: "VibeGram",
    tagline: "Social Media Application",
    description:
      "A feature-rich social media platform with real-time chat, post feeds, story functionality, and user discovery. Built with WebSockets for instant messaging.",
    tech: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Kafka", "Redis"],
    github: "https://github.com/Foridul35962/VibeGram__client-side",
    demo: "https://vibe-gram-tau.vercel.app/",
    gradient: "from-pink-500/10 via-purple-500/5 to-indigo-500/10",
    accentColor: "text-pink-400",
  },
  {
    name: "FoodBridge",
    tagline: "Food Delivery Platform",
    description:
      "A scalable food delivery marketplace connecting restaurants and customers with live order tracking, payment integration, and restaurant analytics dashboard.",
    tech: ["React.js", "Node.js", "MongoDB", "Stripe", "Redis", "Docker"],
    github: "https://github.com/Foridul35962/FoodBridge__client-side",
    demo: "https://food-bridge-client-side.vercel.app/",
    gradient: "from-orange-500/10 via-amber-500/5 to-yellow-500/10",
    accentColor: "text-orange-400",
  },
];

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <FadeInUp>
      <motion.div
        whileHover={{ scale: 1.005 }}
        transition={{ duration: 0.2 }}
        className={`relative glass rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br ${project.gradient} group`}
      >
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image placeholder */}
          <div className="relative h-64 lg:h-80 bg-slate-800/50 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700/30 to-slate-900/50" />
            {/* Replace with actual screenshot */}
            <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
              {/* Image */}
              <Image
                src="/ClinicFlow.png"
                alt={project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Tech overlay */}
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
              {project.tech.slice(0, 3).map((t) => (
                <span key={t} className="px-2 py-0.5 bg-black/50 border border-white/10 rounded text-xs text-slate-300 font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <p className={`font-mono text-xs uppercase tracking-widest ${project.accentColor} mb-2`}>
                  {project.tagline}
                </p>
                <h3 className="font-display text-3xl font-bold text-white">
                  {project.name}
                </h3>
              </div>
              <p className="text-slate-400 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-6 pt-6 border-t border-white/5">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 glass border border-white/10 hover:border-white/30 text-white text-sm font-medium rounded-xl transition-all hover:scale-105"
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </FadeInUp>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <StaggerItem>
      <motion.div
        whileHover={{ scale: 1.03, y: -6 }}
        transition={{ duration: 0.2 }}
        className={`glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 bg-gradient-to-br ${project.gradient} group h-full flex flex-col`}
      >
        <div className="relative h-44 overflow-hidden">
          <Image
            src={`/${project.name}.png`}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* dark overlay for premium look */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex-1 space-y-3">
            <div>
              <p className={`font-mono text-xs uppercase tracking-wider ${project.accentColor} mb-1`}>
                {project.tagline}
              </p>
              <h3 className="font-display text-xl font-bold text-white">{project.name}</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-slate-400"
                >
                  {t}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-2.5 py-0.5 text-xs font-mono text-slate-500">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-3 mt-5 pt-5 border-t border-white/5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 glass border border-white/10 hover:border-white/25 text-white text-sm font-medium rounded-xl transition-all hover:scale-105"
            >
              <Github size={13} />
              Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 bg-indigo-600/80 hover:bg-indigo-600 text-white text-sm font-medium rounded-xl transition-all hover:scale-105"
            >
              <ExternalLink size={13} />
              Demo
            </a>
          </div>
        </div>
      </motion.div>
    </StaggerItem>
  );
}

export default function ProjectsSection() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've Built"
          description="Production-ready applications built with scalability, clean architecture, and real-world use cases in mind."
        />

        <div className="space-y-8">
          {/* Featured */}
          <FeaturedProjectCard project={featured} />

          {/* Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {rest.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
