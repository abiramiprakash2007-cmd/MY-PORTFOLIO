import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, GitBranch, ArrowRight, UserCheck } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const getContributionNotes = (id: string) => {
    switch (id) {
      case 'signiq':
        return 'Architected the real-time skeletal coordinate normalization pipeline using Google MediaPipe Hands, calibrated 21 3D landmarks for wrist-invariance, and implemented geometric classification mapping 20 of 26 ASL fingerspelling gestures.';
      case 'legal-metrology':
        return 'Formulated the image preprocessing and text extraction pipeline using PaddleOCR and regular expression validation rules for the Smart India Hackathon 2026 initiative, verifying mandatory statutory declarations on packaged goods labels.';
      case 'netsentinel':
        return 'Conducted extensive exploratory data analysis with Pandas and Seaborn on network packet flow metrics, engineered byte-ratio features, and evaluated comparative ML classification algorithms for anomaly detection.';
      case 'women-safety':
        return 'Conceptualized low-friction trigger mechanisms (discrete button shortcut sequences) paired with lightweight GPS coordinate packaging and multi-channel distress beacon dispatch logic.';
      case 'resqnet':
        return 'Devised the conceptual priority-weighted resource allocation heuristic, balancing disaster severity scores, population density, and supply dispatch queues for crisis logistics.';
      default:
        return 'System architecture design, data wrangling, and pipeline prototyping.';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#171719] border border-white/15 shadow-2xl p-6 sm:p-9 z-10 max-h-[92vh] overflow-y-auto text-[#F8F4F7]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#B8B4C0] hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 transition-colors focus-visible:outline-none cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Status & Title */}
        <div className="space-y-3 pr-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#F35A9D]/15 text-[#F7BBD4] border border-[#F35A9D]/30">
              {project.status}
            </span>
            <span className="text-xs font-mono text-[#B8B4C0]">
              Category: {project.category}
            </span>
          </div>

          <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-[#F7BBD4] font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Content Body */}
        <div className="mt-6 space-y-6 text-sm text-[#B8B4C0]">
          
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F7BBD4] mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#F35A9D]" />
              <span>Project Architecture & Overview</span>
            </h4>
            <p className="text-sm leading-relaxed text-[#F8F4F7]">
              {project.fullOverview}
            </p>
          </div>

          {/* Abirami's Specific Contribution */}
          <div className="p-4 rounded-2xl bg-[#252731] border border-white/10 space-y-1.5">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F7BBD4] flex items-center gap-2 font-semibold">
              <UserCheck className="w-4 h-4 text-[#F35A9D]" />
              <span>Abirami's Contribution</span>
            </span>
            <p className="text-xs sm:text-sm leading-relaxed text-white">
              {getContributionNotes(project.id)}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-2xl bg-[#252731] border border-white/10 space-y-1.5">
              <span className="text-xs font-mono text-[#F7BBD4] uppercase tracking-wider block">
                The Problem
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-[#B8B4C0]">
                {project.problemStatement}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#252731] border border-white/10 space-y-1.5">
              <span className="text-xs font-mono text-white uppercase tracking-wider block">
                The Solution Approach
              </span>
              <p className="text-xs sm:text-sm leading-relaxed text-[#B8B4C0]">
                {project.solutionApproach}
              </p>
            </div>
          </div>

          {/* Architecture Data Flow */}
          {project.architectureNotes && (
            <div className="p-4 rounded-2xl bg-[#131316] border border-white/10">
              <span className="text-xs font-mono text-[#F7BBD4] uppercase tracking-wider block mb-2 flex items-center gap-2">
                <GitBranch className="w-3.5 h-3.5 text-[#F35A9D]" />
                <span>Data Flow & Model Pipeline</span>
              </span>
              <p className="font-mono text-xs text-[#B8B4C0] leading-relaxed">
                {project.architectureNotes}
              </p>
            </div>
          )}

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F7BBD4] mb-3">
              Key Capabilities & Features
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#F8F4F7]">
                  <CheckCircle2 className="w-4 h-4 text-[#F35A9D] mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics strip if applicable */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-3 pt-1">
              {project.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#252731] border border-white/10 text-center"
                >
                  <span className="font-editorial text-sm sm:text-base font-normal text-white block">
                    {metric.value}
                  </span>
                  <span className="font-mono text-[10px] text-[#F7BBD4] uppercase tracking-wider mt-0.5 block">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F7BBD4] mb-2.5">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-[#252731] border border-white/10 text-xs font-mono text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-medium text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Repository</span>
          </a>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#F35A9D] text-white text-xs font-bold hover:bg-white hover:text-[#171719] transition-all cursor-pointer shadow-md"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
