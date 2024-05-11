import React from 'react';
import email from '../images/email-svgrepo-com.svg'
import whatsapp from '../images/whatsapp-svgrepo-com.svg'
import arrow from '../images/arrow-square-up-svgrepo-com.svg'
import linkedin from '../images/linkedin.svg'
import behance from '../images/behance.svg'
import github from '../images/github.svg'

export default function Home() {

  return (
      <div className="relative isolate px-6 pt-14 sm:pt-0 lg:px-8">
        <div className="mx-auto max-w-6xl py-8">
            <div className="absolute top-10 sm:top-0 left-0 right-0 border-b-2 border-port-yellow"></div> 

            <div className='text-port-yellow uppercase text-4xl font-semibold sm:text-center pb-10'>
                Contact Me
            </div>
          
          <div className='flex justify-center gap-5 py-2 sm:text-justify sm:flex-col xs:items-center sm:pl-0'>

                <div className='flex items-center w-fit px-6 py-2 text-port-yellow border-2 rounded-full border-port-yellow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ...'>
                    <img
                        className="size-5 mr-1"
                        src={email}
                        alt=""
                    />
                    <a href="mailto:sachinka.gunasekara@gmail.com">sachinka.gunasekara@gmail.com</a>
                </div>

                <div className='flex items-center w-fit px-6 py-2 text-port-yellow border-2 rounded-full border-port-yellow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ...'>
                    <img
                        className="size-5 mr-1"
                        src={whatsapp}
                        alt=""
                    />
                    0705174944
                </div>
          </div>

          <div className='flex justify-center gap-10 pt-10 sm:text-justify'>

                <img
                    className="size-10 mr-1 sm:size-8 transition ease-in-out delay-75 hover:scale-125"
                    src={linkedin}
                    alt=""
                    onClick={() => { window.open('https://www.linkedin.com/in/sachinka-gunasekara/', '_blank'); }}
                />
            <img
                    className="size-10 mr-1 sm:size-8 transition ease-in-out delay-75 hover:scale-125"
                    src={github}
                    alt=""
                    onClick={() => { window.open('https://github.com/sachinka-gunasekara', '_blank'); }}
                />
                <img
                    className="size-10 mr-1 sm:size-8 transition ease-in-out delay-75 hover:scale-125"
                    src={behance}
                    alt=""
                    onClick={() => { window.open('https://www.behance.net/sachinkgunasek', '_blank'); }}
                />  
            </div>

            <div className='text-white text-md text-center px-20 pt-10 sm:px-5'>
                Thank you for exploring my portfolio! I'm thrilled to share my work with you. Feel free to reach out with any questions or opportunities. Let's connect and bring your ideas to life!
            </div>

            <button
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-white font-bold py-2 px-4 rounded-full fixed bottom-10 right-10 z-50"
                >
                <img
                    className="size-10 mr-1 xs:size-7"
                    src={arrow}
                    alt=""
                /> 
            </button>

            <div className='text-slate-400 text-xs text-center px-20 pt-10 sm:px-5'>
                Copyright©2024 | Designed and Developed by Sachinka Gunasekara
            </div>
        </div>
      </div>
  )
}
