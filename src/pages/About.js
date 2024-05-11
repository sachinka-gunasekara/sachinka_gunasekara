import React from 'react';
import github from '../images/github-142-svgrepo-com.svg'
import git from '../images/gitlab-svgrepo-com.svg'
import react from '../images/react-svgrepo-com.svg'
import html from '../images/html-5-svgrepo-com.svg'
import css from '../images/css-3-svgrepo-com.svg'
import javascript from '../images/javascript-logo-svgrepo-com.svg'
import figma from '../images/figma-svgrepo-com.svg'
import firebase from '../images/firebase-svgrepo-com.svg'
import docker from '../images/docker-svgrepo-com.svg'
import bootstrap from '../images/bootstrap-svgrepo-com.svg'
import vue from '../images/vue-svgrepo-com.svg'
import xd from '../images/adobe-xd-svgrepo-com.svg'
import tailwind from '../images/tailwind-svgrepo-com.svg'
import mui from '../images/material-ui-svgrepo-com.svg'
import mysql from '../images/mysql-logo-svgrepo-com.svg'


export default function Home() {

  return (
      <div className="relative isolate px-6 pt-14 sm:pt-0 lg:px-8">
        <div className="mx-auto max-w-6xl py-8">

            <div className='text-port-yellow uppercase text-4xl font-semibold sm:text-center pb-10'>
              About
            </div>
          
          <div className='text-white text-md text-left py-2 sm:text-justify sm:pl-0 pl-28'>
          Welcome to my portfolio! I'm dedicated to crafting user experiences that seamlessly merge design and engineering, aiming for both aesthetic appeal and practical functionality. My educational background includes graduating from the University of Colombo School of Computing (UCSC), where I delved into UI/UX engineering and design. During my time at UCSC, I immersed myself in understanding user needs, mastering the art of translating these insights into intuitive interfaces that captivate users. My journey at UCSC has endowed me with a robust skill set, blending technical prowess with design principles to deliver impactful digital experiences.
          </div>

          <div className='flex justify-center gap-16 flex-wrap sm:gap-10 pt-10'>
          <img
                className="size-20 sm:size-16 transition ease-in-out delay-75 hover:scale-125"
                src={react}
                alt="Reactjs"
              />
              <img
                className="size-20  sm:size-16 transition ease-in-out delay-75 hover:scale-125"
                src={vue}
                alt="Vuejs"
              />
              <img
                className="size-20  sm:size-16 transition ease-in-out delay-75 hover:scale-125"
                src={bootstrap}
                alt="Bootstrap"
              />
              <img
                className="size-20  sm:size-16 transition ease-in-out delay-75 hover:scale-125"
                src={tailwind}
                alt="Tailwind CSS"
              />
              <img
                className="size-20 sm:size-16 transition ease-in-out delay-75 hover:scale-125"
                src={mui}
                alt="Material UI"
              />
          <img
                className="size-20  sm:size-16 transition ease-in-out delay-75 hover:scale-125"
                src={html}
                alt="Html"
              />

            <img
                className="size-20 sm:size-16 transition ease-in-out delay-75 hover:scale-125"
                src={css}
                alt="CSS"
              />
              <img
                className="size-20  sm:size-16 transition ease-in-out delay-75 hover:scale-125"
                src={javascript}
                alt="JavaScript"
              />
              <img
                className="size-20  sm:size-16 transition ease-in-out delay-75 hover:scale-125"
                src={git}
                alt="Gitlab"
              />
              <img
                className="size-20  sm:size-16 transition ease-in-out delay-75 hover:scale-125"
                src={github}
                alt="Github"
              />
              <img
                className="size-20  sm:size-16 transition ease-in-out delay-75 hover:scale-125"
                src={figma}
                alt="Figma"
              />
              <img
                className="size-20  sm:size-16 transition ease-in-out delay-75 hover:scale-125"
                src={xd}
                alt="Adobe XD"
              />
              <img
                className="size-20  sm:size-16 transition ease-in-out delay-75 hover:scale-125"
                src={docker}
                alt="Docker"
              />
              <img
                className="size-20  sm:size-16 transition ease-in-out delay-75 hover:scale-125"
                src={firebase}
                alt="Firebase"
              />
            <img
                className="size-20  sm:size-16 transition ease-in-out delay-75 hover:scale-125"
                src={mysql}
                alt="MySQL"
              />
          </div>
        </div>
      </div>
  )
}
