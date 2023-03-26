import React from 'react'

const Alert = ({isOpen , type , message}) => {
    return (
        <>
        {
            isOpen && 
            <div className={` ${type === "success"? 'bg-emerald-500' : 'bg-red-500' } w-full text-center md:w-max px-4 py-2 rounded-xl `}>
                {message} 
            </div>

        }
        </>
    )
}

export default Alert
