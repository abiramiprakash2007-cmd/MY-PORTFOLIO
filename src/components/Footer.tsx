import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#171719] relative z-10 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Left Credit */}
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F35A9D]" />
            <p className="text-sm font-medium text-[#F8F4F7]">
              Designed & Built by <span className="text-white font-bold">Abirami</span>.
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-[#B8B4C0] hover:text-[#F35A9D] transition-colors"
              title="Email"
              aria-label="Email Abirami"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-[#B8B4C0] hover:text-[#F35A9D] transition-colors"
              title="GitHub"
              aria-label="Abirami GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-[#B8B4C0] hover:text-[#F35A9D] transition-colors"
              title="LinkedIn"
              aria-label="Abirami LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#F35A9D]/15 hover:bg-[#F35A9D] text-[#F7BBD4] hover:text-white transition-all cursor-pointer ml-2"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Small motto line */}
        <div className="pt-6 mt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#B8B4C0]">
          <span>Learning with purpose. Building with curiosity.</span>
          <span className="text-[#F7BBD4] mt-1 sm:mt-0">REVA University · Bengaluru</span>
        </div>
      </div>
    </footer>
  );
};
