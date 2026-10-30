import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, Mail, MapPin, Globe, ExternalLink, GraduationCap, Briefcase, Award } from 'lucide-react';
import { personalInfo, educationData, internshipData, skillCategories, projectsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `ABIRAMI - Aspiring AI Engineer | B.Tech CSE (AI & ML) Student at REVA University\nEmail: ${personalInfo.email}\nEducation: ${educationData.degree} - ${educationData.major}, ${educationData.institution} (${educationData.period})\nKey Projects: SignIQ (Hand Gesture Recognition - 20/26 ASL letters), Legal Metrology Compliance Checker (SIH 2026), NetSentinel (NIDS)\nSkills: Python, C, C++, Java, MediaPipe, OpenCV, PaddleOCR, NumPy, Pandas, Scikit-learn, Git`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity no-print"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#171719] border border-white/15 shadow-2xl p-6 sm:p-10 z-10 max-h-[92vh] overflow-y-auto text-[#F8F4F7]">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 no-print gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F35A9D]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#F7BBD4]">
              Verified Academic Resume
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleCopySummary}
              className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono text-[#B8B4C0] hover:text-white border border-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copy plain-text summary"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#F35A9D]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-full bg-[#F35A9D] text-white hover:bg-white hover:text-[#171719] text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#B8B4C0] hover:text-white hover:bg-white/10 transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="mt-8 space-y-8 text-sm text-[#B8B4C0] font-sans">
          
          {/* Header Block */}
          <div className="border-b border-white/10 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="font-editorial text-3xl sm:text-4xl font-normal text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <span className="text-sm font-mono text-[#F7BBD4]">
                {personalInfo.role}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-2 text-xs text-[#B8B4C0] font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#F35A9D]" />
                {personalInfo.email}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#F7BBD4]" />
                {educationData.institution}, {personalInfo.location}
              </span>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[#F8F4F7] leading-relaxed">
              {personalInfo.bioSnippet}
            </p>
          </div>

          {/* Education Block */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#F7BBD4] mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#F35A9D]" />
              <span>Education</span>
            </h2>
            <div className="p-4 rounded-2xl bg-[#252731] border border-white/10 space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white font-semibold text-sm">
                <span>{educationData.degree}</span>
                <span className="font-mono text-xs text-[#F7BBD4] font-normal">{educationData.period}</span>
              </div>
              <p className="text-xs text-[#F7BBD4] font-medium">
                {educationData.major}
              </p>
              <p className="text-xs text-[#B8B4C0]">
                {educationData.institution} · {educationData.location}
              </p>
              <div className="pt-2 text-xs text-[#B8B4C0]">
                <span className="font-mono text-[11px] text-white">Relevant Coursework: </span>
                {educationData.keyCoursework.slice(0, 6).join(', ')}
              </div>
            </div>
          </div>

          {/* Technical Skills Block */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#F7BBD4] mb-3">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-[#252731] border border-white/10 space-y-1">
                <span className="font-mono text-[11px] text-[#F7BBD4] uppercase block font-semibold">
                  Programming Languages
                </span>
                <span className="text-white">Python, C, C++, Java</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#252731] border border-white/10 space-y-1">
                <span className="font-mono text-[11px] text-[#F35A9D] uppercase block font-semibold">
                  AI & Computer Vision
                </span>
                <span className="text-white">MediaPipe Hands, OCR, PaddleOCR exploration, OpenCV, Image Processing</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#252731] border border-white/10 space-y-1">
                <span className="font-mono text-[11px] text-[#F7BBD4] uppercase block font-semibold">
                  Data Science & Analytics
                </span>
                <span className="text-white">NumPy, Pandas, Matplotlib, Seaborn, Exploratory Data Analysis (EDA)</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#252731] border border-white/10 space-y-1">
                <span className="font-mono text-[11px] text-white uppercase block font-semibold">
                  Web & Developer Tools
                </span>
                <span className="text-white">HTML5, CSS3, Git, GitHub, VS Code, Jupyter Notebook</span>
              </div>
            </div>
          </div>

          {/* Key Projects Block */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#F7BBD4] mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#F35A9D]" />
              <span>Key Projects & Technical Initiatives</span>
            </h2>

            <div className="space-y-4">
              {projectsData.slice(0, 3).map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-2xl bg-[#252731] border border-white/10 space-y-1.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-white font-semibold text-sm">
                      {proj.title} – {proj.tagline}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border text-[#F7BBD4] border-[#F35A9D]/40 bg-[#F35A9D]/10">
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-xs text-[#B8B4C0] leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] font-mono text-[#F7BBD4]">
                    {proj.technologies.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transparent Internship Status */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#F7BBD4] mb-3">
              Professional Availability & Internship Readiness
            </h2>
            <div className="p-4 rounded-2xl bg-[#252731] border border-[#F35A9D]/30 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-white">Target Roles: AI/ML Engineering Intern, Computer Vision Intern</span>
                <span className="font-mono text-[#F35A9D]">Summer 2026 / Pre-Final Year</span>
              </div>
              <p className="text-xs text-[#B8B4C0]">
                Prepared with hands-on computer vision implementations (MediaPipe, PaddleOCR), data wrangling in Pandas, and algorithmic coding in C/C++/Python. Available for roles in Bengaluru, hybrid, or remote setups.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Close CTA */}
        <div className="mt-8 pt-6 border-t border-white/10 flex justify-end no-print">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#F35A9D] text-white text-xs font-bold hover:bg-white hover:text-[#171719] transition-all cursor-pointer shadow-sm"
          >
            Close Resume
          </button>
        </div>

      </div>
    </div>
  );
};
