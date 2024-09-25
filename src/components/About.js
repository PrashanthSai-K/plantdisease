import React from 'react'
import Navbar from './Navbar'

function About() {
    return (
        <>
            <Navbar />

            <div className=' relative'>
                <div className='flex'>
                    <div className='w-56 h-96'></div>
                    <img className=' w-96 h-96 rounded-full' src="/images/6.png" alt="" />
                    <div className='text-emerald-1000 text-9xl font-semibold pt-40 pl-20'>
                        ABOUT US
                    </div>
                </div>
                <div className='flex gap-24'>
                    <img className='w-96 h-96 rounded-full' src="/images/7.png" alt="" />
                    <img className='w-96 h-96 rounded-full' src="/images/2.png" alt="" />
                </div>
                <p className=' absolute right-32 bottom-44  text-2xl text-justify   text-gray-500' style={{width:"50rem"}}>
                    we are passionate about supporting the agricultural community by providing essential information and resources related to plant diseases affecting fruits and vegetables. Our mission is to empower farmers, gardeners, and plant enthusiasts with the knowledge they need to identify, manage, and prevent plant diseases, ultimately promoting healthier crops and sustainable farming practices.
                </p>
            </div>

        </>
    )
}

export default About