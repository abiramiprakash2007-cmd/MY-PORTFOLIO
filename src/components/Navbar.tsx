import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#171719]/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
          : 'bg-[#171719] border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Left: ABIRAMI */}
        <a
          href="#home"
          className="text-lg sm:text-xl font-extrabold tracking-tight text-[#F8F4F7] hover:text-[#F35A9D] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#F35A9D]" />
          <span className="tracking-widest uppercase text-sm sm:text-base font-bold">ABIRAMI</span>
        </a>

        {/* Centre: Home | About | Skills | Projects | Experience | Contact */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-medium text-[#B8B4C0]">
          {navLinks.map((link, idx) => {
            const isActive = activeSection === link.id;
            return (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`hover:text-[#F8F4F7] transition-colors whitespace-nowrap py-1 relative ${
                    isActive ? 'text-[#F8F4F7] font-semibold' : ''
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#F35A9D] rounded-full" />
                  )}
                </a>
                {idx < navLinks.length - 1 && (
                  <span className="text-white/15 select-none hidden lg:inline">|</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Right: Pink pill-shaped "View My Work" button + Resume button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={scrollToProjects}
            className="px-5 py-2.5 text-xs font-bold text-white bg-[#F35A9D] hover:bg-white hover:text-[#171719] rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(243,90,157,0.35)] hover:shadow-[0_6px_22px_rgba(255,255,255,0.4)] whitespace-nowrap cursor-pointer"
          >
            View My Work
          </button>

          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#F8F4F7] bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#F7BBD4]/40 rounded-full transition-all whitespace-nowrap cursor-pointer"
            title="View Resume"
          >
            <FileText className="w-3.5 h-3.5 text-[#F7BBD4]" />
            <span>Resume</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#B8B4C0] hover:text-white bg-white/5 border border-white/10 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#171719]/98 border-b border-white/10 px-5 pt-3 pb-6 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#B8B4C0] hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-[#F35A9D]" />
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#F8F4F7] bg-white/5 border border-white/15 rounded-full"
              >
                <FileText className="w-3.5 h-3.5 text-[#F7BBD4]" />
                <span>View Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
