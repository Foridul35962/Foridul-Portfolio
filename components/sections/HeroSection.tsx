"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Facebook, Instagram, Sparkles, MapPin } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import Image from "next/image";

const socialLinks = [
  { icon: Github, href: "https://github.com/Foridul35962", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/foridul-ibne-qauser/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/foridul35962/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/foridul35962/", label: "Instagram" },
];

export default function HeroSection() {
  const typedText = useTypingEffect([
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Engineer",
    "System Designer",
    "DSA Problem Solver",
  ]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center section-padding pt-28"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container-max w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-slate-400 font-mono text-sm mb-2 tracking-widest uppercase">
                Hello, I&apos;m
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Foridul{" "}
                <span className="text-gradient">Ibne</span>
                <br />
                Qauser
              </h1>
            </motion.div>

            {/* Typing text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-0.5 bg-indigo-500" />
              <span className="font-mono text-xl text-indigo-300 typing-cursor">
                {typedText}
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-slate-400 text-lg leading-relaxed max-w-lg"
            >
              Building scalable systems and real-time applications. Passionate about
              backend engineering, system design, and cracking FAANG-level problems
              with clean, efficient code.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 text-slate-500 text-sm font-mono"
            >
              <MapPin size={14} className="text-indigo-400" />
              Bangladesh · Open to Remote
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://drive.google.com/file/d/117uw7WspIYRsUyXdPLqdxCt2sCkJMBhl/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 glass border border-white/10 hover:border-indigo-500/50 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105"
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4"
            >
              <span className="text-slate-600 text-xs font-mono uppercase tracking-widest">
                Follow me
              </span>
              <div className="h-px flex-1 bg-slate-800 max-w-[40px]" />
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 border border-white/10 transition-colors"
                  >
                    <Icon size={15} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end lg:pr-6"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/20 blur-2xl animate-pulse-glow" />

              {/* Rotating ring */}
              <div className="absolute -inset-3 rounded-full border border-dashed border-indigo-500/20 animate-spin-slow" />

              {/* Main image container */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-white/10 glow-indigo">
                {/* Placeholder gradient */}
                <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-700 to-indigo-900/50 flex flex-col items-center justify-center gap-3">
                  <Image
                    src="/profile.jpg"
                    alt="Foridul Ibne Qauser"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-8, 0, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-4 glass border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-cyan-300"
              >
                <span className="flex items-center gap-1.5">
                  <Sparkles size={10} className="text-cyan-400" />
                  System Design
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -left-4 glass border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-purple-300"
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  DSA Enthusiast
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-12 glass border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-indigo-300 hidden lg:block"
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
                  Backend Dev
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { value: "10+", label: "Projects Built" },
            { value: "300+", label: "LeetCode Problems" },
            { value: "5+", label: "Technologies" },
            { value: "∞", label: "Learning Drive" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="glass rounded-2xl p-5 border border-white/5 text-center hover:border-indigo-500/30 transition-colors"
            >
              <p className="font-display text-3xl font-bold text-gradient mb-1">{value}</p>
              <p className="text-slate-500 text-xs font-mono uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
