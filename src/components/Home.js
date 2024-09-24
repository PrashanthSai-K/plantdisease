import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

function Home() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className=' sm:flex items-center justify-center h-5/6  flex flex-col-reverse sm:pl-20 w-full' >
                <div className=' sm:pl-24 pl-6 h-1/2 w-full flex flex-col items-center justify-center sm:h-auto text-center pt-8'>
                    <h1 className='drop-shadow-2xl text-emerald-950 sm:text-6xl font-medium text-4xl '>
                        WELCOME !!!
                    </h1>
                    <h1 className='drop-shadow-2xl text-emerald-950 sm:text-6xl font-medium text-4xl  '>
                        TO PLANT BUDDY
                    </h1>
                    <p className='text-xl text-emerald-900 p-3'>Identify common plant diseases and find effective solutions to keep your plants healthy.</p>
                </div>
                <div className=' flex items-end w-full sm:justify-center justify-center sm:w-1/2 w-full sm:h-auto h-1/2 '>
                    <img className=' drop-shadow-2xl w-80 sm:w-3/6' src="/images/PlantImage.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Home