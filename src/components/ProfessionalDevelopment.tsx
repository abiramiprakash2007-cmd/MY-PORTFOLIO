import React from 'react';
import { Trophy, Code, Users, Search, CheckCircle2, Sparkles, ExternalLink, GitBranch } from 'lucide-react';
import { professionalDevelopmentData } from '../data/portfolioData';

export const ProfessionalDevelopment: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Hackathons':
        return <Trophy className="w-5 h-5 text-[#E0D4FC]" />;
      case 'Technical Exploration':
        return <Code className="w-5 h-5 text-[#FBCFE8]" />;
      case 'Academic Research':
        return <Search className="w-5 h-5 text-[#6EE7B7]" />;
      case 'Innovation & Community':
        return <Users className="w-5 h-5 text-[#E0D4FC]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#E0D4FC]" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 relative" id="development">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#7C3AED]/7 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E0D4FC] mb-3">
            <span className="w-6 h-[1px] bg-[#E0D4FC]" />
            <span>06. Continuous Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Professional Development & Innovation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#CAC4CE]">
            Verified milestones highlighting my hackathon participation, technical exploration in computer vision and OCR, and engineering study initiatives at REVA University.
          </p>
        </div>

        {/* Development Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {professionalDevelopmentData.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-7 sm:p-8 border border-[#E0D4FC]/20 flex flex-col justify-between hover:border-[#E0D4FC]/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl bg-[#0A0E18]/85"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-[#E0D4FC]/25 text-[#E0D4FC]">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold text-[#E0D4FC] bg-[#E0D4FC]/10 border border-[#E0D4FC]/25">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-[#CAC4CE]">
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#E0D4FC] transition-colors mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#CAC4CE] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Outcomes */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#FBCFE8] block">
                    Verified Outcomes:
                  </span>
                  {item.keyOutcomes.map((outcome, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2.5 text-xs text-[#DFE2F1]">
                      <CheckCircle2 className="w-4 h-4 text-[#6EE7B7] mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags Strip */}
              <div className="pt-4 border-t border-[#E0D4FC]/10 flex flex-wrap gap-1.5">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-white/[0.04] border border-[#E0D4FC]/15 text-[11px] font-mono text-[#E0D4FC]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
