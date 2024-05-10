import React from 'react';
import github from '../images/github-svgrepo-com.svg'
import behance from '../images/behance-svgrepo-com.svg'
import coffee from '../images/coffee.png'

export default function Home() {

  return (
      <div className="relative isolate px-6 pt-14 sm:pt-0 lg:px-8">
          <div className='text-port-yellow uppercase text-4xl font-semibold sm:text-center pb-10'>
            Projects
          </div>

          <div className='flex justify-between gap-5'>
            
          <div className="basis-1/3 bg-port-opyellow rounded-xl">
        
        <div className='aspect-auto'>
                <img
                className="size-64 mt-5 mb-10 mx-auto"
                src={coffee}
                alt="coffenook"
              />
</div>
              <div className='text-white text-2xl text-center m-5'>project</div>
              <div className='text-port-yellow text-sm text-center m-5'>UI/UX</div>

              <div className='text-white text-sm text-justify m-5'>I am a graduate at University of Colombo School of Computing who has the skills of designing based on user requirements and is committed to software development with coding. Moreover, I'm creative, hardworking, and possess a friendly personality that can adapt to any working environment.</div>
          
              <div className='flex gap-10 justify-center m-5'>
              <img
                    className="size-8 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                    src={github}
                    alt=""
                  />
                  <img
                    className="size-8 transition ease-in-out delay-75 hover:scale-125 cursor-pointer"
                    src={behance}
                    alt=""
                  />
              </div>

          </div>
          

          <div className="basis-1/3 bg-port-opyellow rounded-xl">
          <img
                className="size-64 mt-5 mb-10 mx-auto"
                src={github}
                alt="Figma"
              />
          </div>

          <div className="basis-1/3 bg-port-opyellow rounded-xl">
          <img
                className="size-64 mt-5 mb-10 mx-auto"
                src={github}
                alt="Figma"
              />
          </div>
          </div>
      </div>
  )
}
