import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 relative" id="education">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7C3AED]/8 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E0D4FC] mb-3">
            <span className="w-6 h-[1px] bg-[#E0D4FC]" />
            <span>04. Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Education & Theoretical Foundations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#CAC4CE]">
            Pursuing advanced undergraduate studies in Computer Science and Engineering with a deep specialization in Artificial Intelligence and Machine Learning at REVA University.
          </p>
        </div>

        {/* Education Timeline Showcase Card */}
        <div className="glass-panel rounded-3xl p-7 sm:p-11 border border-[#E0D4FC]/25 shadow-2xl relative overflow-hidden bg-[#0A0E18]/90">
          
          {/* Subtle background graphic */}
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-bl from-[#E0D4FC]/10 via-[#FBCFE8]/5 to-transparent blur-3xl pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            
            {/* Left Column: Degree & Institution Overview */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0D4FC]/10 border border-[#E0D4FC]/30 text-xs font-mono text-[#E0D4FC]">
                <GraduationCap className="w-4 h-4 text-[#FBCFE8]" />
                <span>B.Tech Undergraduate Scholar</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {educationData.degree}
                </h3>
                <p className="text-base sm:text-lg font-bold text-[#E0D4FC] mt-2">
                  {educationData.major}
                </p>
              </div>

              <div className="space-y-2 text-sm text-[#CAC4CE]">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white text-base">{educationData.institution}</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#CAC4CE] font-mono">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FBCFE8]" />
                    {educationData.location}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E0D4FC]" />
                    {educationData.period}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#DFE2F1]/80 leading-relaxed">
                {educationData.description}
              </p>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-[#E0D4FC]/15 space-y-1">
                <span className="text-xs font-mono text-[#6EE7B7] block font-semibold">
                  STATUS: IN PROGRESS · SPECIALIZING IN AI & ML
                </span>
                <p className="text-xs text-[#CAC4CE]">
                  Focusing on linear algebra, computational statistics, deep learning pipelines, and computer vision algorithms.
                </p>
              </div>
            </div>

            {/* Right Column: Key Coursework & Academic Pillars */}
            <div className="lg:col-span-7 space-y-7">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#E0D4FC] mb-3.5 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#FBCFE8]" />
                  <span>Curated Technical Coursework</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {educationData.keyCoursework.map((course, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#080B12]/80 border border-[#E0D4FC]/15 text-xs sm:text-sm text-white flex items-center gap-2.5 hover:border-[#E0D4FC]/40 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E0D4FC] shrink-0" />
                      <span className="font-medium">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-[#E0D4FC]/15">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#FBCFE8] mb-3.5 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#E0D4FC]" />
                  <span>Academic Focus & Environment</span>
                </h4>
                <ul className="space-y-3">
                  {educationData.academicHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CAC4CE]">
                      <CheckCircle2 className="w-4 h-4 text-[#6EE7B7] mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
