import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BiLink } from 'react-icons/bi'
import { useInView } from 'react-intersection-observer'
import airglobe from '../assets/images/airglobe.png'
import musiclab from '../assets/images/musiclab.png'
import joblinker from '../assets/images/joblinker.png'
import soundboom from '../assets/images/soundboom.png'
import protrackr from '../assets/images/protrackr.png'
import { motion } from 'framer-motion'

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const projects = [
    {
      name: 'Protrackr',
      link: 'https://protrackr-issue-tracker.vercel.app/',
      desc: 'Issue Tracker Pro is a robust issue tracking system powered by TRPC NextJS 13, designed to streamline issue management. It enables users to create teams, assign issues, manage users, view issue details, set deadlines, prioritize tasks, and track issue statuses, making it an invaluable tool for optimizing workflow efficiency, ensuring transparency, and achieving project milestones with ease.',
      tech: ['NextJS', 'TRPC', "Typescript", "Prisma", "PostgreSQL", "shadCN", 'Next-Auth', "TailwindCSS"],
      img: protrackr,
      git: "https://github.com/Mehulparekh144/Issue-Tracker"

    },
    {
      name: 'SoundBoom',
      link: 'https://soundboom.vercel.app/',
      desc: 'SoundBoom MERN Ecommerce is a web application built with the MERN stack that allows users to browse and purchase audio products. It includes features such as user authentication, shopping cart management, payment integration with Stripe, and search and filter functionality.',
      tech: ['ReactJS', 'MongoDB', "ExpressJS", "NodeJS", "Redux", "Stripe", 'ContextAPI', "TailwindCSS"],
      img: soundboom,
      git: "https://github.com/Mehulparekh144/SoundBoom_MERN_Ecommerce"

    },
    {
      name: 'JobLinker',
      link: 'https://joblinker.vercel.app/',
      desc: 'JobLinker is a cutting-edge job connection platform developed with React, TypeScript, ExpressJS, NodeJS, Zustand state management, and integrated with Supabase. It empowers job seekers to apply while uploading their resumes and recruiters to post jobs .',
      tech: ['ReactJS', 'Typescript', 'Supabase', "ExpressJS", "NodeJS", "Zustand", "Framer Motion", "TailwindCSS"],
      img: joblinker,
      git: "https://github.com/Mehulparekh144/JobLinker"

    },
    {
      name: 'Airglobe',
      link: 'https://airglobe.vercel.app/',
      desc: 'This project is an Airbnb clone that has been built using the MERN stack. The project provides users with the ability to book accommodations, as well as add their own properties, which includes the ability to upload images using Cloudinary.',
      tech: ['ReactJS', 'MongoDB', "ExpressJS", "NodeJS", "Cloudinary", "Multer", "TailwindCSS"],
      img: airglobe,
      git: "https://github.com/Mehulparekh144/AirBNB-Clone-using-MERN-Stack"

    },
    {
      name: 'MusicLab',
      link: null,
      desc: 'This project involved creating a system that could recommend music to users based on their current mood. We were responsible for designing and implementing the recommendation system, as well as integrating machine learning techniques to analyse and understand user moods. We used Spotify API for generating songs dataset, Machine learning libraries of python for model development and Django for website development.',
      tech: ["Django", "Python", "SpotifyAPI", "SQLLite", "BootstrapCSS"],
      img: musiclab,
      git: "https://github.com/harsh08git/MusicLab"

    },

  ]

  const container = {
    hidden: { x: -10, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }

  const containerItems = {
    hidden: {
      x: -10,
      opacity: 0
    },
    show: {
      x: 0,
      opacity: 1
    }
  }

  return (
    <div id="projects" className='bg-background text-white pt-24 font-primary pb-5 px-12 md:px-32 min-h-screen'>
      <h1 className='text-3xl md:text-5xl'>Projects</h1>
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        ref={ref}
      >
        {projects.map((projectItem, key) => (
          <motion.div
            variants={containerItems}
            key={key} className={`md:flex justify-between items-center gap-5  py-6 px-6  my-3 ${key % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
            <div className='w-full  md:w-max'>
              <img className='w-full h-full shadow-primary object-contain' src={projectItem.img} />
            </div>
            <div>
              <h1 className='text-3xl my-3 text-primary'>{projectItem.name}</h1>
              <h1 className='text-m text-gray-300'>{projectItem.desc}</h1>
              <div className="flex flex-wrap gap-3 my-3">
                {projectItem.tech.map((techItem, key) => (
                  <div key={key} className="bg-primary px-3 py-1 rounded-full">
                    {techItem}
                  </div>
                ))}
              </div>
              <div className='mt-6 flex items-center  gap-3 text-gray-500'>
                <a href={projectItem.git} target="_blank" className='group flex gap-1 hover:bg-primary  hover:text-white rounded-2xl px-2 py-2 ease-in-out transition-all duration-300'>
                  <p className="" target="_blank"><AiFillGithub size={25} /></p>
                  <p className='hidden text-white top-0 group-hover:block'>Github Code</p>
                </a>
                {
                  projectItem.link &&
                  <a href={projectItem.link} target="_blank" className='group flex gap-1 hover:bg-primary  hover:text-white rounded-2xl px-2 py-2 ease-in-out transition-all duration-300'>
                    <p ><BiLink size={25} /></p>
                    <p className='hidden text-white top-0 group-hover:block'>Demo</p>
                  </a>
                }
              </div>
            </div>

          </motion.div>
        ))}
      </motion.div>

    </div>
  )
}

export default Projects
