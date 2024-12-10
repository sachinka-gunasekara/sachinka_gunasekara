import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import profile from '../images/profileX.svg'
import logo from '../images/logo.svg'
import linkedin from '../images/linkedin.svg'
import behance from '../images/behance.svg'
import github from '../images/github.svg'
import About from './About';
import Projects from './Projects';
import Contact from './Footer';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

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
  "SOFTWARE ENGINEER(FRONT)",
];


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="bg-neutral-900 bg-gradient-to-r from-neutral-900 to-slate-700">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={logo}
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-port-yellow" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} onClick={() => scrollToSection(item.href.substring(1))} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src={logo}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white sm:text-black hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-6xl pt-10">
          <div className="text-center flex justify-evenly flex-col items-center mb-10">
            <div className='size-80 flex justify-center rounded-full'>
              <img
                  className="rounded-full"
                  src={profile}
                  alt=""
                />
            </div>

            <div>
              <div className=''>

               <div className="text-port-yellow uppercase	text-5xl sm:text-4xl mt-2 mb-4 font-bold">
                  <span className="block animate-text-slide text-center leading-tight">
                    {texts[currentIndex]}
                  </span>
                </div>


                {/* <h1 className='text-port-yellow uppercase	text-5xl sm:text-4xl mt-2 mb-4 font-bold'>designer & developer</h1> */}
                <h3 className='text-xl text-white mb-4'>Hello, I' m</h3>
                <h1 className='text-5xl sm:text-4xl text-white mb-5'>Sachinka Gunasekara</h1>
              </div>

              <div className='flex gap-10 justify-center'>
              <a href="https://drive.google.com/file/d/1e_MDJ3ofsh_ZLMTa9cBLjGKsIlQDAepN/view?usp=sharing" target="_blank">
                <button className='px-6 py-2 text-black rounded-full transition ease-in-out delay-150 bg-port-yellow hover:-translate-y-1 hover:scale-105 hover:bg-port-hover duration-300 ...'>Download CV</button>
                </a>

                <a href="#contact">
                <button href="#contact" className='px-6 py-2 text-port-yellow border-2 rounded-full transition ease-in-out delay-150 hover:text-port-hover border-port-yellow hover:-translate-y-1 hover:scale-105 hover:border-port-hover duration-300 ...'>Contact Info</button>
              </a>
              </div>

              <div className='flex justify-center gap-8 mt-5'>
                <img
                    className="size-8 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                    src={linkedin}
                    alt=""
                    onClick={() => { window.open('https://www.linkedin.com/in/sachinka-gunasekara/', '_blank'); }}
                  />
                  <img
                    className="size-8 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                    src={github}
                    alt=""
                    onClick={() => { window.open('https://github.com/sachinka-gunasekara', '_blank'); }}
                  />
                  <img
                    className="size-8 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                    src={behance}
                    alt=""
                    onClick={() => { window.open('https://www.behance.net/sachinkgunasek', '_blank'); }}
                  />
              </div>
            </div>

          </div>

          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  )
}
