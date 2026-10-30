import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Mail, AlertCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { internshipData, personalInfo } from '../data/portfolioData';

export const Internship: React.FC = () => {
  const handleRecruiterEmail = () => {
    const subject = encodeURIComponent('AI & ML Engineering Internship Opportunity - 2026/2027 Cohort');
    const body = encodeURIComponent(
      `Hi Abirami,\n\nWe came across your portfolio and your projects (including SignIQ and your SIH 2026 work). We would like to discuss an AI/ML internship opportunity with our engineering team at [Organisation Name].\n\nBest regards,\n[Recruiter / Engineering Lead Name]`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 sm:py-32 relative" id="experience">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#7C3AED]/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E0D4FC] mb-3">
            <span className="w-6 h-[1px] bg-[#E0D4FC]" />
            <span>05. Industry Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Internship Experience & Professional Timeline
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#CAC4CE]">
            Grounding my portfolio in complete professional integrity: displaying verified competencies, learning milestones, and structured placeholders for upcoming opportunities.
          </p>
        </div>

        {/* Transparent Disclosure Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#111625]/90 border border-[#E0D4FC]/25 flex items-start gap-3.5 shadow-lg">
          <AlertCircle className="w-5 h-5 text-[#E0D4FC] mt-0.5 shrink-0" />
          <div className="text-xs sm:text-sm text-[#CAC4CE] leading-relaxed">
            <strong className="text-white">Strict Verification Policy: </strong>
            As a student at REVA University, I present verified capabilities and ongoing project work. Below is my structured internship timeline with official placeholders for incoming industrial roles.
          </div>
        </div>

        {/* Professional Experience Timeline Layout */}
        <div className="relative pl-6 sm:pl-10 border-l border-[#E0D4FC]/25 space-y-12">
          {internshipData.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-[#0B0F19] border-2 border-[#6EE7B7] flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#6EE7B7]" />
              </div>

              {/* Timeline Content Card */}
              <div className="glass-panel rounded-3xl p-7 sm:p-10 border border-[#E0D4FC]/25 shadow-2xl relative overflow-hidden bg-[#0A0E18]/90">
                
                {/* Top Row with Role, Organisation, and Status */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E0D4FC]/15">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6EE7B7]/10 border border-[#6EE7B7]/30 text-xs font-mono text-[#6EE7B7] mb-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6EE7B7] animate-pulse" />
                      <span>{item.status}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      {item.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs sm:text-sm text-[#CAC4CE]">
                      <span className="text-[#E0D4FC] font-semibold">{item.company}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-[#FBCFE8]" />
                        {item.location}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-[#E0D4FC]" />
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  {/* Recruiter Action */}
                  <button
                    onClick={handleRecruiterEmail}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#0B0F19] bg-[#E0D4FC] hover:bg-white rounded-xl transition-all shadow-[0_0_20px_rgba(224,212,252,0.3)] shrink-0 cursor-pointer self-start md:self-center"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Inquire for Internship</span>
                  </button>
                </div>

                {/* Core Details Grid: Responsibilities & Learning Outcomes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                  {/* Responsibilities Placeholder */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#E0D4FC] mb-4 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#FBCFE8]" />
                      <span>Prepared Responsibilities & Deliverables</span>
                    </h4>
                    <ul className="space-y-3">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CAC4CE]">
                          <CheckCircle className="w-4 h-4 text-[#E0D4FC] mt-0.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learning Outcomes Placeholder */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#FBCFE8] mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#6EE7B7]" />
                      <span>Targeted Learning Outcomes</span>
                    </h4>
                    <ul className="space-y-3">
                      {item.learningOutcomes.map((outcome, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CAC4CE]">
                          <CheckCircle className="w-4 h-4 text-[#6EE7B7] mt-0.5 shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies Strip */}
                <div className="mt-8 pt-6 border-t border-[#E0D4FC]/15 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-[#E0D4FC] mr-2">
                    TECHNOLOGIES TO DEPLOY:
                  </span>
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-[#E0D4FC]/20 text-xs font-mono text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
