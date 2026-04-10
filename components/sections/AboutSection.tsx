"use client";
import { motion } from "framer-motion";
import { Brain, Server, Layers, Target, Code, Zap } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const highlights = [
  {
    icon: Brain,
    title: "Problem Solver",
    desc: "300+ LeetCode problems solved. Passionate about algorithmic thinking and optimal solutions.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    icon: Server,
    title: "Backend Focus",
    desc: "Deep expertise in Node.js, REST APIs, database design, and microservices architecture.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    icon: Layers,
    title: "System Design",
    desc: "Designing scalable, fault-tolerant systems with a focus on performance and reliability.",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: Target,
    title: "FAANG Mindset",
    desc: "Consistently preparing for top-tier engineering roles through rigorous study and practice.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
];

const traits = [
  { icon: Code, text: "Clean Code Advocate" },
  { icon: Zap, text: "Performance Obsessed" },
  { icon: Brain, text: "Continuous Learner" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionHeader
          eyebrow="About Me"
          title="Engineered for Scale"
          description="I build systems that don't just work — they scale."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left text */}
          <div className="lg:col-span-2 space-y-6">
            <FadeInUp>
              <div className="glass rounded-3xl p-8 border border-white/5 space-y-6">
                <p className="text-slate-300 text-lg leading-relaxed">
                  I&apos;m <span className="text-white font-semibold">Foridul Ibne Qauser</span>,
                  a Full-Stack Developer with a backend-first mindset. I architect
                  systems that power real-world applications at scale.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  My journey is driven by a deep curiosity for how things work
                  under the hood — from database query optimization to distributed
                  system design patterns used at companies like Google and Meta.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  When I&apos;m not building, I&apos;m grinding LeetCode, studying system
                  design papers, or contributing to open-source projects.
                </p>

                {/* Traits */}
                <div className="pt-4 border-t border-white/5 space-y-3">
                  {traits.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={13} className="text-indigo-400" />
                      </div>
                      <span className="text-slate-300 text-sm font-medium">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Mini profile card */}
                <div className="pt-4 border-t border-white/5">
                  <div className="space-y-2 font-mono text-xs text-slate-500">
                    <div className="flex gap-3">
                      <span className="text-indigo-500">const</span>
                      <span className="text-purple-400">developer</span>
                      <span className="text-white">=</span>
                      <span className="text-cyan-400">{`{`}</span>
                    </div>
                    <div className="pl-4 space-y-1">
                      <div><span className="text-slate-400">name:</span> <span className="text-emerald-400">&quot;Foridul&quot;</span>,</div>
                      <div><span className="text-slate-400">role:</span> <span className="text-emerald-400">&quot;Full-Stack Dev&quot;</span>,</div>
                      <div><span className="text-slate-400">goal:</span> <span className="text-emerald-400">&quot;FAANG Engineer&quot;</span>,</div>
                      <div><span className="text-slate-400">available:</span> <span className="text-indigo-400">true</span></div>
                    </div>
                    <div><span className="text-cyan-400">{`}`}</span></div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Right grid */}
          <div className="lg:col-span-3">
            <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.12}>
              {highlights.map(({ icon: Icon, title, desc, color, bg }) => (
                <StaggerItem key={title}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`glass rounded-2xl p-6 border ${bg} h-full group cursor-default`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${bg} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon size={18} className={color} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white mb-2">
                      {title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Bottom banner */}
            <FadeInUp delay={0.4}>
              <div className="mt-4 glass rounded-2xl p-6 border border-white/5 bg-gradient-to-r from-indigo-500/5 to-cyan-500/5">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {["I", "S", "D"].map((l) => (
                      <div
                        key={l}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-slate-950 flex items-center justify-center text-white text-xs font-bold"
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">
                      Focused on Impact
                    </p>
                    <p className="text-slate-500 text-xs">
                      Every line of code I write solves a real problem
                    </p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="font-mono text-2xl font-bold text-gradient">100%</p>
                    <p className="text-slate-500 text-xs">Commitment</p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
