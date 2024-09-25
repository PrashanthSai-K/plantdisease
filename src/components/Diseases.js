import React, { useState } from 'react'
import Navbar from './Navbar'
import ReactPaginate from 'react-paginate';
import Vegetables from './Vegetables';
import Fruits from './Fruits';

function Diseases() {

    const selectedDisease = localStorage.getItem("selectedDisease");
    const disease = selectedDisease ? selectedDisease : "vegetables"
    const [page, setPage] = useState(disease);
    const [dropdown, setDropdown] = useState(false);

    const handleDropdown = () => {
        setDropdown(!dropdown);
    }

    const handleDropdownClick = (data) => {
        console.log(data);
        
        localStorage.setItem('selectedDisease', data);
        setPage(data);
        setDropdown(false); // Close dropdown after selection
    }

    return (
        <>
            <Navbar />
            <div className='flex items-center justify-between pr-10 mt-4'>
                <h1 className='text-emerald-1000 text-2xl font-semibold pl-20 ' >DISEASES</h1>
                <div class="relative text-left flex items-center justify-between">
                    <div
                        onClick={() => handleDropdown()}
                    >
                        <button
                            type="button"
                            class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-1000 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-emerald-1000 hover:text-emerald-50 " id="menu-button" aria-expanded="true" aria-haspopup="true"
                        >
                            {page[0].toUpperCase() + page.slice(1)}
                            <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    {dropdown &&
                        <div class="absolute right-0 z-10 mt-32 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1" role="none">
                                <div onClick={() => handleDropdownClick("vegetables")} class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Vegetables</div>
                                <div onClick={() => handleDropdownClick("fruits")} class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Fruits</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            {page === "vegetables" &&
                <Vegetables />
            }
            {page === "fruits" &&
                <Fruits />
            }
        </>
    )
}

export default Diseases