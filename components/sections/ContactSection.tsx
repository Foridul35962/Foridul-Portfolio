"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Facebook, Instagram, CheckCircle, Loader2 } from "lucide-react";
import { FadeInUp } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    handle: "Foridul35962",
    href: "https://github.com/Foridul35962",
    color: "hover:border-slate-500/50 hover:text-slate-300",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Foridul Ibne Qauser",
    href: "https://www.linkedin.com/in/foridul-ibne-qauser/",
    color: "hover:border-blue-500/50 hover:text-blue-300",
  },
  {
    icon: Facebook,
    label: "Facebook",
    handle: "foridul ibne qauser",
    href: "https://www.facebook.com/foridul35962/",
    color: "hover:border-blue-500/50 hover:text-blue-300",
  },
  {
    icon: Instagram,
    label: "Instagram",
    handle: "Foridul Ibne Qauser",
    href: "https://www.instagram.com/foridul35962/",
    color: "hover:border-pink-500/50 hover:text-pink-300",
  },
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Build Together"
          description="I'm open to new opportunities, collaborations, and interesting conversations."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left info */}
          <div className="lg:col-span-2 space-y-6">
            <FadeInUp>
              <div className="glass rounded-2xl p-6 border border-white/5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                    <Mail size={18} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-mono uppercase tracking-wide">Email</p>
                    <a
                      href="mailto:foridulislam35962@gmail.com"
                      className="text-white text-sm font-medium hover:text-indigo-300 transition-colors"
                    >
                      foridulislam35962@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Currently{" "}
                    <span className="text-emerald-400 font-medium">available</span> for
                    full-time roles, freelance projects, and open-source collaborations.
                    Response time: within 24 hours.
                  </p>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <div className="space-y-3">
                <p className="text-slate-500 text-xs font-mono uppercase tracking-widest px-1 mb-3">
                  Find me on
                </p>
                {socials.map(({ icon: Icon, label, handle, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-3 p-3 glass border border-white/5 rounded-xl text-slate-400 transition-all ${color}`}
                  >
                    <Icon size={16} />
                    <div>
                      <p className="text-xs font-mono font-medium text-inherit">{label}</p>
                      <p className="text-slate-600 text-xs">{handle}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </FadeInUp>
          </div>

          {/* Form */}
          <FadeInUp delay={0.2} className="lg:col-span-3">
            <div className="glass rounded-3xl p-8 border border-white/5">
              <h3 className="font-display text-xl font-semibold text-white mb-6">
                Send a Message
              </h3>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <CheckCircle size={28} className="text-emerald-400" />
                  </div>
                  <p className="text-white text-lg font-semibold">Message Sent!</p>
                  <p className="text-slate-400 text-sm">I&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div className="relative">
                    <label
                      className={`absolute left-4 text-xs font-mono transition-all duration-200 pointer-events-none ${
                        focused === "name" || form.name
                          ? "-top-2.5 text-indigo-400 bg-slate-950 px-1"
                          : "top-3.5 text-slate-500"
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      required
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-all duration-200 font-body ${
                        focused === "name"
                          ? "border-indigo-500/60 bg-indigo-500/5 shadow-[0_0_0_3px_rgba(99,102,241,0.1)]"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label
                      className={`absolute left-4 text-xs font-mono transition-all duration-200 pointer-events-none ${
                        focused === "email" || form.email
                          ? "-top-2.5 text-indigo-400 bg-slate-950 px-1"
                          : "top-3.5 text-slate-500"
                      }`}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      required
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-all duration-200 font-body ${
                        focused === "email"
                          ? "border-indigo-500/60 bg-indigo-500/5 shadow-[0_0_0_3px_rgba(99,102,241,0.1)]"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label
                      className={`absolute left-4 text-xs font-mono transition-all duration-200 pointer-events-none ${
                        focused === "message" || form.message
                          ? "-top-2.5 text-indigo-400 bg-slate-950 px-1"
                          : "top-3.5 text-slate-500"
                      }`}
                    >
                      Your Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      required
                      rows={5}
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-all duration-200 font-body resize-none ${
                        focused === "message"
                          ? "border-indigo-500/60 bg-indigo-500/5 shadow-[0_0_0_3px_rgba(99,102,241,0.1)]"
                          : "border-white/10 hover:border-white/20"
                      }`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
