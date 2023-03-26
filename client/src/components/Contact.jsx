import React, { useState } from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import axios from 'axios'
import Alert from './Alert'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import contact from '../assets/images/contact.svg'

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [type , setType] = useState("success")
    const [isOpen  , setIsOpen] = useState(false)
    const [alertMessage , setAlertMessage] = useState("")

    setTimeout(()=>{
        setIsOpen(false)   
        setAlertMessage("")
                
    },8000)

    const handleFormSubmit = (e) => {
        e.preventDefault();

        axios.post("/send", { name, email, message }).then((res) => {
            setIsOpen(true)   
            setAlertMessage("Email Sent Successfully")
            setType("success")     
            setEmail("")
            setName("")
            setMessage("")
        }
        ).catch((err) => {
            setIsOpen(true)   
            setAlertMessage("Server Error")
            setType("error")  
        })
    }

    const { ref, inView } = useInView({ threshold: 0.8 })

    const animation = {
        hidden: { opacity: 0, x : -20 },
        visible: {
            opacity: 1,
            x : 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    }


    return (
        <div id="contact" className='bg-background  text-white pt-24 font-primary pb-12 px-12 md:px-32 min-h-screen'>
            <div className=''>
                <h1 className='text-3xl md:text-5xl'>Contact</h1>
                <p className='text-gray-300 text-sm md:text-md my-2'>Hey, if you could follow me on my socials, that would be super awesome! Let's connect and have a chat sometime. 🙂</p>
                <div className='md:hidden flex gap-3'>
                    <a href='https://github.com/Mehulparekh144' target={"_blank"} className='bg-white text-primary p-2 rounded-full transition-all hover:scale-110 hover:bg-primary hover:text-white'>
                        <AiFillGithub size={15} />
                    </a>
                    <a href='https://linkedin.com/in/mehul-parekh-a519a9196/' target={"_blank"} className='bg-white text-primary p-2 rounded-full transition-all hover:scale-110 hover:bg-primary hover:text-white'>
                        <AiFillLinkedin size={15} />
                    </a>
                    <a href='mailto:mehulparekh144@gmail.com' target={"_blank"} className='bg-white text-primary p-2 rounded-full transition-all hover:scale-110 hover:bg-primary hover:text-white'>
                        <MdEmail size={15} />
                    </a>
                </div>
            </div>
            <motion.div
            ref={ref}
            initial = "hidden" 
            animate = {inView ? "visible" : "hidden"}
            variants={animation}
            className="md:flex gap-2 justify-between"
            >
            <form onSubmit={handleFormSubmit} className='flex flex-col gap-3 md:w-1/2 my-6 md:my-12'>
                <div className='flex gap-1 flex-col justify-center'>
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" id='name' placeholder='John Doe' required/>
                </div>
                <div className='flex gap-1 flex-col justify-center'>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' placeholder='johndoe@mail.com' required/>
                </div>
                <div className='flex gap-1 flex-col justify-center'>
                    <label htmlFor="Message">Message</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} id='Message' placeholder='Enter your message' />
                </div>

                <div className='relative'>
                <button className='bg-primary text-white w-full md:w-max px-4 py-2 rounded-xl my-4 transition-all ease-in-out border-white border-opacity-60 border-2 hover:shadow-[5px_5px_#ffffff] hover:border-opacity-100'>Submit</button>
                <Alert isOpen={isOpen} message={alertMessage} type={type}/>
                </div>

            </form>
            <img src={contact} className="hidden md:block w-1/2" alt="" />
            </motion.div>

        </div>
    )
}

export default Contact
