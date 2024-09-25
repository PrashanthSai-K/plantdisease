import React, { useEffect, useState } from 'react'
import { vegetablesDetails } from '../data/database';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

function VegetableDetail() {

    const [data, setData] = useState({});

    const id = useLocation();

    const getData = () => {
        const data = vegetablesDetails.filter((vege) => vege.id === parseInt(id.pathname.split('/')[3]))
        setData(data[0]);
    }

    useEffect(() => {
        getData();
    }, []);
console.log(data);

    if (Object.keys(data).length == 0) return null;

    return (
        <>
            <Navbar />
            <div className=" p-10 flex justify-between bg-emerald-50">
                <div >
                    <h1 className='text-emerald-1000 font-semibold text-2xl'>{data.name}</h1>
                    <div className='w-10/12 p-5'>
                        <h2 className='text-emerald-1000 font-semibold text-xl'>Cause :</h2>
                        <p className='text-gray-500 pl-10 pt-3'>{data.cause}</p>
                    </div>
                    <div className='w-10/12 p-5'>
                        <h2 className='text-emerald-1000 font-semibold text-xl'>Symptoms :</h2>
                        <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 pl-10 pt-3'>
                            {
                                data.symptoms.map((sym) => {
                                    return (
                                        <div>
                                            <li key={sym}>{sym}</li>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='w-10/12 p-5'>
                        <h2 className='text-emerald-1000 font-semibold text-xl'>Solution :</h2>
                        <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 pl-10 pt-3'>
                            {
                                data.solution.map((sym) => {
                                    return (
                                        <div>
                                            <li key={sym}>{sym}</li>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='flex'>
                        <div className='w-10/12 p-5'>
                            <h2 className='text-emerald-1000 font-semibold text-xl'>Affected Parts :</h2>
                            <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 pl-10 pt-3'>
                                {
                                    data.affectedParts.map((sym) => {
                                        return (
                                            <div>
                                                <li key={sym}>{sym}</li>
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </div><div className='w-10/12 p-5'>
                            <h2 className='text-emerald-1000 font-semibold text-xl'>Practices :</h2>
                            <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 pl-10 pt-3'>
                                {
                                    data.managementPractices.map((sym) => {
                                        return (
                                            <div>
                                                <li key={sym}>{sym}</li>
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <img className='w-80 h-80 rounded-3xl' src={`${data.image}`} alt="" />
            </div>
        </>
    )
}

export default VegetableDetail