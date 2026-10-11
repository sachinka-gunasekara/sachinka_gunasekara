import React from 'react';
import github from '../images/github-svgrepo-com.svg';
import git from '../images/gitlab-svgrepo-com.svg';
import react from '../images/react-svgrepo-com.svg';
import html from '../images/html-5-svgrepo-com.svg';
import css from '../images/css-3-svgrepo-com.svg';
import javascript from '../images/javascript-logo-svgrepo-com.svg';
import figma from '../images/figma-svgrepo-com.svg';
import firebase from '../images/firebase-svgrepo-com.svg';
import docker from '../images/docker-svgrepo-com.svg';
import bootstrap from '../images/bootstrap-svgrepo-com.svg';
import vue from '../images/vue-svgrepo-com.svg';
import xd from '../images/adobe-xd-svgrepo-com.svg';
import tailwind from '../images/tailwind-svgrepo-com.svg';
import mui from '../images/material-ui-svgrepo-com.svg';
import mysql from '../images/mysql-logo-svgrepo-com.svg';

const techSkills = [
  { name: 'React', icon: react },
  { name: 'Vue.js', icon: vue },
  { name: 'JavaScript', icon: javascript },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'Bootstrap', icon: bootstrap },
  { name: 'Material UI', icon: mui },
  { name: 'HTML5', icon: html },
  { name: 'CSS3', icon: css },
  { name: 'Figma', icon: figma },
  { name: 'Adobe XD', icon: xd },
  { name: 'GitLab', icon: git },
  { name: 'GitHub', icon: github },
  { name: 'Docker', icon: docker },
  { name: 'Firebase', icon: firebase },
  { name: 'MySQL', icon: mysql },
];

export default function About() {
  return (
    <div className="relative isolate py-12">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300 mb-3 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>Background & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            About Me
          </h2>
        </div>

        {/* Narrative Glass Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 shadow-glass-md relative overflow-hidden mb-12">
          {/* Subtle top edge specular reflection */}
          <div 
            aria-hidden="true" 
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Bio text */}
            <div className="lg:col-span-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Welcome to my portfolio! I'm dedicated to crafting user experiences that seamlessly merge design and engineering, aiming for both aesthetic appeal and practical functionality.
              </p>
              <p>
                My educational background includes graduating from the <span className="text-white font-medium">University of Colombo School of Computing (UCSC)</span>, where I delved into UI/UX engineering and frontend design. During my time at UCSC, I immersed myself in understanding user needs and mastering the art of translating insights into intuitive, high-performance interfaces.
              </p>
              <p>
                My journey has endowed me with a robust skill set, blending technical prowess with design principles to deliver impactful digital experiences.
              </p>
            </div>

            {/* Quick Pillars */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
                <div>
                  <div className="text-xs font-semibold text-white">UI/UX Design</div>
                  <div className="text-[11px] text-slate-400">Human-centered interfaces</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
                <div>
                  <div className="text-xs font-semibold text-white">Frontend Dev</div>
                  <div className="text-[11px] text-slate-400">React, Vue, Tailwind CSS</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(139,92,246,0.8)]"></span>
                <div>
                  <div className="text-xs font-semibold text-white">UCSC Graduate</div>
                  <div className="text-[11px] text-slate-400">Computing & Engineering</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies & Toolkit Grid */}
        <div>
          <div className="text-center mb-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Technologies & Tools
            </h3>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-3 sm:gap-4">
            {techSkills.map((tech) => (
              <div
                key={tech.name}
                className="glass-card p-3 sm:p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-200 group cursor-default shadow-glass-sm"
              >
                <img
                  className="size-8 sm:size-10 group-hover:scale-110 transition-transform"
                  src={tech.icon}
                  alt={tech.name}
                />
                <span className="text-[11px] sm:text-xs font-medium text-slate-300 group-hover:text-white transition-colors text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
