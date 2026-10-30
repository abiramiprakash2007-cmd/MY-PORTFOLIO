import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechnicalSkills } from './components/TechnicalSkills';
import { Projects } from './components/Projects';
import { ExperienceEducation } from './components/ExperienceEducation';
import { AreasOfInterest } from './components/AreasOfInterest';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    // Large Pink Outer Canvas/Background (#EFA6C5)
    <div className="min-h-screen bg-[#EFA6C5] p-2.5 sm:p-5 lg:p-7 xl:p-9 selection:bg-[#F35A9D] selection:text-white transition-all">
      
      {/* Floating Main Dark Website Surface (#171719) with Sophisticated Rounded Frame */}
      <div className="w-full max-w-[1480px] mx-auto bg-[#171719] text-[#F8F4F7] rounded-2xl sm:rounded-3xl lg:rounded-[36px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.45)] overflow-hidden border border-black/20 relative">
        
        {/* Navigation Bar inside the Dark Canvas */}
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        {/* Main Sections */}
        <main>
          {/* 1. Hero: Editorial Serif Layout with Pink Marbled Panel */}
          <Hero onOpenResume={() => setResumeOpen(true)} />

          {/* 2. About Me: "A Little About Me" in Dark Content Cards */}
          <About />

          {/* 3. Skills: "Technologies I Work With" in Creative Service Cards */}
          <TechnicalSkills />

          {/* 4. Projects: "Selected Projects & Experiments" Asymmetrical Masonry Grid */}
          <Projects />

          {/* 5. Experience and Education: "My Journey" */}
          <ExperienceEducation />

          {/* 6. Personal Interests & Personal Statement Area */}
          <AreasOfInterest />

          {/* 7. Contact: "Have an Interesting Idea in Mind?" */}
          <Contact />
        </main>

        {/* 8. Minimalist Footer */}
        <Footer />

      </div>

      {/* In-Browser Interactive Resume Viewer & Print Support */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
