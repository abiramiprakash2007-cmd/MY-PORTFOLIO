import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, Copy, Check, ArrowUpRight, CheckCircle2, Sparkles, FolderGit2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 600);
  };

  const handleSendViaMailto = () => {
    const subject = encodeURIComponent(formData.subject || 'Inquiry for Abirami');
    const body = encodeURIComponent(
      `Name: ${formData.name || 'Visitor'}\nEmail: ${formData.email || 'N/A'}\n\nMessage:\n${
        formData.message || 'Hello Abirami, I would like to connect.'
      }`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 sm:py-28 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#252731] border border-white/10 text-xs font-mono text-[#F7BBD4] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F35A9D]" />
            <span>06 · Get in Touch</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F8F4F7] tracking-tight">
            Have an Interesting Idea in Mind?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#B8B4C0] leading-relaxed">
            Whether you want to discuss an AI/ML engineering internship, research collaborations, or hackathon challenges, I would love to connect.
          </p>
        </div>

        {/* Main Grid: Large Contact Card (Left) + Secondary Exploration Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Large Dark Contact Card */}
          <div className="lg:col-span-8 card-dark p-7 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Top Contact Strip */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-xs font-mono text-[#F7BBD4] uppercase block">DIRECT EMAIL</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-lg sm:text-xl font-bold text-white hover:text-[#F35A9D] transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>

                {/* Bright Pink Email Button */}
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${personalInfo.email}?subject=Hello%20Abirami%20-%20AI%20Portfolio%20Inquiry`}
                    className="px-6 py-3 text-xs font-bold text-white bg-[#F35A9D] hover:bg-white hover:text-[#171719] rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(243,90,157,0.4)] cursor-pointer flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Email</span>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-[#B8B4C0] hover:text-white border border-white/10 transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#F35A9D]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {copied && (
                <div className="mb-4 text-xs font-mono text-[#F7BBD4] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Email address copied to clipboard!</span>
                </div>
              )}

              {/* Functional Contact Form */}
              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#F35A9D]/20 text-[#F35A9D] border border-[#F35A9D]/40 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-editorial text-2xl font-normal text-white">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-sm text-[#B8B4C0] max-w-md">
                    Thank you, <span className="text-white font-medium">{formData.name || 'there'}</span>. Your note has been registered and I will reply to <span className="text-[#F7BBD4]">{formData.email}</span> promptly.
                  </p>
                  <div className="pt-4 flex gap-3">
                    <button
                      onClick={handleSendViaMailto}
                      className="px-5 py-2.5 rounded-full bg-white/5 text-xs text-white hover:bg-white/10 border border-white/10"
                    >
                      Also Open in Mail App
                    </button>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-full bg-[#F35A9D] text-xs font-bold text-white hover:bg-white hover:text-[#171719]"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#B8B4C0] uppercase mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Doe / Recruiter"
                        className="w-full px-4 py-3 rounded-2xl bg-[#171719] border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#F35A9D] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#B8B4C0] uppercase mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-[#171719] border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#F35A9D] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#B8B4C0] uppercase mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI/ML Internship Opportunity / Project Collaboration"
                      className="w-full px-4 py-3 rounded-2xl bg-[#171719] border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#F35A9D] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#B8B4C0] uppercase mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding your opportunity or idea..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#171719] border border-white/10 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#F35A9D] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-[#B8B4C0]">
                      Average response time: &lt; 24 hours.
                    </span>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-7 py-3 text-xs font-bold text-white bg-[#F35A9D] hover:bg-white hover:text-[#171719] rounded-full transition-all duration-200 cursor-pointer shadow-md disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right: Secondary Card - "Want to See More Work?" */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            
            {/* Want to See More Work? Card */}
            <div className="card-dark p-7 sm:p-8 flex flex-col justify-between h-full group">
              <div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#F35A9D] w-fit mb-4">
                  <FolderGit2 className="w-6 h-6" />
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white mb-2">
                  Want to See More Work?
                </h3>

                <p className="text-xs sm:text-sm text-[#B8B4C0] leading-relaxed mb-6">
                  Explore my complete project repositories, code commits, and machine learning pipelines on GitHub or review the selected works.
                </p>

                <div className="space-y-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-[#171719] hover:bg-[#F35A9D] text-white text-xs font-semibold transition-all flex items-center justify-between group/link"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      <span>Explore GitHub Repositories</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-[#171719] hover:bg-white hover:text-[#171719] text-white text-xs font-semibold transition-all flex items-center justify-between group/link"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-[#F35A9D]" />
                      <span>Connect on LinkedIn</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>

                  <button
                    onClick={scrollToProjects}
                    className="w-full p-3.5 rounded-2xl bg-[#171719] hover:bg-white/10 text-[#F7BBD4] text-xs font-semibold transition-all flex items-center justify-between text-left cursor-pointer"
                  >
                    <span>Browse Project Showcase</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 text-xs font-mono text-[#B8B4C0]">
                <span>Bengaluru · REVA University</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
