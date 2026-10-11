import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ArrowDownTrayIcon, 
  EnvelopeIcon, 
  CodeBracketIcon, 
  SparklesIcon, 
  GlobeAltIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import logo from '../images/logo.svg';
import linkedin from '../images/linkedin.svg';
import behance from '../images/behance.svg';
import github from '../images/github.svg';
import About from './About';
import Projects from './Projects';
import Contact from './Footer';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const texts = [
  "UI/UX ENGINEER",
  "UI/UX DESIGNER",
  "FRONTEND DEVELOPER",
  "SOFTWARE ENGINEER (FRONT)",
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-navy-950 text-slate-100 min-h-screen relative overflow-hidden selection:bg-accent selection:text-navy-950">
      
      {/* Ambient background lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 right-1/4 w-[500px] h-[500px] ambient-glow-cyan -z-10"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -left-24 w-[480px] h-[480px] ambient-glow-violet -z-10"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-2/3 right-10 w-[450px] h-[450px] ambient-glow-blue -z-10"
      />

      {/* Floating Translucent Glass Header */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 transition-all duration-300">
        <nav 
          className={`mx-auto max-w-5xl rounded-full px-5 py-2.5 flex items-center justify-between border transition-all duration-300 shadow-glass-md ${
            isScrolled
              ? 'bg-navy-900/85 backdrop-blur-xl border-white/15 shadow-glass-lg'
              : 'bg-navy-900/60 backdrop-blur-md border-white/10'
          }`}
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2 group">
              <img
                className="h-8 w-auto group-hover:scale-105 transition-transform"
                src={logo}
                alt="Sachinka Gunasekara"
              />
              <span className="hidden sm:inline-block font-semibold text-white tracking-tight text-sm">
                Sachinka <span className="text-cyan-300 font-mono text-xs">/ Portfolio</span>
              </span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open main menu"
            >
              <Bars3Icon className="h-6 w-6 text-cyan-300" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] px-3 py-1 rounded-full border border-white/5">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.substring(1));
                }}
                className="px-4 py-1 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Let's Talk CTA button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15 hover:border-cyan-400/40 transition-all shadow-glass-sm group cursor-pointer"
            >
              <span>Get in Touch</span>
              <span className="text-cyan-300 group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dialog */}
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-sm" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-navy-900/95 backdrop-blur-2xl px-6 py-6 sm:max-w-sm border-l border-white/10 shadow-glass-lg">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <a href="/" className="flex items-center gap-2">
                <img
                  className="h-8 w-auto"
                  src={logo}
                  alt="Sachinka Gunasekara"
                />
                <span className="font-semibold text-white text-sm">Sachinka G.</span>
              </a>
              <button
                type="button"
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      scrollToSection(item.href.substring(1));
                    }}
                    className="block rounded-xl px-4 py-2.5 text-base font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* Modern Two-Column Hero Section (No Personal Photo) */}
      <div className="relative isolate px-6 pt-36 sm:pt-40 pb-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Typography, Dynamic Role, and CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 text-xs font-medium text-white shadow-glass-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]"></span>
                </span>
                <span className="text-slate-300 font-normal">Available for select projects</span>
              </div>

              {/* Dynamic Role Pill */}
              <div className="mb-4">
                <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 font-mono text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                  {texts[currentIndex]}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.15] mb-5">
                Designing intuitive interfaces,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 underline decoration-cyan-400/40 decoration-2 underline-offset-8">
                  building seamless experiences.
                </span>
              </h1>

              {/* Description */}
              <p className="text-base text-slate-300 leading-relaxed max-w-xl mb-8">
                I'm <span className="text-white font-medium">Sachinka Gunasekara</span>, a UI/UX Engineer and Frontend Developer graduating from the University of Colombo School of Computing (UCSC). I bridge thoughtful design systems with clean, production-ready code.
              </p>

              {/* Action Buttons Pair */}
              <div className="flex flex-wrap gap-4 items-center mb-8 w-full sm:w-auto">
                <a 
                  href="https://drive.google.com/file/d/1e_MDJ3ofsh_ZLMTa9cBLjGKsIlQDAepN/view?usp=sharing" 
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:via-sky-400 hover:to-blue-500 font-semibold text-sm active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(14,165,233,0.45)] border border-cyan-300/30 cursor-pointer"
                  style={{ color: '#ffffff' }}
                >
                  <ArrowDownTrayIcon className="w-4 h-4" style={{ color: '#ffffff' }} />
                  <span style={{ color: '#ffffff' }}>Download CV</span>
                </a>

                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/15 font-medium text-sm hover:bg-white/[0.12] hover:border-white/25 active:scale-[0.98] transition-all shadow-glass-sm cursor-pointer"
                  style={{ color: '#ffffff' }}
                >
                  <EnvelopeIcon className="w-4 h-4 text-cyan-300" />
                  <span style={{ color: '#ffffff' }}>Contact Info</span>
                </button>
              </div>

              {/* Supporting Detail & Social Channels */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <GlobeAltIcon className="w-4 h-4 text-cyan-300" />
                  <span>Based in Sri Lanka &bull; Available Worldwide</span>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/40 transition-all cursor-pointer shadow-glass-sm"
                    onClick={() => { window.open('https://www.linkedin.com/in/sachinka-gunasekara/', '_blank'); }}
                    title="LinkedIn"
                  >
                    <img className="size-4" src={linkedin} alt="LinkedIn" />
                  </div>
                  <div
                    className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/40 transition-all cursor-pointer shadow-glass-sm"
                    onClick={() => { window.open('https://github.com/sachinka-gunasekara', '_blank'); }}
                    title="GitHub"
                  >
                    <img className="size-4" src={github} alt="GitHub" />
                  </div>
                  <div
                    className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/40 transition-all cursor-pointer shadow-glass-sm"
                    onClick={() => { window.open('https://www.behance.net/sachinkgunasek', '_blank'); }}
                    title="Behance"
                  >
                    <img className="size-4" src={behance} alt="Behance" />
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Modern Frosted-Glass Engineering & Design Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Outer Glass Card */}
                <div className="glass-card rounded-3xl p-6 sm:p-7 shadow-glass-lg relative overflow-hidden border border-white/15">
                  
                  {/* Specular top edge highlight */}
                  <div 
                    aria-hidden="true" 
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" 
                  />

                  {/* Window bar */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 inline-block" />
                    </div>
                    <span className="text-[11px] text-slate-400">sachinka.engineer.ts</span>
                    <CodeBracketIcon className="w-3.5 h-3.5 text-slate-400" />
                  </div>

                  {/* Monogram Identity Header */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="relative w-12 h-12 rounded-2xl bg-navy-900 border border-cyan-400/30 text-white flex items-center justify-center font-mono font-bold text-base shadow-glass-sm">
                      <span className="text-cyan-300">SG</span>
                      <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-base tracking-tight">Sachinka Gunasekara</h3>
                      <p className="text-xs text-slate-400 font-mono">UI/UX & Frontend Engineer</p>
                    </div>
                  </div>

                  {/* Interactive Code Architecture Terminal Sub-Card */}
                  <div className="bg-navy-950/80 rounded-2xl p-4 border border-white/10 text-xs font-mono space-y-1.5 mb-5 shadow-inner">
                    <div className="text-slate-400 text-[11px] pb-1 border-b border-white/5 flex items-center justify-between">
                      <span className="text-cyan-300 flex items-center gap-1">
                        <SparklesIcon className="w-3 h-3" /> core-ethos.ts
                      </span>
                      <span className="text-[10px] text-slate-400">UCSC '24</span>
                    </div>
                    <div className="text-slate-300 text-[11px] leading-relaxed pt-1 space-y-1">
                      <p><span className="text-purple-400">const</span> engineer = &#123;</p>
                      <p className="pl-3 text-cyan-300">almaMater: <span className="text-emerald-300">'UCSC Colombo'</span>,</p>
                      <p className="pl-3 text-cyan-300">focus: <span className="text-emerald-300">'Design Systems & UI'</span>,</p>
                      <p className="pl-3 text-cyan-300">frontend: <span className="text-emerald-300">'React · Next.js · Tailwind'</span></p>
                      <p>&#125;;</p>
                    </div>
                  </div>

                  {/* Two Mini Trust Badges */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
                      <CheckCircleIcon className="w-4 h-4 text-cyan-300 shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-white">11+ Projects</div>
                        <div className="text-[10px] text-slate-400">Web & Mobile</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
                      <SparklesIcon className="w-4 h-4 text-cyan-300 shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-white">Design & Code</div>
                        <div className="text-[10px] text-slate-400">Figma to React</div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Floating Detail Pill */}
                <div className="absolute -bottom-3 -left-3 sm:left-4 glass-pill px-3 py-1.5 rounded-xl shadow-glass-md flex items-center gap-2 text-xs font-medium text-white">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(56,189,248,0.7)]" />
                  <span>Human-Centered UI/UX</span>
                </div>

              </div>
            </div>

          </div>

          {/* Section Dividers & Page Sections */}
          <section id="about" className="pt-20">
            <About />
          </section>

          <section id="projects" className="pt-20">
            <Projects />
          </section>

          <section id="contact" className="pt-20 pb-12">
            <Contact />
          </section>

        </div>
      </div>
    </div>
  );
}
