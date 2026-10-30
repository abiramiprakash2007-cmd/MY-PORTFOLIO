import React from 'react';
import { Target, Flag, Rocket, CheckCircle2, Award, Sparkles, Brain, Cpu, ShieldCheck } from 'lucide-react';
import { careerMilestones } from '../data/portfolioData';

export const CareerGoals: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 relative" id="vision">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[550px] h-[550px] bg-gradient-to-bl from-[#7C3AED]/12 via-[#F472B6]/8 to-transparent blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E0D4FC] mb-3">
            <span className="w-6 h-[1px] bg-[#E0D4FC]" />
            <span>08. Career Vision & Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Career Vision as an AI Engineer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#CAC4CE]">
            Articulating my ambition to pioneer accessible, mathematically grounded, and reliable artificial intelligence systems that address human challenges.
          </p>
        </div>

        {/* Striking Vision Hero Banner */}
        <div className="mb-14 glass-panel-elevated rounded-3xl p-8 sm:p-12 border border-[#E0D4FC]/30 shadow-2xl relative overflow-hidden bg-gradient-to-r from-[#0E1322] via-[#151A2E] to-[#1A152E]">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6EE7B7] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#6EE7B7]" />
              <span>THE GUIDING NORTH STAR</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              "To develop intelligent, transparent, and resilient AI systems that don't merely process data, but actively augment human capabilities and safeguard vulnerable communities."
            </h3>
            <p className="text-sm sm:text-base text-[#CAC4CE] leading-relaxed pt-2">
              By combining disciplined programming rigor in C, C++, and Python with cutting-edge computer vision (MediaPipe, OCR) and ethical machine learning, I aim to lead projects from foundational algorithm research through to production edge deployment.
            </p>
          </div>
        </div>

        {/* Milestone Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careerMilestones.map((milestone, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-7 sm:p-8 border border-[#E0D4FC]/20 flex flex-col justify-between relative overflow-hidden group hover:border-[#E0D4FC]/40 transition-all duration-300 hover:-translate-y-1 bg-[#0A0E18]/85 shadow-lg"
            >
              <div>
                {/* Phase Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#E0D4FC] font-bold">
                    {milestone.phase}
                  </span>
                  <span className="font-mono text-xs text-[#FBCFE8] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                    {milestone.timeline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {milestone.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#CAC4CE] leading-relaxed mb-6">
                  {milestone.focus}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-5 border-t border-[#E0D4FC]/10 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#6EE7B7] block mb-2">
                  Key Target Outcomes
                </span>
                {milestone.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-[#DFE2F1]">
                    <CheckCircle2 className="w-4 h-4 text-[#E0D4FC] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
