import React from 'react'
import Navbar from './Navbar'

function Diseases() {

    const vegetableDisease = [
        {
            name: "Anthracnose (Peppers)",
            cause: "Anthracnose is caused by a group of fungi within the genus Colletotrichum. The two main species associated with peppers are C. gloeosporioides and C. acutatum, but there are several species that may cause this disease.",
            image: "/images/vegetables/Anthracnose in Peppers.jpg"
        },
        {
            name: "Bacterial Wilt",
            cause: "Anthracnose is caused by a group of fungi within the genus Colletotrichum. The two main species associated with peppers are C. gloeosporioides and C. acutatum, but there are several species that may cause this disease.",
            image: "/images/vegetables/bacterial-wilt.png"
        },
        {
            name: "Black Rot (Cabbage)",
            cause: "Anthracnose is caused by a group of fungi within the genus Colletotrichum. The two main species associated with peppers are C. gloeosporioides and C. acutatum, but there are several species that may cause this disease.",
            image: "/images/vegetables/Black Rot in Cabbage.jpg"
        },
        {
            name: "Cercospora Leaf Spot",
            cause: "Anthracnose is caused by a group of fungi within the genus Colletotrichum. The two main species associated with peppers are C. gloeosporioides and C. acutatum, but there are several species that may cause this disease.",
            image: "/images/vegetables/Cercospora Leaf Spot in Spinach.jpg"
        },
        {
            name: "Clubroot (Cabbage)",
            cause: "Anthracnose is caused by a group of fungi within the genus Colletotrichum. The two main species associated with peppers are C. gloeosporioides and C. acutatum, but there are several species that may cause this disease.",
            image: "/images/vegetables/Clubroot (Cabbage and Broccoli).jpg"
        },
        {
            name: "Damping Off (Seedlings)",
            cause: "Anthracnose is caused by a group of fungi within the genus Colletotrichum. The two main species associated with peppers are C. gloeosporioides and C. acutatum, but there are several species that may cause this disease.",
            image: "/images/vegetables/Damping Off (Seedlings).png"
        },
        {
            name: "Downy Mildew (Lettuce)",
            cause: "Anthracnose is caused by a group of fungi within the genus Colletotrichum. The two main species associated with peppers are C. gloeosporioides and C. acutatum, but there are several species that may cause this disease.",
            image: "/images/vegetables/Downy Mildew on Lettuce.jpg"
        },
        {
            name: "Fusarium Wilt (Tomatoes)",
            cause: "Anthracnose is caused by a group of fungi within the genus Colletotrichum. The two main species associated with peppers are C. gloeosporioides and C. acutatum, but there are several species that may cause this disease.",
            image: "/images/vegetables/Fusarium Wilt (Tomatoes).jpg" 
        },
        {
            name: "Late Blight (Potatoes)",
            cause: "Anthracnose is caused by a group of fungi within the genus Colletotrichum. The two main species associated with peppers are C. gloeosporioides and C. acutatum, but there are several species that may cause this disease.",
            image: "/images/vegetables/Late Blight (Potatoes).jpg"
        },
        {
            name: "Leaf Spot (Spinach)",
            cause: "Anthracnose is caused by a group of fungi within the genus Colletotrichum. The two main species associated with peppers are C. gloeosporioides and C. acutatum, but there are several species that may cause this disease.",
            image: "/images/vegetables/Leaf Spot in Spinach.jpg"
        },
        {
            name: "Onion Smut",
            cause: "Anthracnose is caused by a group of fungi within the genus Colletotrichum. The two main species associated with peppers are C. gloeosporioides and C. acutatum, but there are several species that may cause this disease.",
            image: "/images/vegetables/Onion Smut.jpg"
        },
        {
            name: "Powdery Mildew (Cucurbits)",
            cause: "Anthracnose is caused by a group of fungi within the genus Colletotrichum. The two main species associated with peppers are C. gloeosporioides and C. acutatum, but there are several species that may cause this disease.",
            image: "/images/vegetables/Powdery Mildew (Cucurbits).jpg"
        },
        {
            name: "Pythium Root Rot (Cucumber)",
            cause: "Anthracnose is caused by a group of fungi within the genus Colletotrichum. The two main species associated with peppers are C. gloeosporioides and C. acutatum, but there are several species that may cause this disease.",
            image: "/images/vegetables/Pythium Root Rot (Cucumber).jpeg"
        },
        {
            name: "Root Knot Nematodes",
            cause: "Anthracnose is caused by a group of fungi within the genus Colletotrichum. The two main species associated with peppers are C. gloeosporioides and C. acutatum, but there are several species that may cause this disease.",
            image: "/images/vegetables/root knot nematodes.png"
        },
        {
            name: "White Mold (Beans)",
            cause: "Anthracnose is caused by a group of fungi within the genus Colletotrichum. The two main species associated with peppers are C. gloeosporioides and C. acutatum, but there are several species that may cause this disease.",
            image: "/images/vegetables/Pythium Root Rot (Cucumber).jpeg"
        },
        {
            name: "Pythium Root Rot (Cucumber)",
            cause: "Anthracnose is caused by a group of fungi within the genus Colletotrichum. The two main species associated with peppers are C. gloeosporioides and C. acutatum, but there are several species that may cause this disease.",
            image: "/images/vegetables/White Mold in Beans.jpg"
        },
    ]

    return (
        <>
            <Navbar />
            <h1 className='text-emerald-950 text-3xl font-medium pl-20 pt-2' >Diseases</h1>
            <div className='px-1 flex gap-5 flex-wrap h-auto bg-emerald-50 w-full items-center justify-center pt-10'>
                {vegetableDisease.map((vege)=>{
                    return (
                        <div className='w-64 h-80 bg-white rounded-2xl overflow-hidden p-3 border border-dashed border-emerald-950'>
                            <img className='w-full h-1/2 object-cover rounded-2xl' src={vege.image} alt="" />
                            <div>
                                <h1 className='text-emerald-950 text-xl font-medium' title={vege.name}>{vege.name.length > 19 ? `${vege.name.slice(0, 18)}...` : vege.name}</h1>
                                <p className='text-xs p-1 text-justify'>{vege.cause.length > 210? `${vege.cause.slice(0, 210)}...` : vege.cause}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Diseases