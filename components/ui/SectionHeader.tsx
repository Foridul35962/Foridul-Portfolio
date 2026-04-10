"use client";
import { FadeInUp } from "./FadeIn";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16 lg:mb-20">
      <FadeInUp>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-widest uppercase text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          {eyebrow}
        </span>
      </FadeInUp>
      <FadeInUp delay={0.1}>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {title}
        </h2>
      </FadeInUp>
      {description && (
        <FadeInUp delay={0.2}>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </FadeInUp>
      )}
    </div>
  );
}
