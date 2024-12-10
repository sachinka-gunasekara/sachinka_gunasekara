import React from 'react';
import github from '../images/github-svgrepo-com.svg'
import behance from '../images/behance-svgrepo-com.svg'
import web from '../images/world-svgrepo-com.svg'
import coffee from '../images/coffee.svg'
import leafylove from '../images/leafylove.svg'
import italian from '../images/italian.svg'
import guru from '../images/guru.svg'
import slahandyfix from '../images/slhandyfix.svg'
import portfolio from '../images/portfolio.svg'
import fitbot from '../images/fitbot.svg'
import dubai from '../images/dubai.svg'
import eatme from '../images/eat.svg'
import companyweb from '../images/company_web.svg'
import smarthome from '../images/smarthome.svg'

export default function Home() {

  return (
      <div className="relative isolate px-6 pt-14 sm:pt-0 lg:px-8">
          <div className='text-port-yellow uppercase text-4xl font-semibold sm:text-center pb-10'>
            Projects
          </div>

          <div className='flex justify-between gap-5 flex-wrap sm:flex-col mb-5'>
            
              <div className="flex-1 bg-port-opyellow rounded-xl transition ease-in-out delay-75 hover:scale-105">
                <div className='aspect-auto'>
                    <img
                      className="mt-5 mb-10 mx-auto px-5"
                      src={companyweb}
                      alt="Customer web"
                    />
                </div>
                <div className='text-white text-2xl text-center m-5 my-2'>Company Website</div>
                <div className='text-port-yellow text-sm text-center m-5 my-0'>Development</div>
                <div className='text-white text-sm text-justify m-5 line-clamp-3'>A cutting-edge company specializing in software development with a focus on seamlessly integrating hardware with IoT platforms.</div>
                <div className='text-white text-sm text-center m-5 my-2'>Technologies: NextJS, Tailwind CSS</div>
            
                <div className='flex gap-10 justify-center items-center m-5'>
                    <img
                      className="size-8 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                      src={github}
                      alt=""
                      onClick={() => { window.open('https://github.com/sachinka-gunasekara/circuitup', '_blank'); }}
                    />
                     <img
                      className="size-7 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                      src={web}
                      alt=""
                      onClick={() => { window.open('https://circuitup.vercel.app/', '_blank'); }}
                    />
                </div>
              </div>

              <div className="flex-1 bg-port-opyellow rounded-xl transition ease-in-out delay-75 hover:scale-105">
                <div className='aspect-auto'>
                    <img
                      className="mt-5 mb-10 mx-auto px-5"
                      src={smarthome}
                      alt="smarthome"
                    />
                </div>
                <div className='text-white text-2xl text-center m-5 my-2'>Smart Home Application</div>
                <div className='text-port-yellow text-sm text-center m-5 my-0'>UI/UX</div>
                <div className='text-white text-sm text-justify m-5 line-clamp-3'>A sleek and intuitive UI design for a Smart Home application that empowers users to effortlessly control and monitor their connected devices.</div>
               
            
                <div className='flex gap-10 justify-center items-center m-5'>
                    <img
                      className="size-8 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                      src={behance}
                      alt=""
                      onClick={() => { window.open('https://www.behance.net/gallery/213497159/Smart-Home-Application', '_blank'); }}
                    />
                </div>
              </div>

              <div className="flex-1 bg-port-opyellow rounded-xl transition ease-in-out delay-75 hover:scale-105">
                <div className='aspect-auto'>
                    <img
                      className="mt-5 mb-10 mx-auto px-5"
                      src={portfolio}
                      alt="Portfolio"
                    />
                </div>
                <div className='text-white text-2xl text-center m-5 my-2'>Portfolio Website</div>
                <div className='text-port-yellow text-sm text-center m-5 my-0'>UI/UX, Development</div>
                <div className='text-white text-sm text-justify m-5 line-clamp-3'>A portfolio website, from dynamic React components to polished designs with Tailwind CSS</div>
                <div className='text-white text-sm text-center m-5 my-2'>Technologies: ReactJS, Tailwind CSS</div>
            
                <div className='flex gap-10 justify-center items-center m-5'>
                    <img
                      className="size-8 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                      src={github}
                      alt=""
                      onClick={() => { window.open('https://github.com/sachinka-gunasekara/sachinka_gunasekara', '_blank'); }}
                    />
                     <img
                      className="size-7 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                      src={web}
                      alt=""
                      onClick={() => { window.open('https://sachinkagunasekara-sachinka-gunasekaras-projects.vercel.app/', '_blank'); }}
                    />
                </div>
              </div>
                
          </div>

          <div className='flex justify-between gap-5 flex-wrap sm:flex-col mb-5'>
          <div className="flex-1 bg-port-opyellow rounded-xl transition ease-in-out delay-75 hover:scale-105">
                <img
                      className="mt-5 mb-10 mx-auto px-5"
                      src={slahandyfix}
                      alt="SLHandyFix"
                    />

              <div className='text-white text-2xl text-center m-5 my-2'>SLHandyFix</div>
                <div className='text-port-yellow text-sm text-center m-5 my-0'>UI/UX, Development, Group Project</div>
                <div className='text-white text-sm text-justify m-5 line-clamp-3'>A platform to connect service providers and customers under one roof for facilitating their needs</div>
                <div className='text-white text-sm text-center m-5 my-2'>Technologies: React, React Native, NodeJS, Express, MySQL</div>
            
                <div className='flex gap-10 justify-center m-5'>
                    <img
                      className="size-8 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                      src={github}
                      alt=""
                      onClick={() => { window.open('https://github.com/RAVINDULM/SLHandyFixMobile', '_blank'); }}
                    />
                </div>
              </div>

              <div className="flex-1 bg-port-opyellow rounded-xl transition ease-in-out delay-75 hover:scale-105">
                  <img
                    className="mt-5 mb-10 mx-auto px-5"
                    src={fitbot}
                    alt="FitBot"
                  />

                  <div className='text-white text-2xl text-center m-5 my-2'>FitBot</div>
                  <div className='text-port-yellow text-sm text-center m-5 my-0'>UI/UX, Development, Group Project</div>
                  <div className='text-white text-sm text-justify m-5 line-clamp-3 h-[60px]'>A platform that could be used by the Gym management to manage their members</div>
                  <div className='text-white text-sm text-center m-5 my-2'>Technologies: HTML5, CSS, Javascript, Java, MySQL</div>
              
                  <div className='flex gap-10 justify-center m-5'>
                      <img
                        className="size-8 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                        src={github}
                        alt=""
                        onClick={() => { window.open('https://github.com/FITBOT-Gym-Management-System/Fitbot', '_blank'); }}
                      />
                  </div>
                </div>
            
            <div className="flex-1 bg-port-opyellow rounded-xl transition ease-in-out delay-75 hover:scale-105">
                  <img
                    className="mt-5 mb-10 mx-auto px-5"
                    src={guru}
                    alt="Guru"
                  />
  
                  <div className='text-white text-2xl text-center m-5 my-2'>Guru</div>
                  <div className='text-port-yellow text-sm text-center m-5 my-0'>UI/UX, Team Work</div>
                  <div className='text-white text-sm text-justify m-5 line-clamp-3'>An online learning platform, where students can learn with resources and educators provide resources </div>
              
                  <div className='flex gap-10 justify-center m-5'>
                      <img
                        className="size-8 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                        src={behance}
                        alt=""
                        onClick={() => { window.open('https://www.behance.net/gallery/147823051/GURU-Online-Learning-Platform', '_blank'); }}
                      />
                  </div>
                </div>
  
            </div>

          <div className='flex justify-between gap-5 flex-wrap sm:flex-col mb-5'>
            
          <div className="flex-1 bg-port-opyellow rounded-xl transition ease-in-out delay-75 hover:scale-105">
                <img
                  className="mt-5 mb-10 mx-auto px-5"
                  src={dubai}
                  alt="Travel Website"
                />

                <div className='text-white text-2xl text-center m-5 my-2'>Dubai Travel Website</div>
                <div className='text-port-yellow text-sm text-center m-5 my-0'>UI/UX</div>
                <div className='text-white text-sm text-justify m-5 line-clamp-3 h-[60px]'>A landing page for a Dubai travel website, showcasing attractions and tours</div>
            
                <div className='flex gap-10 justify-center m-5'>
                    <img
                      className="size-8 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                      src={behance}
                      alt=""
                      onClick={() => { window.open('https://www.behance.net/gallery/190319241/Dubai-Travel-Website', '_blank'); }}
                    />
                </div>
              </div>

            <div className="flex-1 bg-port-opyellow rounded-xl transition ease-in-out delay-75 hover:scale-105">
              <div className='aspect-auto'>
                  <img
                    className="mt-5 mb-10 mx-auto px-5 5"
                    src={leafylove}
                    alt="LeafyLove"
                  />
              </div>
              <div className='text-white text-2xl text-center m-5 my-2'>LeafyLove</div>
              <div className='text-port-yellow text-sm text-center m-5 my-0'>UI/UX</div>
              <div className='text-white text-sm text-justify m-5 line-clamp-3 h-[60px]'>Mobile interfaces for a plant care app with watering reminders and plant health tips</div>
          
              <div className='flex gap-10 justify-center m-5'>
                  <img
                    className="size-8 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                    src={behance}
                    alt=""
                    onClick={() => { window.open('https://www.behance.net/gallery/191452447/LeafyLove', '_blank'); }}
                  />
              </div>
            </div>
          

            <div className="flex-1 bg-port-opyellow rounded-xl transition ease-in-out delay-75 hover:scale-105">
            <img
                  className="mt-5 mb-10 mx-auto px-5"
                  src={coffee}
                  alt="coffeenook"
                />

                <div className='text-white text-2xl text-center m-5 my-2'>CoffeeNook</div>
                <div className='text-port-yellow text-sm text-center m-5 my-0'>UI/UX</div>
                <div className='text-white text-sm text-justify m-5 line-clamp-3'>A web design for a gourmet coffee shop, focusing on product showcase and online ordering</div>
            
                <div className='flex gap-10 justify-center m-5'>
                    <img
                      className="size-8 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                      src={behance}
                      alt=""
                      onClick={() => { window.open('https://www.behance.net/gallery/192593643/Gourmet-coffee-shop', '_blank'); }}
                    />
                </div>
            </div>
          </div>

              <div className='flex justify-between gap-5 flex-wrap sm:flex-col mb-5'>

              <div className="flex-1 bg-port-opyellow rounded-xl transition ease-in-out delay-75 hover:scale-105">
                <img
                  className="mt-5 mb-10 mx-auto px-5"
                  src={eatme}
                  alt="Eat me"
                />

                <div className='text-white text-2xl text-center m-5 my-2'>Eat me</div>
                <div className='text-port-yellow text-sm text-center m-5 my-0'>UI/UX, Development</div>
                <div className='text-white text-sm text-justify m-5 line-clamp-3'>A web design local restaurant where Design Meets Dining Delight! , focusing on product showcase</div>
            
                <div className='flex gap-10 justify-center items-center m-5'>
                    <img
                      className="size-8 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                      src={github}
                      alt=""
                      onClick={() => { window.open('https://github.com/sachinka-gunasekara/eatme', '_blank'); }}
                    />
                    <img
                      className="size-8 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                      src={behance}
                      alt=""
                      onClick={() => { window.open('https://www.behance.net/gallery/174493309/EAT-ME-Food-Ordering-Website', '_blank'); }}
                    />
                     <img
                      className="size-7 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                      src={web}
                      alt=""
                      onClick={() => { window.open('https://dashing-palmier-2a86de.netlify.app/', '_blank'); }}
                    />
                </div>
              </div>

              <div className="flex-1 bg-port-opyellow rounded-xl transition ease-in-out delay-75 hover:scale-105">
                <img
                  className="mt-5 mb-10 mx-auto px-5"
                  src={italian}
                  alt="Classic Italian"
                />

                <div className='text-white text-2xl text-center m-5 my-2'>Classic Italian</div>
                <div className='text-port-yellow text-sm text-center m-5 my-0'>UI/UX</div>
                <div className='text-white text-sm text-justify m-5 line-clamp-3 h-[60px]'>A web design for an italian classic restaurant, focusing on product showcase</div>
            
                <div className='flex gap-10 justify-center m-5'>
                    <img
                      className="size-8 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                      src={behance}
                      alt=""
                      onClick={() => { window.open('https://www.behance.net/gallery/198320201/Classic-Italian', '_blank'); }}
                    />
                </div>
              </div>
              
        </div>
      </div>
  )
}
