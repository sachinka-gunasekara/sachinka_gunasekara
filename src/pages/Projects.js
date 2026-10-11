import React, { useState } from 'react';
import github from '../images/github-svgrepo-com.svg';
import behance from '../images/behance-svgrepo-com.svg';
import web from '../images/world-svgrepo-com.svg';
import coffee from '../images/coffee.svg';
import leafylove from '../images/leafylove.svg';
import italian from '../images/italian.svg';
import guru from '../images/guru.svg';
import slahandyfix from '../images/slhandyfix.svg';
import portfolio from '../images/portfolio.svg';
import fitbot from '../images/fitbot.svg';
import dubai from '../images/dubai.svg';
import eatme from '../images/eat.svg';
import companyweb from '../images/company_web.svg';
import smarthome from '../images/smarthome.svg';
import devportfolio from '../images/devportfolio.svg';
import novaai from '../images/novaai.svg';

const projectList = [
  {
    title: 'Modern Developer Portfolio & Landing Page (React + Tailwind)',
    category: 'Development',
    description: 'High-performance developer portfolio landing page built with React 19, TypeScript, and Tailwind CSS. Features an immersive midnight navy glassmorphism aesthetic, custom interactive UI mockups, fluid responsive navigation, and accessible high-contrast typography.',
    technologies: 'React.js, Tailwind CSS, TypeScript',
    image: devportfolio,
    github: 'https://github.com/sachinka-gunasekara/webtemplate-portfolio.git',
    web: 'https://webtemplate-portfolio.vercel.app/',
  },
  {
    title: 'NOVA AI',
    category: 'Development',
    description: 'A premium, fully responsive SaaS landing page template for AI and tech startups. It has a bento-grid feature layout, glassmorphism styling, light/dark modes, and a live theme customizer.',
    technologies: 'HTML, CSS, JavaScript',
    image: novaai,
    github: 'https://github.com/liorasoftware69/nova-liorasoftware.git',
    web: 'https://sachinka-gunasekara.github.io/webtemplate1/',
  },
  {
    title: 'Company Website (CircuitUp)',
    category: 'Development',
    description: 'A cutting-edge company website for software and IoT integration, featuring dynamic hardware interactions.',
    technologies: 'Next.js, Tailwind CSS',
    image: companyweb,
    github: 'https://github.com/sachinka-gunasekara/circuitup',
    web: 'https://circuitup.vercel.app/',
  },
  {
    title: 'Smart Home Application',
    category: 'UI/UX Design',
    description: 'A sleek and intuitive UI design for a connected IoT smart home ecosystem allowing seamless device control.',
    technologies: 'Figma, Prototyping',
    image: smarthome,
    behance: 'https://www.behance.net/gallery/213497159/Smart-Home-Application',
  },
  {
    title: 'Personal Portfolio Website',
    category: 'UI/UX & Development',
    description: 'Modern developer portfolio with dynamic React components, type-safe architecture, and Tailwind CSS.',
    technologies: 'React.js, Tailwind CSS',
    image: portfolio,
    github: 'https://github.com/sachinka-gunasekara/sachinka_gunasekara',
    web: 'https://sachinkagunasekara-sachinka-gunasekaras-projects.vercel.app/',
  },
  {
    title: 'SLHandyFix',
    category: 'Development & UI/UX',
    description: 'A platform connecting verified service technicians and homeowners under one roof for seamless maintenance.',
    technologies: 'React, React Native, Node.js, Express, MySQL',
    image: slahandyfix,
    github: 'https://github.com/RAVINDULM/SLHandyFixMobile',
  },
  {
    title: 'FitBot Gym Management',
    category: 'Development & UI/UX',
    description: 'Comprehensive platform for fitness facilities to streamline member attendance, subscriptions, and routines.',
    technologies: 'HTML5, CSS3, JavaScript, Java, MySQL',
    image: fitbot,
    github: 'https://github.com/FITBOT-Gym-Management-System/Fitbot',
  },
  {
    title: 'Guru Learning Platform',
    category: 'UI/UX Design',
    description: 'An interactive online education portal designed for accessible distance learning and student collaboration.',
    technologies: 'Figma, User Research',
    image: guru,
    behance: 'https://www.behance.net/gallery/147823051/GURU-Online-Learning-Platform',
  },
  {
    title: 'Dubai Travel Experience',
    category: 'UI/UX Design',
    description: 'An immersive editorial landing page showcasing attractions, city guides, and luxury desert tours in Dubai.',
    technologies: 'Figma, Editorial UI',
    image: dubai,
    behance: 'https://www.behance.net/gallery/190319241/Dubai-Travel-Website',
  },
  {
    title: 'LeafyLove Plant Care',
    category: 'UI/UX Design',
    description: 'Mobile companion app with intelligent watering schedules, plant health diagnoses, and sunlight tips.',
    technologies: 'Mobile UI/UX, Figma',
    image: leafylove,
    behance: 'https://www.behance.net/gallery/191452447/LeafyLove',
  },
  {
    title: 'CoffeeNook',
    category: 'UI/UX Design',
    description: 'An artisanal coffee shop e-commerce interface emphasizing product story, roasting notes, and beans ordering.',
    technologies: 'E-commerce UI, Figma',
    image: coffee,
    behance: 'https://www.behance.net/gallery/192593643/Gourmet-coffee-shop',
  },
  {
    title: 'Eat Me Dining',
    category: 'UI/UX & Development',
    description: 'A vibrant local culinary experience where bespoke design meets seamless online table reservations and dining.',
    technologies: 'React, Tailwind CSS, Netlify',
    image: eatme,
    github: 'https://github.com/sachinka-gunasekara/eatme',
    behance: 'https://www.behance.net/gallery/174493309/EAT-ME-Food-Ordering-Website',
    web: 'https://dashing-palmier-2a86de.netlify.app/',
  },
  {
    title: 'Classic Italian',
    category: 'UI/UX Design',
    description: 'A rich culinary showcase for an authentic trattoria highlighting handcrafted pasta recipes and wine pairings.',
    technologies: 'Restaurant Branding, Figma',
    image: italian,
    behance: 'https://www.behance.net/gallery/198320201/Classic-Italian',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projectList.filter((proj) => {
    if (filter === 'All') return true;
    if (filter === 'Development') return proj.category.includes('Development');
    if (filter === 'UI/UX') return proj.category.includes('UI/UX');
    return true;
  });

  return (
    <div className="relative isolate py-12">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300 mb-3 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-6">
            Selected Projects
          </h2>

          {/* Filter Pills */}
          <div className="inline-flex p-1 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/10 shadow-glass-sm gap-1">
            {['All', 'Development', 'UI/UX'].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  filter === tab
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-[0_0_15px_rgba(14,165,233,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Glassmorphic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass-card rounded-3xl p-5 sm:p-6 shadow-glass-sm hover:shadow-glass-md hover:border-white/20 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Project Image Frame */}
                <div className="rounded-2xl overflow-hidden bg-navy-950/70 p-4 border border-white/5 mb-4 group-hover:border-cyan-400/30 transition-colors flex items-center justify-center min-h-[160px]">
                  <img
                    className="max-h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    src={project.image}
                    alt={project.title}
                  />
                </div>

                {/* Category Tag */}
                <div className="mb-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-[11px] font-mono">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badge */}
                <div className="pt-3 border-t border-white/10 mb-4">
                  <span className="text-[11px] font-mono text-slate-400 block truncate">
                    {project.technologies}
                  </span>
                </div>

                {/* Action Links in Frosted Glass Circles */}
                <div className="flex items-center gap-2.5 justify-end">
                  {project.github && (
                    <button
                      type="button"
                      onClick={() => window.open(project.github, '_blank')}
                      className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/40 transition-all duration-200 cursor-pointer shadow-glass-sm"
                      title="View GitHub Repository"
                      aria-label="GitHub"
                    >
                      <img className="size-4" src={github} alt="GitHub" />
                    </button>
                  )}

                  {project.behance && (
                    <button
                      type="button"
                      onClick={() => window.open(project.behance, '_blank')}
                      className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/40 transition-all duration-200 cursor-pointer shadow-glass-sm"
                      title="View Behance Project"
                      aria-label="Behance"
                    >
                      <img className="size-4" src={behance} alt="Behance" />
                    </button>
                  )}

                  {project.web && (
                    <button
                      type="button"
                      onClick={() => window.open(project.web, '_blank')}
                      className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/40 transition-all duration-200 cursor-pointer shadow-glass-sm"
                      title="Open Live Website"
                      aria-label="Live Website"
                    >
                      <img className="size-4" src={web} alt="Live Web" />
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
