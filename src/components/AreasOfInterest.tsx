import React from 'react';
import { Brain, Cpu, Eye, BarChart2, Terminal, Sparkles, Lightbulb, CheckCircle2, Quote } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const AreasOfInterest: React.FC = () => {
  const interests = [
    { title: 'Artificial Intelligence', subtitle: 'Neural systems & deep learning architectures', icon: <Brain className="w-4 h-4 text-[#F35A9D]" /> },
    { title: 'Machine Learning', subtitle: 'Supervised models & statistical evaluation', icon: <Cpu className="w-4 h-4 text-[#F7BBD4]" /> },
    { title: 'Data Science', subtitle: 'Wrangling, hypothesis testing & visual narratives', icon: <BarChart2 className="w-4 h-4 text-[#F35A9D]" /> },
    { title: 'Computer Vision', subtitle: 'Landmark tracking, OCR & image processing', icon: <Eye className="w-4 h-4 text-[#F7BBD4]" /> },
    { title: 'Software Development', subtitle: 'Clean, maintainable code in Python, C, C++, Java', icon: <Terminal className="w-4 h-4 text-[#F35A9D]" /> },
    { title: 'Hackathons', subtitle: 'Rapid prototyping & team innovation sprints', icon: <Sparkles className="w-4 h-4 text-[#F7BBD4]" /> },
    { title: 'Technology Innovation', subtitle: 'Translating research into practical tooling', icon: <Lightbulb className="w-4 h-4 text-[#F35A9D]" /> },
    { title: 'Problem Solving', subtitle: 'Data structures, algorithms & civic applications', icon: <CheckCircle2 className="w-4 h-4 text-[#F7BBD4]" /> },
  ];

  return (
    <section className="py-20 sm:py-28 relative" id="interests">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#252731] border border-white/10 text-xs font-mono text-[#F7BBD4] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F35A9D]" />
            <span>05 · Focus & Curiosity</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F8F4F7] tracking-tight">
            Personal Interests & Research Domains
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#B8B4C0] leading-relaxed">
            Where my curiosity and engineering focus converge across perception, modeling, and rapid innovation.
          </p>
        </div>

        {/* 8 Small Editorial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {interests.map((item, idx) => (
            <div
              key={idx}
              className="card-dark p-5 sm:p-6 flex flex-col justify-between group hover:border-[#F35A9D]/40"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white group-hover:border-[#F35A9D]/50 transition-colors">
                  {item.icon}
                </div>
                <span className="font-mono text-xs text-[#B8B4C0]">0{idx + 1}</span>
              </div>

              <div>
                <h3 className="font-editorial text-lg font-normal text-white group-hover:text-[#F7BBD4] transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#B8B4C0] leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 8: Visually Beautiful Personal Statement Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-14 bg-gradient-to-r from-[#241A25] via-[#2A1828] to-[#1C1620] border border-white/15">
          <div className="absolute top-0 right-0 w-80 h-80 bg-pink-marbled opacity-20 blur-3xl pointer-events-none rounded-full" />
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-[#F35A9D] text-white flex items-center justify-center shadow-lg">
              <Quote className="w-5 h-5 fill-white" />
            </div>

            <blockquote className="font-editorial text-2xl sm:text-4xl lg:text-[40px] font-normal text-[#F8F4F7] leading-snug tracking-tight">
              "{personalInfo.portfolioMotto}"
            </blockquote>

            <div className="pt-2">
              <span className="text-sm sm:text-base font-semibold text-white tracking-wide block">
                Abirami
              </span>
              <span className="text-xs font-mono text-[#F7BBD4] tracking-wider uppercase block mt-0.5">
                Aspiring AI Engineer · REVA University
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
