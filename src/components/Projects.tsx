import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Eye, Shield, Users, Layers, Activity, FileCheck, Radio } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectDetailModal } from './ProjectDetailModal';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Distinctive project illustrations with strong pink & charcoal contrast
  const renderProjectVisual = (id: string, isLarge: boolean = false) => {
    switch (id) {
      case 'signiq':
        return (
          <div className={`w-full ${isLarge ? 'h-64 sm:h-72' : 'h-48'} rounded-2xl bg-gradient-to-br from-[#171719] via-[#2D1625] to-[#171719] p-5 flex flex-col justify-between relative overflow-hidden border border-white/10 group`}>
            {/* Skeletal hand tracking illustration with vibrant pink highlights */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 300 180" fill="none">
                <path d="M60 140 L100 80 L130 50 L160 40 L190 55 L220 85 L240 130" stroke="#F35A9D" strokeWidth="2.5" strokeDasharray="4 4" />
                <circle cx="100" cy="80" r="5" fill="#F7BBD4" />
                <circle cx="130" cy="50" r="5" fill="#F35A9D" />
                <circle cx="160" cy="40" r="6" fill="#FFFFFF" />
                <circle cx="190" cy="55" r="5" fill="#F35A9D" />
                <circle cx="220" cy="85" r="5" fill="#F7BBD4" />
                <line x1="160" y1="40" x2="160" y2="150" stroke="#F35A9D" strokeWidth="1.5" opacity="0.6" />
              </svg>
            </div>
            
            <div className="flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-mono text-[#F7BBD4] flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-[#F35A9D]" />
                <span>MediaPipe Hands Prototype</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-[#F35A9D] text-white text-xs font-bold font-mono shadow-sm">
                20 / 26 ASL LETTERS
              </span>
            </div>

            <div className="z-10 flex items-end justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#B8B4C0] uppercase tracking-wider block">
                  Classified Output
                </span>
                <span className="font-editorial text-2xl sm:text-3xl text-white font-normal">
                  Letter 'A' · 98.4% Confidence
                </span>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-[#F8F4F7]">
                Live 30 FPS Stream
              </div>
            </div>
          </div>
        );

      case 'legal-metrology':
        return (
          <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-[#1F1924] via-[#2A1828] to-[#171719] p-5 flex flex-col justify-between relative overflow-hidden border border-white/10">
            <div className="flex items-center justify-between text-xs font-mono z-10">
              <span className="text-[#F7BBD4] flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-[#F35A9D]" />
                <span>Smart India Hackathon 2026</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-[#F35A9D]/20 text-[#F7BBD4] text-[10px]">
                PaddleOCR
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 my-auto z-10">
              <div className="p-2 rounded-xl bg-black/50 border border-white/10 text-[11px] font-mono flex items-center justify-between">
                <span className="text-[#B8B4C0]">MRP</span>
                <span className="text-[#F35A9D] font-bold">✓ FOUND</span>
              </div>
              <div className="p-2 rounded-xl bg-black/50 border border-white/10 text-[11px] font-mono flex items-center justify-between">
                <span className="text-[#B8B4C0]">Mfg Date</span>
                <span className="text-[#F35A9D] font-bold">✓ VALID</span>
              </div>
              <div className="p-2 rounded-xl bg-black/50 border border-white/10 text-[11px] font-mono flex items-center justify-between">
                <span className="text-[#B8B4C0]">Net Qty</span>
                <span className="text-[#F35A9D] font-bold">✓ EXTRACTED</span>
              </div>
              <div className="p-2 rounded-xl bg-black/50 border border-white/10 text-[11px] font-mono flex items-center justify-between">
                <span className="text-[#B8B4C0]">Origin</span>
                <span className="text-white font-bold">✓ VERIFIED</span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-[#B8B4C0] z-10">
              Automated Statutory Label Verification Engine
            </div>
          </div>
        );

      case 'netsentinel':
        return (
          <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-[#171719] via-[#221B27] to-[#171719] p-5 flex flex-col justify-between relative overflow-hidden border border-white/10">
            <div className="flex items-center justify-between text-xs font-mono z-10">
              <span className="text-[#F7BBD4] flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#F35A9D]" />
                <span>NetSentinel Intrusion Telemetry</span>
              </span>
              <span className="text-[10px] text-[#B8B4C0]">Flow Classifier</span>
            </div>

            <div className="flex items-center justify-around my-auto z-10 text-center">
              <div>
                <span className="text-[10px] font-mono text-[#B8B4C0] block">Flow Latency</span>
                <span className="font-mono text-sm font-bold text-white">41.2 ms</span>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                <span className="text-[10px] font-mono text-[#B8B4C0] block">Byte Ratio</span>
                <span className="font-mono text-sm font-bold text-[#F35A9D]">1,420 B/Pkt</span>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                <span className="text-[10px] font-mono text-[#B8B4C0] block">Threat State</span>
                <span className="font-mono text-sm font-bold text-white">Normal</span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-[#B8B4C0] z-10">
              Pandas & Seaborn Anomaly Correlation Pipeline
            </div>
          </div>
        );

      case 'women-safety':
        return (
          <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-[#241724] via-[#1A161D] to-[#171719] p-5 flex flex-col justify-between relative overflow-hidden border border-white/10">
            <div className="flex items-center justify-between text-xs font-mono z-10">
              <span className="text-[#F35A9D] flex items-center gap-1.5 font-semibold">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>Emergency SOS Concept</span>
              </span>
              <span className="text-[10px] text-white/80">&lt; 2s Latency</span>
            </div>

            <div className="my-auto z-10 space-y-2">
              <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-white">GPS Coordinate Latching</span>
                <span className="text-[#F35A9D] font-bold">12.9716° N, 77.5946° E</span>
              </div>
              <div className="text-[10px] font-mono text-[#B8B4C0]">
                Multi-channel SMS + Guardian Cascade Protocol
              </div>
            </div>

            <div className="text-[11px] font-mono text-[#F7BBD4] z-10">
              Proposed Concept · Rapid Personal Distress Alert
            </div>
          </div>
        );

      case 'resqnet':
        return (
          <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-[#1C1824] via-[#261B29] to-[#171719] p-5 flex flex-col justify-between relative overflow-hidden border border-white/10">
            <div className="flex items-center justify-between text-xs font-mono z-10">
              <span className="text-[#F7BBD4] flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#F35A9D]" />
                <span>Smart Disaster Logistics</span>
              </span>
              <span className="text-[10px] text-[#B8B4C0]">Priority Heuristic</span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-auto z-10 text-center">
              <div className="p-2 rounded-xl bg-black/50 border border-white/10">
                <span className="text-[10px] font-mono text-[#B8B4C0] block">Severity</span>
                <span className="text-xs font-bold text-[#F35A9D]">Tier 1</span>
              </div>
              <div className="p-2 rounded-xl bg-black/50 border border-white/10">
                <span className="text-[10px] font-mono text-[#B8B4C0] block">Supplies</span>
                <span className="text-xs font-bold text-white">Optimal</span>
              </div>
              <div className="p-2 rounded-xl bg-black/50 border border-white/10">
                <span className="text-[10px] font-mono text-[#B8B4C0] block">Routing</span>
                <span className="text-xs font-bold text-[#F7BBD4]">Clear</span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-[#B8B4C0] z-10">
              Proposed Concept · Emergency Supply Allocation Matrix
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const signiqProject = projectsData.find((p) => p.id === 'signiq')!;
  const sihProject = projectsData.find((p) => p.id === 'legal-metrology')!;
  const netsentinelProject = projectsData.find((p) => p.id === 'netsentinel')!;
  const womenSafetyProject = projectsData.find((p) => p.id === 'women-safety')!;
  const resqnetProject = projectsData.find((p) => p.id === 'resqnet')!;

  return (
    <section className="py-20 sm:py-28 relative" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#252731] border border-white/10 text-xs font-mono text-[#F7BBD4] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F35A9D]" />
              <span>03 · Selected Works</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F8F4F7] tracking-tight">
              Selected Projects & Experiments
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#B8B4C0] leading-relaxed">
              Curated engineering works spanning computer vision pipelines, statutory label auditing for SIH 2026, and civic safety architectures.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <span className="text-xs font-mono text-[#B8B4C0]">Asymmetrical Masonry Grid</span>
          </div>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Card 1: SIGNIQ (Large Featured Hero Card - Spans 8 Columns) */}
          <div className="lg:col-span-8 card-dark p-6 sm:p-8 flex flex-col justify-between group">
            <div>
              {/* Visual Thumbnail */}
              <div className="mb-6">
                {renderProjectVisual('signiq', true)}
              </div>

              {/* Header & Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#F35A9D]/15 text-[#F7BBD4] border border-[#F35A9D]/30">
                  Prototype Verified · ASL Recognition
                </span>
                <span className="text-xs font-mono text-[#B8B4C0]">
                  AI & Computer Vision
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white group-hover:text-[#F7BBD4] transition-colors mb-2">
                SignIQ – AI-Powered Hand Gesture Recognition
              </h3>

              <p className="text-sm text-[#B8B4C0] leading-relaxed mb-6">
                AI-powered hand gesture recognition prototype using MediaPipe Hands, recognising 20 out of 26 ASL fingerspelling letters in real time from standard consumer webcams without specialized hardware.
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {signiqProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#171719] border border-white/10 text-xs font-mono text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions with Circular Arrow Button */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={signiqProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-[#B8B4C0] hover:text-white transition-colors border border-white/10"
                  title="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
                <span className="text-xs font-mono text-[#B8B4C0]">Python · MediaPipe · OpenCV</span>
              </div>

              <button
                onClick={() => setActiveModalProject(signiqProject)}
                className="w-12 h-12 rounded-full bg-[#F35A9D] hover:bg-white text-white hover:text-[#171719] flex items-center justify-center transition-all duration-200 shadow-md group-hover:scale-105 cursor-pointer"
                title="Inspect Architecture"
                aria-label="Inspect SignIQ Architecture"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Card 2: LEGAL METROLOGY COMPLIANCE CHECKER (Spans 4 Columns) */}
          <div className="lg:col-span-4 card-dark p-6 sm:p-7 flex flex-col justify-between group">
            <div>
              <div className="mb-5">
                {renderProjectVisual('legal-metrology')}
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#F35A9D]/15 text-[#F7BBD4] border border-[#F35A9D]/30">
                  SIH 2026 Initiative
                </span>
                <span className="text-xs font-mono text-[#B8B4C0]">Hackathon</span>
              </div>

              <h3 className="font-editorial text-xl sm:text-2xl font-normal text-white group-hover:text-[#F7BBD4] transition-colors mb-2">
                Legal Metrology Compliance Checker
              </h3>

              <p className="text-xs sm:text-sm text-[#B8B4C0] leading-relaxed mb-5">
                An intelligent compliance checking solution concept for packaged commodities combining image processing, OCR, AI-assisted interpretation and rule-based validation.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {sihProject.technologies.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded-full bg-[#171719] border border-white/10 text-[11px] font-mono text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={sihProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-[#B8B4C0] hover:text-white transition-colors"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>

              <button
                onClick={() => setActiveModalProject(sihProject)}
                className="w-10 h-10 rounded-full bg-[#F35A9D] hover:bg-white text-white hover:text-[#171719] flex items-center justify-center transition-all shadow-md group-hover:scale-105 cursor-pointer"
                title="Inspect Architecture"
                aria-label="Inspect Legal Metrology Architecture"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 3: NETSENTINEL (Spans 4 Columns) */}
          <div className="lg:col-span-4 card-dark p-6 sm:p-7 flex flex-col justify-between group">
            <div>
              <div className="mb-5">
                {renderProjectVisual('netsentinel')}
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 text-[#F8F4F7] border border-white/15">
                  Prototype Concept
                </span>
                <span className="text-xs font-mono text-[#B8B4C0]">Security</span>
              </div>

              <h3 className="font-editorial text-xl sm:text-2xl font-normal text-white group-hover:text-[#F7BBD4] transition-colors mb-2">
                NetSentinel – Network Intrusion Detection
              </h3>

              <p className="text-xs sm:text-sm text-[#B8B4C0] leading-relaxed mb-5">
                AI-powered network intrusion and cyber-threat visualisation concept analyzing packet flow metrics to identify anomalies and port scans.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {netsentinelProject.technologies.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded-full bg-[#171719] border border-white/10 text-[11px] font-mono text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={netsentinelProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-[#B8B4C0] hover:text-white transition-colors"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>

              <button
                onClick={() => setActiveModalProject(netsentinelProject)}
                className="w-10 h-10 rounded-full bg-[#F35A9D] hover:bg-white text-white hover:text-[#171719] flex items-center justify-center transition-all shadow-md group-hover:scale-105 cursor-pointer"
                title="Inspect Architecture"
                aria-label="Inspect NetSentinel Architecture"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 4: WOMEN SAFETY ALERT SYSTEM (Spans 4 Columns) */}
          <div className="lg:col-span-4 card-dark p-6 sm:p-7 flex flex-col justify-between group">
            <div>
              <div className="mb-5">
                {renderProjectVisual('women-safety')}
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#F35A9D]/15 text-[#F7BBD4] border border-[#F35A9D]/30">
                  Proposed Concept
                </span>
                <span className="text-xs font-mono text-[#B8B4C0]">Social Good</span>
              </div>

              <h3 className="font-editorial text-xl sm:text-2xl font-normal text-white group-hover:text-[#F7BBD4] transition-colors mb-2">
                Women Safety Alert System
              </h3>

              <p className="text-xs sm:text-sm text-[#B8B4C0] leading-relaxed mb-5">
                A technology-based safety solution concept formulated with discrete hardware triggers, real-time GPS coordinate packaging, and distress beacon dispatch.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {womenSafetyProject.technologies.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded-full bg-[#171719] border border-white/10 text-[11px] font-mono text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={womenSafetyProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-[#B8B4C0] hover:text-white transition-colors"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>

              <button
                onClick={() => setActiveModalProject(womenSafetyProject)}
                className="w-10 h-10 rounded-full bg-[#F35A9D] hover:bg-white text-white hover:text-[#171719] flex items-center justify-center transition-all shadow-md group-hover:scale-105 cursor-pointer"
                title="Inspect Architecture"
                aria-label="Inspect Women Safety Architecture"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 5: RESQNET (Spans 4 Columns) */}
          <div className="lg:col-span-4 card-dark p-6 sm:p-7 flex flex-col justify-between group">
            <div>
              <div className="mb-5">
                {renderProjectVisual('resqnet')}
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 text-[#F8F4F7] border border-white/15">
                  Proposed Concept
                </span>
                <span className="text-xs font-mono text-[#B8B4C0]">Crisis AI</span>
              </div>

              <h3 className="font-editorial text-xl sm:text-2xl font-normal text-white group-hover:text-[#F7BBD4] transition-colors mb-2">
                ResQNet – Smart Disaster Management
              </h3>

              <p className="text-xs sm:text-sm text-[#B8B4C0] leading-relaxed mb-5">
                AI-powered smart disaster management concept optimizing emergency resource allocation, hazard severity triage, and volunteer dispatch routing during natural disasters.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {resqnetProject.technologies.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded-full bg-[#171719] border border-white/10 text-[11px] font-mono text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={resqnetProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-[#B8B4C0] hover:text-white transition-colors"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>

              <button
                onClick={() => setActiveModalProject(resqnetProject)}
                className="w-10 h-10 rounded-full bg-[#F35A9D] hover:bg-white text-white hover:text-[#171719] flex items-center justify-center transition-all shadow-md group-hover:scale-105 cursor-pointer"
                title="Inspect Architecture"
                aria-label="Inspect ResQNet Architecture"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
