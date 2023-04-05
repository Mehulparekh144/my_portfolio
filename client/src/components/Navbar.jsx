import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { IoIosCloseCircle } from 'react-icons/io'
import { motion } from 'framer-motion'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const menuVariants = {
        open: {  x: 0, opacity : 1 },
        closed: { x: '-100vw' , opacity : 0}
    }

    return (
        <div className='relative '>
            <nav className={`bg-background bg-opacity-30 backdrop-blur-lg font-display fixed md:py-6 top-0 left-0 bottom-5  h-[60px] z-50 flex w-full justify-evenly items-center text-white shadow-sm`}>
                <h1 className='font-display font-bold text-3xl hover:text-primary transition-colors ease-in-out'>MP</h1>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileFocus={{ scale: 5 }}
                    whileTap={{ scale: 5 }}
                    onClick={() => setShowMenu(true)} className='fixed left-5 md:hidden bg-primary rounded-full p-2 text-white'>
                    <BiMenuAltRight />
                </motion.button>
                <ul className='hidden md:flex gap-12 font-primary  cursor-pointer'>
                    <Link spy={true} activeClass='active'  smooth duration={500}   to={'home'} >Home</Link>
                    <Link spy={true} activeClass='active'  smooth duration={500}  to={'skills'} >Skills</Link>
                    <Link spy={true} activeClass='active'  smooth duration={500}  to={"projects"} >Projects</Link>
                    <Link spy={true} activeClass='active'  smooth duration={500}  to={'contact'}>Contact</Link>
                </ul>
            </nav>

            <motion.div
                initial="closed"
                animate={showMenu ? "open" : "closed"}
                variants={menuVariants}
                transition={{ duration: 0.5 }}
                className={`fixed  bg-black bg-opacity-10 backdrop-blur-3xl text-white w-screen h-screen z-50`}>
                <ul className='flex flex-col md:flex-row font-primary gap-4 justify-center cursor-pointer items-center md:gap-12 h-screen '>
                    <button onClick={() => setShowMenu(false)}>
                        <IoIosCloseCircle size={30} />
                    </button>
                    <Link spy={true} activeClass='active' onClick={() => setShowMenu(false)}  smooth duration={500}   to={'home'} >Home</Link>
                    <Link spy={true} activeClass='active' onClick={() => setShowMenu(false)}  smooth duration={500}  to={'skills'} >Skills</Link>
                    <Link spy={true} activeClass='active'  onClick={() => setShowMenu(false)} smooth duration={500}  to={"projects"} >Projects</Link>
                    <Link spy={true} activeClass='active' onClick={() => setShowMenu(false)}  smooth duration={500}  to={'contact'}>Contact</Link>
                </ul>
            </motion.div>
        </div>

    )
}

export default Navbar
