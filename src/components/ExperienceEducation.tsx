import React from 'react';
import { GraduationCap, Briefcase, MapPin, Calendar, BookOpen, Award, CheckCircle2, Mail, AlertCircle, ArrowUpRight } from 'lucide-react';
import { educationData, internshipData, personalInfo } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  const handleRecruiterEmail = () => {
    const subject = encodeURIComponent('AI & ML Engineering Internship Opportunity - 2026/2027 Cohort');
    const body = encodeURIComponent(
      `Hi Abirami,\n\nWe came across your portfolio and your projects (including SignIQ and your SIH 2026 work). We would like to discuss an AI/ML internship opportunity with our engineering team at [Organisation Name].\n\nBest regards,\n[Recruiter / Engineering Lead Name]`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const internship = internshipData[0];

  return (
    <section className="py-20 sm:py-28 relative" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#252731] border border-white/10 text-xs font-mono text-[#F7BBD4] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F35A9D]" />
            <span>04 · Background & Timeline</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F8F4F7] tracking-tight">
            My Journey
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#B8B4C0] leading-relaxed">
            Academic grounding at REVA University paired with practical preparation for upcoming industrial artificial intelligence internships.
          </p>
        </div>

        {/* Two-Column Grid: Education on Left, Internship on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Education Card */}
          <div className="lg:col-span-6 card-dark p-7 sm:p-9 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#F35A9D]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#F7BBD4] block uppercase">Formal Education</span>
                    <span className="text-sm font-semibold text-white">Undergraduate Degree</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#B8B4C0]">{educationData.period}</span>
              </div>

              {/* Degree Title & Institution */}
              <div>
                <h3 className="font-editorial text-2xl font-normal text-white">
                  {educationData.degree}
                </h3>
                <p className="text-sm font-semibold text-[#F7BBD4] mt-1">
                  {educationData.major}
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs text-[#B8B4C0] font-mono">
                  <span className="text-white font-medium">{educationData.institution}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#F35A9D]" />
                    {educationData.location}
                  </span>
                </div>
              </div>

              {/* Coursework Matrix */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#B8B4C0] uppercase tracking-wider block">
                  Key Technical Coursework:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {educationData.keyCoursework.map((course, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-[#171719] border border-white/5 text-xs text-[#F8F4F7] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F35A9D]" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-xs font-mono text-[#B8B4C0] uppercase tracking-wider block">
                  Academic Focus & Culture:
                </span>
                <ul className="space-y-2">
                  {educationData.academicHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#B8B4C0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F35A9D] mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#B8B4C0]">
              <span>Specialization in AI & Machine Learning</span>
              <span className="text-[#F7BBD4]">REVA 2023 - 2027</span>
            </div>
          </div>

          {/* Right: Internship Experience Card (with Placeholders) */}
          <div className="lg:col-span-6 card-dark p-7 sm:p-9 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#F35A9D]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#F7BBD4] block uppercase">Industry Experience</span>
                    <span className="text-sm font-semibold text-white">Target 2026/2027 Cohort</span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-white bg-[#F35A9D]/20 border border-[#F35A9D]/30">
                  Open for Opportunities
                </span>
              </div>

              {/* Role & Organisation */}
              <div>
                <h3 className="font-editorial text-2xl font-normal text-white">
                  {internship.role}
                </h3>
                <p className="text-sm font-semibold text-[#F7BBD4] mt-1">
                  {internship.company}
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs text-[#B8B4C0] font-mono">
                  <span>{internship.duration}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#F35A9D]" />
                    {internship.location}
                  </span>
                </div>
              </div>

              {/* Transparent Disclosure */}
              <div className="p-3.5 rounded-xl bg-[#171719] border border-white/10 flex items-start gap-2.5 text-xs text-[#B8B4C0]">
                <AlertCircle className="w-4 h-4 text-[#F35A9D] mt-0.5 shrink-0" />
                <span>
                  <strong>Transparent Profile: </strong>
                  Never inventing professional experience. Below are structured responsibilities, technologies, and learning outcomes prepared for engineering teams.
                </span>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#B8B4C0] uppercase tracking-wider block">
                  Responsibilities & Deliverables:
                </span>
                <ul className="space-y-2">
                  {internship.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#B8B4C0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F35A9D] mt-0.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-[#B8B4C0] uppercase tracking-wider block">
                  Deployable Stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {internship.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full bg-[#171719] border border-white/10 text-xs font-mono text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Recruiter Action */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-mono text-[#B8B4C0]">Recruiting for Summer 2026?</span>
              <button
                onClick={handleRecruiterEmail}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-[#F35A9D] hover:bg-white hover:text-[#171719] rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Inquire for Internship</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
