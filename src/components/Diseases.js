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
            cause: "Bacterial wilt is a plant disease caused by specific bacteria that infect a variety of plants, including important crops like tomatoes, potatoes, cucumbers, and many others. The disease is particularly notorious for causing significant yield losses in agriculture.",
            image: "/images/vegetables/bacterial-wilt.png"
        },
        {
            name: "Black Rot (Cabbage)",
            cause: "Black Rot is a significant bacterial disease affecting cabbage and other cruciferous crops. It is caused primarily by the bacterium Xanthomonas campestris pv. campestris. This disease can lead to severe yield losses and is particularly detrimental in humid conditions.",
            image: "/images/vegetables/Black Rot in Cabbage.jpg"
        },
        {
            name: "Cercospora Leaf Spot",
            cause: "Cercospora Leaf Spot is a common fungal disease that affects a variety of plants, including crops such as beans, cucumbers, and spinach, as well as ornamental plants. It is caused by fungi of the genus Cercospora. The disease can lead to reduced photosynthesis and overall plant vigor, resulting in significant yield losses.",
            image: "/images/vegetables/Cercospora Leaf Spot in Spinach.jpg"
        },
        {
            name: "Clubroot (Cabbage)",
            cause: "Clubroot is a serious soil-borne disease that affects cabbage and other cruciferous crops, including broccoli, cauliflower, and Brussels sprouts. It is caused by the pathogen Plasmodiophora brassicae, a type of protist. The disease can lead to significant yield losses and is particularly problematic in cool, wet conditions.",
            image: "/images/vegetables/Clubroot (Cabbage and Broccoli).jpg"
        },
        {
            name: "Damping Off (Seedlings)",
            cause: "ADamping off is a term used to describe a complex of diseases that affect seedlings, leading to their decay and death shortly after germination. It is caused by a variety of fungal pathogens, including those from the genera Pythium, Rhizoctonia, and Botrytis. This disease is especially common in greenhouse settings and can severely impact seedling production.",
            image: "/images/vegetables/Damping Off (Seedlings).png"
        },
        {
            name: "Downy Mildew (Lettuce)",
            cause: "Downy mildew is a significant fungal disease affecting lettuce and other leafy greens, characterized by the presence of downy, grayish-white fungal growth on the underside of leaves. The disease is caused primarily by the pathogen Bremia lactucae, which can lead to severe crop losses and is particularly problematic in cool, humid conditions.",
            image: "/images/vegetables/Downy Mildew on Lettuce.jpg"
        },
        {
            name: "Fusarium Wilt (Tomatoes)",
            cause: "Fusarium wilt is a serious soil-borne disease that affects tomato plants, caused by the fungus Fusarium oxysporum f.sp. lycopersici. This disease can lead to significant yield losses and is particularly challenging to manage due to its persistence in the soil.",
            image: "/images/vegetables/Fusarium Wilt (Tomatoes).jpg"
        },
        {
            name: "Late Blight (Potatoes)",
            cause: "Late blight is a devastating disease affecting potato and tomato plants, primarily caused by the oomycete pathogen Phytophthora infestans. This disease is notorious for its ability to cause rapid crop losses and is often associated with cool, moist conditions.",
            image: "/images/vegetables/Late Blight (Potatoes).jpg"
        },
        {
            name: "Leaf Spot (Spinach)",
            cause: "Leaf spot is a common term used to describe various diseases affecting spinach, characterized by the presence of spots or lesions on the leaves. The disease can be caused by several fungal and bacterial pathogens, with the most notable being Cercospora beticola and Alternaria species. Leaf spot diseases can lead to reduced crop quality and yield if not managed effectively.",
            image: "/images/vegetables/Leaf Spot in Spinach.jpg"
        },
        {
            name: "Onion Smut",
            cause: "Onion smut is a fungal disease caused by the pathogen Urocystis cepulae, affecting onions and related allium crops. This disease is characterized by the formation of dark, smutty galls on bulbs, leaves, and flowers, leading to significant crop losses if not managed properly.",
            image: "/images/vegetables/Onion Smut.jpg"
        },
        {
            name: "Powdery Mildew (Cucurbits)",
            cause: "Powdery mildew is a common fungal disease that affects a wide range of cucurbit crops, including cucumbers, squash, pumpkins, and melons. It is caused by several species of fungi, most notably Podosphaera xanthii and Erysiphe cichoracearum. The disease is characterized by the appearance of white, powdery fungal growth on the leaves and stems, which can lead to significant crop losses if not managed effectively.",
            image: "/images/vegetables/Powdery Mildew (Cucurbits).jpg"
        },
        {
            name: "Pythium Root Rot (Cucumber)",
            cause: "Pythium root rot is a serious disease affecting cucumber plants, caused by various species of the water mold genus Pythium. This disease can lead to significant yield losses, especially in conditions where the soil is overly saturated and poorly drained.",
            image: "/images/vegetables/Pythium Root Rot (Cucumber).jpeg"
        },
        {
            name: "Root Knot Nematodes",
            cause: "Root knot nematodes (RKN), particularly species of the genus Meloidogyne, are parasitic roundworms that cause significant damage to a wide range of crops, including vegetables, fruits, and ornamentals. These nematodes are known for inducing characteristic galls or knots on the roots, which can severely affect plant health and yield.",
            image: "/images/vegetables/root knot nematodes.png"
        },
        {
            name: "White Mold (Beans)",
            cause: "White mold, also known as sclerotinia stem rot, is a fungal disease caused by Sclerotinia sclerotiorum. This disease affects various crops, particularly beans, and can lead to significant yield losses if not managed properly. White mold is characterized by the presence of white, fluffy fungal growth and the formation of sclerotia, which are hard, black structures that can survive in the soil for years.",
            image: "/images/vegetables/Pythium Root Rot (Cucumber).jpeg"
        },
    ]

    return (
        <>
            <Navbar />
            <h1 className='text-emerald-950 text-2xl font-semibold pl-20 pt-4' >DISEASES</h1>
            <h1 className=' text-xl font-semibold pl-20 pt-4'  style={{color:"rgb(5, 19, 15)"}}>VEGETABLES</h1>

            <div className='px-1 py-2 flex gap-5 flex-wrap h-auto bg-emerald-50 w-full items-center justify-center pt-10'>
                {vegetableDisease.map((vege) => {
                    return (
                        <div className='w-64 h-80 bg-white rounded-2xl overflow-hidden p-3 border border-dashed border-emerald-950 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                            <img className='w-full h-1/2 object-cover rounded-2xl' src={vege.image} alt="" />
                            <div>
                                <h1 className='text-emerald-950 text-xl font-medium' title={vege.name}>{vege.name.length > 19 ? `${vege.name.slice(0, 18)}...` : vege.name}</h1>
                                <p className='text-xs p-1 text-justify'>{vege.cause.length > 230 ? `${vege.cause.slice(0, 230)}...` : vege.cause}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Diseases