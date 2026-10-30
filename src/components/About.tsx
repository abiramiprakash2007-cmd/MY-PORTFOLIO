import React from 'react';
import { BookOpen, Sparkles, Brain, Code2, MapPin, Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#252731] border border-white/10 text-xs font-mono text-[#F7BBD4] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F35A9D]" />
            <span>01 · Identity & Story</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F8F4F7] tracking-tight">
            A Little About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#B8B4C0] leading-relaxed">
            A blend of mathematical curiosity, hands-on computer vision prototyping, and disciplined engineering.
          </p>
        </div>

        {/* Editorial Dark Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-8 card-dark p-7 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white">
                Exploring the frontiers where code meets cognitive intelligence.
              </h3>
              
              <p className="text-sm sm:text-base text-[#B8B4C0] leading-relaxed">
                I am a B.Tech Computer Science and Engineering student specializing in <strong className="text-white">Artificial Intelligence and Machine Learning</strong> at <strong className="text-white">REVA University</strong> in Bengaluru. My passion lies in understanding how computational models transform sensory data into structured, meaningful perception.
              </p>

              <p className="text-sm sm:text-base text-[#B8B4C0] leading-relaxed">
                Rather than treating AI as a theoretical black box, I prototype with real-world inputs: extracting 21 skeletal hand coordinates with <span className="text-[#F7BBD4] font-medium">Google MediaPipe</span> for sign language recognition in <span className="text-white font-medium">SignIQ</span>, and engineering text detection pipelines with <span className="text-[#F7BBD4] font-medium">PaddleOCR</span> to audit mandatory consumer disclosures for the <span className="text-white font-medium">Smart India Hackathon 2026</span>.
              </p>

              <p className="text-sm sm:text-base text-[#B8B4C0] leading-relaxed">
                My ultimate career aspiration is to evolve into an <strong className="text-white">AI Engineer</strong> who architects transparent, scalable, and human-centric software—solving tangible friction in accessibility, regulatory compliance, and community safety.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-xs font-mono text-[#F35A9D] uppercase block mb-1">01 / Rigor</span>
                <span className="text-sm font-semibold text-white block">Mathematical Basis</span>
                <span className="text-xs text-[#B8B4C0]">Linear algebra & probability</span>
              </div>
              <div>
                <span className="text-xs font-mono text-[#F35A9D] uppercase block mb-1">02 / Vision</span>
                <span className="text-sm font-semibold text-white block">Applied Computer Vision</span>
                <span className="text-xs text-[#B8B4C0]">MediaPipe, OCR & OpenCV</span>
              </div>
              <div>
                <span className="text-xs font-mono text-[#F35A9D] uppercase block mb-1">03 / Purpose</span>
                <span className="text-sm font-semibold text-white block">Human Impact</span>
                <span className="text-xs text-[#B8B4C0]">Assistive & civic solutions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Small Personal Profile Card + Social Links */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            
            {/* Personal Profile Card */}
            <div className="card-dark p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <span className="text-xs font-mono text-[#F7BBD4] uppercase tracking-wider">
                    Profile Card
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#F35A9D]" />
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs text-[#B8B4C0] block font-mono">FULL NAME</span>
                    <span className="text-lg font-bold text-white">Abirami</span>
                  </div>

                  <div>
                    <span className="text-xs text-[#B8B4C0] block font-mono">DISCIPLINE</span>
                    <span className="text-sm font-semibold text-[#F7BBD4]">B.Tech CSE (AI & ML)</span>
                  </div>

                  <div>
                    <span className="text-xs text-[#B8B4C0] block font-mono">INSTITUTION</span>
                    <span className="text-sm font-medium text-white">REVA University</span>
                    <span className="text-xs text-[#B8B4C0] flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#F35A9D]" /> Bengaluru, India
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-[#B8B4C0] block font-mono">STATUS</span>
                    <span className="text-xs font-mono text-white bg-white/5 px-2 py-0.5 rounded border border-white/10 inline-block mt-0.5">
                      Open to Summer 2026 Internships
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-white/10 mt-6 space-y-2">
                <span className="text-xs font-mono text-[#B8B4C0] uppercase block mb-2">Connect:</span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-[#F35A9D] text-white text-xs font-medium transition-colors flex items-center justify-between group"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-[#F35A9D] text-white text-xs font-medium transition-colors flex items-center justify-between group"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Guiding Quote Card */}
            <div className="p-6 rounded-3xl bg-[#F35A9D] text-white flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-white/80 block mb-2">
                  Guiding Principle
                </span>
                <p className="font-editorial text-xl font-normal leading-snug">
                  "Learning with purpose. Building with curiosity."
                </p>
              </div>
              <span className="text-xs font-mono text-white/90 pt-4 mt-4 border-t border-white/20">
                — Abirami · REVA University
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
