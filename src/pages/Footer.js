import React, { useState } from 'react';
import emailIcon from '../images/email-svgrepo-com.svg';
import whatsappIcon from '../images/whatsapp-svgrepo-com.svg';
import arrow from '../images/arrow-square-up-svgrepo-com.svg';
import linkedin from '../images/linkedin.svg';
import behance from '../images/behance.svg';
import github from '../images/github.svg';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sachinka.gunasekara@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="relative isolate py-12">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300 mb-3 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3">
            Let's Build Something Together
          </h2>
          <p className="text-sm text-slate-400 max-w-lg mx-auto">
            Feel free to reach out with any projects, opportunities, or questions. I'm always open to discussing new ideas.
          </p>
        </div>

        {/* Contact Glass Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 shadow-glass-md relative overflow-hidden mb-12">
          {/* Top edge glow */}
          <div 
            aria-hidden="true" 
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" 
          />

          <div className="flex flex-col items-center gap-6">
            
            {/* Direct Contact Buttons Row */}
            <div className="flex flex-wrap justify-center gap-4 w-full">
              {/* Email Pill */}
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-cyan-400/40 transition-all shadow-glass-sm group">
                <img className="size-5 shrink-0" src={emailIcon} alt="Email" />
                <a 
                  href="mailto:sachinka.gunasekara@gmail.com" 
                  className="text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition-colors"
                >
                  sachinka.gunasekara@gmail.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-cyan-300 transition-colors cursor-pointer ml-1"
                  title="Copy email"
                >
                  {copiedEmail ? 'Copied! ✓' : 'Copy'}
                </button>
              </div>

              {/* WhatsApp Pill */}
              <a
                href="https://wa.me/94705174944"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-cyan-400/40 transition-all shadow-glass-sm group cursor-pointer"
              >
                <img className="size-5 shrink-0" src={whatsappIcon} alt="WhatsApp" />
                <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                  +94 70 517 4944
                </span>
                <span className="text-xs text-cyan-300 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full justify-center">
              <div
                className="p-3 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 transition-all duration-200 cursor-pointer hover:-translate-y-1 shadow-glass-sm"
                onClick={() => { window.open('https://www.linkedin.com/in/sachinka-gunasekara/', '_blank'); }}
                title="LinkedIn Profile"
              >
                <img className="size-5" src={linkedin} alt="LinkedIn" />
              </div>

              <div
                className="p-3 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 transition-all duration-200 cursor-pointer hover:-translate-y-1 shadow-glass-sm"
                onClick={() => { window.open('https://github.com/sachinka-gunasekara', '_blank'); }}
                title="GitHub Profile"
              >
                <img className="size-5" src={github} alt="GitHub" />
              </div>

              <div
                className="p-3 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 transition-all duration-200 cursor-pointer hover:-translate-y-1 shadow-glass-sm"
                onClick={() => { window.open('https://www.behance.net/sachinkgunasek', '_blank'); }}
                title="Behance Profile"
              >
                <img className="size-5" src={behance} alt="Behance" />
              </div>
            </div>

            {/* Short Closing Note */}
            <p className="text-xs sm:text-sm text-slate-400 text-center max-w-xl leading-relaxed pt-2">
              Thank you for exploring my portfolio! Let's connect and bring your next digital product or interface to life.
            </p>

          </div>
        </div>

        {/* Floating Back to Top Button */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-navy-900/80 backdrop-blur-xl border border-white/15 text-white hover:border-cyan-400/50 hover:bg-white/10 transition-all shadow-glass-md hover:-translate-y-1 cursor-pointer group"
          aria-label="Back to top"
          title="Back to top"
        >
          <img
            className="size-6 group-hover:-translate-y-0.5 transition-transform"
            src={arrow}
            alt="Scroll to top"
          />
        </button>

        {/* Minimal Footer Line */}
        <div className="text-center text-xs text-slate-500 font-mono">
          &copy; {currentYear} &bull; Designed & Developed by Sachinka Gunasekara
        </div>

      </div>
    </div>
  );
}
