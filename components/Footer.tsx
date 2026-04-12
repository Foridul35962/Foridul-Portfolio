"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Instagram, Code2, Heart, ArrowUp } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Foridul35962", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/foridul-ibne-qauser/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/foridul35962/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/foridul35962/", label: "Instagram" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-mono font-bold text-white text-sm">
                FIQ<span className="text-indigo-400">.</span>dev
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Full-Stack Developer building scalable systems and real-time applications.
              Targeting FAANG-level engineering.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-500 hover:text-indigo-400 border border-white/5 hover:border-indigo-500/30 transition-colors"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white text-xs font-mono uppercase tracking-widest mb-4">
              Quick Links
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-indigo-300 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability */}
          <div>
            <p className="text-white text-xs font-mono uppercase tracking-widest mb-4">
              Status
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-400 text-sm">Available for hire</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-slate-400 text-sm">Open to remote work</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-slate-400 text-sm">Targeting FAANG roles</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs font-mono flex items-center gap-1.5">
            © {new Date().getFullYear()} Foridul Ibne Qauser.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-500 hover:text-indigo-400 text-xs font-mono transition-colors group"
          >
            Back to top
            <ArrowUp
              size={12}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
