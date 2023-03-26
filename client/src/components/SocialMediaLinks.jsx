import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'

const SocialMediaLinks = () => {
    return (
        <div className='invisible  h-full md:visible flex flex-row md:flex-col justify-end gap-4 fixed bottom-5 left-5 z-50'>
            <a href='https://github.com/Mehulparekh144'  target={"_blank"} className='bg-white text-primary p-2 rounded-full transition-all hover:scale-110 hover:bg-primary hover:text-white'>
            <AiFillGithub size={25}/>
            </a>
            <a href='https://linkedin.com/in/mehul-parekh-a519a9196/' target={"_blank"} className='bg-white text-primary p-2 rounded-full transition-all hover:scale-110 hover:bg-primary hover:text-white'>
            <AiFillLinkedin size={25}/>
            </a>
            <a href='mailto:mehulparekh144@gmail.com' target={"_blank"} className='bg-white text-primary p-2 rounded-full transition-all hover:scale-110 hover:bg-primary hover:text-white'>
            <MdEmail size={25}/>
            </a>


        </div>
    )
}

export default SocialMediaLinks
