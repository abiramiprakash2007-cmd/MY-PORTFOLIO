import React, { useState, useRef } from 'react';
import { ArrowDown, FileText, Github, Linkedin, Mail, Camera, Sparkles, ArrowUpRight, Cpu, Eye } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCustomPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            <div className="space-y-5">
              {/* Editorial Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#252731] border border-white/10 text-xs font-mono text-[#F7BBD4]">
                <span className="w-2 h-2 rounded-full bg-[#F35A9D]" />
                <span className="tracking-wider uppercase font-semibold">Abirami · Portfolio 2026</span>
              </div>

              {/* Large Serif Headline */}
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-normal tracking-tight text-[#F8F4F7] leading-[1.12] text-balance">
                Building Intelligent Solutions & Exploring the Future of AI
              </h1>

              {/* Subtitle & Role */}
              <div className="space-y-1">
                <p className="text-lg sm:text-xl font-medium text-[#F7BBD4]">
                  Aspiring AI Engineer <span className="text-white/40 font-light">|</span> CSE (AI & ML)
                </p>
                <p className="text-xs sm:text-sm font-mono text-[#B8B4C0] tracking-wider uppercase">
                  REVA University · Bengaluru, Karnataka
                </p>
              </div>

              {/* Short Professional Introduction */}
              <p className="text-base sm:text-lg text-[#B8B4C0] leading-relaxed max-w-xl">
                I specialize in engineering intelligent systems at the intersection of computer vision, deep learning pipelines, and algorithmic problem-solving. Translating mathematical rigor into practical, human-centric software.
              </p>
            </div>

            {/* Buttons & Socials Strip */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={scrollToProjects}
                  className="px-7 py-3.5 text-sm font-bold text-white bg-[#F35A9D] hover:bg-white hover:text-[#171719] rounded-full transition-all duration-200 shadow-[0_4px_20px_rgba(243,90,157,0.4)] hover:shadow-[0_6px_24px_rgba(255,255,255,0.4)] cursor-pointer flex items-center gap-2 group"
                >
                  <span>Explore My Work</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </button>

                <button
                  onClick={onOpenResume}
                  className="px-6 py-3.5 text-sm font-semibold text-[#F8F4F7] bg-[#252731] hover:bg-white/15 border border-white/10 hover:border-[#F7BBD4]/40 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-[#F7BBD4]" />
                  <span>Download Resume</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:ml-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-[#252731] hover:bg-white/15 border border-white/10 hover:border-[#F35A9D] text-[#B8B4C0] hover:text-[#F35A9D] transition-colors"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-[#252731] hover:bg-white/15 border border-white/10 hover:border-[#F35A9D] text-[#B8B4C0] hover:text-[#F35A9D] transition-colors"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Proof Metrics Row */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
              <div>
                <span className="font-editorial text-2xl sm:text-3xl text-[#F8F4F7] font-semibold block">
                  20<span className="text-[#F35A9D]">/26</span>
                </span>
                <span className="text-[11px] font-mono text-[#B8B4C0] uppercase tracking-wider block mt-0.5">
                  SignIQ ASL Gestures
                </span>
              </div>

              <div>
                <span className="font-editorial text-2xl sm:text-3xl text-[#F8F4F7] font-semibold block">
                  SIH '26
                </span>
                <span className="text-[11px] font-mono text-[#B8B4C0] uppercase tracking-wider block mt-0.5">
                  OCR Compliance Audit
                </span>
              </div>

              <div>
                <span className="font-editorial text-2xl sm:text-3xl text-[#F35A9D] font-semibold block">
                  Open
                </span>
                <span className="text-[11px] font-mono text-[#B8B4C0] uppercase tracking-wider block mt-0.5">
                  Summer 2026 Internships
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Large Abstract Pink Marbled Visual Panel */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative w-full h-[460px] sm:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              
              {/* Pink Marbled fluid gradient canvas */}
              <div className="absolute inset-0 bg-pink-marbled animate-fluid" />

              {/* Decorative wave textures & organic curves */}
              <svg
                className="absolute inset-0 w-full h-full opacity-35 mix-blend-overlay pointer-events-none"
                viewBox="0 0 400 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-50 200 C 50 120, 150 300, 250 180 C 350 60, 450 250, 500 200 L 500 500 L -50 500 Z"
                  fill="url(#pinkGlow)"
                />
                <circle cx="200" cy="180" r="140" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />
                <circle cx="200" cy="180" r="90" stroke="#F8F4F7" strokeWidth="0.7" opacity="0.4" />
                <defs>
                  <linearGradient id="pinkGlow" x1="0" y1="0" x2="400" y2="500" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F35A9D" stopOpacity="0.8" />
                    <stop offset="1" stopColor="#171719" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Content over abstract panel: Portrait or Creative Monogram */}
              <div className="relative z-10 w-full h-full p-6 sm:p-8 flex flex-col justify-between">
                
                {/* Top Pill inside visual panel */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white tracking-widest uppercase">
                    AI · Computer Vision
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <Sparkles className="w-3.5 h-3.5 text-[#F7BBD4]" />
                  </div>
                </div>

                {/* Central Portrait Placeholder / Custom Preview */}
                <div className="my-auto flex flex-col items-center text-center">
                  {customPhoto ? (
                    <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                      <img src={customPhoto} alt="Abirami" className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#171719]/80 backdrop-blur-md border-2 border-white/20 flex flex-col items-center justify-center shadow-2xl relative group-hover:scale-105 transition-transform duration-500">
                      <span className="font-editorial text-5xl sm:text-6xl font-normal text-white">
                        A
                      </span>
                      <span className="text-xs font-semibold text-[#F7BBD4] tracking-wide mt-1">
                        Abirami
                      </span>
                      <span className="text-[10px] font-mono text-[#B8B4C0]">
                        REVA University
                      </span>
                    </div>
                  )}

                  <div className="mt-4">
                    <p className="font-editorial text-lg text-white font-medium">
                      "Learning with purpose. Building with curiosity."
                    </p>
                  </div>
                </div>

                {/* Bottom upload bar */}
                <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-mono text-white/80">
                  <span className="text-[11px]">Portrait Area</span>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-[11px] text-white transition-colors cursor-pointer"
                  >
                    <Camera className="w-3 h-3 text-[#F7BBD4]" />
                    <span>Upload Photo</span>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
