import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className='w-full h-20 p-3'>
            <div className='p-5 flex justify-between items-center rounded-3xl '>
                <div className='' onClick={() => navigate('/')}>
                    <img className='cursor-pointer drop-shadow-2xl' src="/images/Logo.png" alt="Logo" />
                </div>
                <ul className=' hidden sm:flex gap-6 font-medium text-xl text-emerald-1000 transition-all duration-200'>
                    <li
                        className=' cursor-pointer hover:drop-shadow-2xl hover:text-emerald-950'
                        onClick={() => navigate('/')}
                    >
                        Home
                    </li>
                    <li
                        className=' cursor-pointer hover:drop-shadow-2xl hover:text-emerald-950'
                        onClick={() => navigate('/diseases')}
                    >
                        Diseases
                    </li>
                    <li
                        className=' cursor-pointer hover:drop-shadow-2xl hover:text-emerald-950'
                        onClick={() => navigate('/aboutus')}
                    >
                        About Us
                    </li>
                </ul>
                <div className='flex gap-5'>
                    <img className='w-6 h-6 drop-shadow-2xl cursor-pointer' src="/images/search.png" alt="search" />
                    <img className='w-6 h-6 drop-shadow-2xl cursor-pointer' src="/images/user.png" alt="user" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar