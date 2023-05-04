import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CgChevronDoubleDown } from 'react-icons/cg'
import { Link } from 'react-scroll'
import {ImDownload} from 'react-icons/im'

const Home = () => {
    const { ref, inView } = useInView({ threshold: 0.8 })



    const animation = {
        hidden: { opacity: 0, x : 20 },
        visible: {
            opacity: 1,
            x : 0,
            transition: {
                duration: 0.5,
                ease: "linear"
            }
        }
    }

    return (
        <div
        id='home'
            className=' bg-background relative  text-white pt-24 font-primary  px-12 md:px-32 h-screen'>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={animation}
            >
                <div
                    className='flex mt-32 text-2xl md:text-5xl my-3  items-center'>
                    <h1>Hello,</h1>
                    <h1 className='animate-bounce'>👋</h1>
                    <h1 ><span className='text-primary font-bold'>Mehul </span>here</h1>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='text-l md:text-3xl text-gray-500'>I am a <span className='text-primary font-extrabold'>FullStack Developer</span> </p>
                    <p className='text-md md:text-xl text-gray-500'>My main areas of interest are  <span className='text-primary font-bold'>Web Development , Data science, Machine learning, and UI/UX </span>.
                        I am constantly seeking new challenges and opportunities to further develop my skills and knowledge in these fields.</p>
                </div>
                <div className='my-6 w-max'>
                    <a href="https://drive.google.com/file/d/1L_85ccTw_EbHqx1OYQNwSjv82oDMyMEY/view?usp=sharing" target='_blank'  download="My_Resume.pdf" className='tap-button flex gap-3 items-center'>Resume <ImDownload/> </a>
                </div>

            </motion.div>
            <Link to='projects' smooth spy>
                <p className='animate-pulse cursor-pointer absolute left-1/2 bottom-5 -translate-x-1/2 p-12'>
                    <CgChevronDoubleDown size={30} />
                </p>
            </Link>
        </div>
    )
}

export default Home
