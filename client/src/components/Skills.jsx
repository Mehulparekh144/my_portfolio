import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
    const {ref,  inView} = useInView({threshold : 0.1})
    const skills = [
        {
            name: "frontend",
            values: ["HTML", "CSS", "REACTJS", "JAVASCRIPT", "TAILWINDCSS", "BOOTSTRAP"]
        },
        {
            name: "backend",
            values: ["MONGODB", "EXPRESSJS", "NODEJS", "MYSQL", "DJANGO", "PYTHON"]
        },
        {
            name: "tools",
            values: ["FIGMA", "MICROSOFT OFFICE", "ADOBE ILLUSTRATOR", "CANVA"]
        },
        {
            name: "libraries",
            values: ["SKLEARN", "NUMPY", "PANDAS"]
        },

    ]

    const container = {
        hidden: { y:10 ,opacity: 0 },
        show: {
            y : 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                duration : 0.5,
                ease : 'linear'
            }
        }
    }

    const containerItems = {
        hidden: {
            y : 10 ,
            opacity: 0
        },
        show: {
            y : 0,
            opacity: 1
        }
    }


    return (
        <div id='skills' className='text-white pt-24 font-primary pb-5 px-12 md:px-32 min-h-screen'>
            <h1 className='text-3xl md:text-5xl'>Skills</h1>
            <motion.div
                variants={container}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                ref={ref}

                className='flex md:flex-row flex-col justify-between items-center md:items-start gap-16 my-16'>
                {skills.map((skill, key) => (
                    <motion.div 
                    variants={containerItems}
                    key={key} className="bg-background border-primary border-2 shadow-primary text-center  px-4 py-2 w-full md:w-1/2 rounded-lg ">
                        <h1 className='bg-primary bg-opacity-50 rounded-lg mt-2 mb-5 text-3xl px-2 py-2 capitalize font-bold'>{skill.name}</h1>
                        <div>
                            {skill.values.map((item, key) => (
                                <p key={key} className='capitalize text-l my-2 hover:text-primary'>{item}</p>

                            ))}
                        </div>

                    </motion.div>
                ))}
            </motion.div>

        </div>
    )
}

export default Skills
