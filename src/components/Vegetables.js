import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';


function Vegetables() {

    const vegetableDisease = [
        {
            id: 1,
            name: "Anthracnose (Peppers)",
            cause: "Anthracnose is caused by a group of fungi within the genus Colletotrichum. The two main species associated with peppers are C. gloeosporioides and C. acutatum, but there are several species that may cause this disease.",
            image: "/images/vegetables/Anthracnose in Peppers.jpg"
        },
        {
            id: 2,
            name: "Bacterial Wilt",
            cause: "Bacterial wilt is a plant disease caused by specific bacteria that infect a variety of plants, including important crops like tomatoes, potatoes, cucumbers, and many others. The disease is particularly notorious for causing significant yield losses in agriculture.",
            image: "/images/vegetables/bacterial-wilt.png"
        },
        {
            id: 3,
            name: "Black Rot (Cabbage)",
            cause: "Black Rot is a significant bacterial disease affecting cabbage and other cruciferous crops. It is caused primarily by the bacterium Xanthomonas campestris pv. campestris. This disease can lead to severe yield losses and is particularly detrimental in humid conditions.",
            image: "/images/vegetables/Black Rot in Cabbage.jpg"
        },
        {
            id: 4,
            name: "Cercospora Leaf Spot",
            cause: "Cercospora Leaf Spot is a common fungal disease that affects a variety of plants, including crops such as beans, cucumbers, and spinach, as well as ornamental plants. It is caused by fungi of the genus Cercospora. The disease can lead to reduced photosynthesis and overall plant vigor, resulting in significant yield losses.",
            image: "/images/vegetables/Cercospora Leaf Spot in Spinach.jpg"
        },
        {
            id: 5,
            name: "Clubroot (Cabbage)",
            cause: "Clubroot is a serious soil-borne disease that affects cabbage and other cruciferous crops, including broccoli, cauliflower, and Brussels sprouts. It is caused by the pathogen Plasmodiophora brassicae, a type of protist. The disease can lead to significant yield losses and is particularly problematic in cool, wet conditions.",
            image: "/images/vegetables/Clubroot (Cabbage and Broccoli).jpg"
        },
        {
            id: 6,
            name: "Damping Off (Seedlings)",
            cause: "ADamping off is a term used to describe a complex of diseases that affect seedlings, leading to their decay and death shortly after germination. It is caused by a variety of fungal pathogens, including those from the genera Pythium, Rhizoctonia, and Botrytis. This disease is especially common in greenhouse settings and can severely impact seedling production.",
            image: "/images/vegetables/Damping Off (Seedlings).png"
        },
        {
            id: 7,
            name: "Downy Mildew (Lettuce)",
            cause: "Downy mildew is a significant fungal disease affecting lettuce and other leafy greens, characterized by the presence of downy, grayish-white fungal growth on the underside of leaves. The disease is caused primarily by the pathogen Bremia lactucae, which can lead to severe crop losses and is particularly problematic in cool, humid conditions.",
            image: "/images/vegetables/Downy Mildew on Lettuce.jpg"
        },
        {
            id: 8,
            name: "Fusarium Wilt (Tomatoes)",
            cause: "Fusarium wilt is a serious soil-borne disease that affects tomato plants, caused by the fungus Fusarium oxysporum f.sp. lycopersici. This disease can lead to significant yield losses and is particularly challenging to manage due to its persistence in the soil.",
            image: "/images/vegetables/Fusarium Wilt (Tomatoes).jpg"
        },
        {
            id: 9,
            name: "Late Blight (Potatoes)",
            cause: "Late blight is a devastating disease affecting potato and tomato plants, primarily caused by the oomycete pathogen Phytophthora infestans. This disease is notorious for its ability to cause rapid crop losses and is often associated with cool, moist conditions.",
            image: "/images/vegetables/Late Blight (Potatoes).jpg"
        },
        {
            id: 10,
            name: "Leaf Spot (Spinach)",
            cause: "Leaf spot is a common term used to describe various diseases affecting spinach, characterized by the presence of spots or lesions on the leaves. The disease can be caused by several fungal and bacterial pathogens, with the most notable being Cercospora beticola and Alternaria species. Leaf spot diseases can lead to reduced crop quality and yield if not managed effectively.",
            image: "/images/vegetables/Leaf Spot in Spinach.jpg"
        },
        {
            id: 11,
            name: "Onion Smut",
            cause: "Onion smut is a fungal disease caused by the pathogen Urocystis cepulae, affecting onions and related allium crops. This disease is characterized by the formation of dark, smutty galls on bulbs, leaves, and flowers, leading to significant crop losses if not managed properly.",
            image: "/images/vegetables/Onion Smut.jpg"
        },
        {
            id: 12,
            name: "Powdery Mildew (Cucurbits)",
            cause: "Powdery mildew is a common fungal disease that affects a wide range of cucurbit crops, including cucumbers, squash, pumpkins, and melons. It is caused by several species of fungi, most notably Podosphaera xanthii and Erysiphe cichoracearum. The disease is characterized by the appearance of white, powdery fungal growth on the leaves and stems, which can lead to significant crop losses if not managed effectively.",
            image: "/images/vegetables/Powdery Mildew (Cucurbits).jpg"
        },
        {
            id: 13,
            name: "Pythium Root Rot (Cucumber)",
            cause: "Pythium root rot is a serious disease affecting cucumber plants, caused by various species of the water mold genus Pythium. This disease can lead to significant yield losses, especially in conditions where the soil is overly saturated and poorly drained.",
            image: "/images/vegetables/Pythium Root Rot (Cucumber).jpeg"
        },
        {
            id: 14,
            name: "Root Knot Nematodes",
            cause: "Root knot nematodes (RKN), particularly species of the genus Meloidogyne, are parasitic roundworms that cause significant damage to a wide range of crops, including vegetables, fruits, and ornamentals. These nematodes are known for inducing characteristic galls or knots on the roots, which can severely affect plant health and yield.",
            image: "/images/vegetables/root knot nematodes.png"
        },
        {
            id: 15,
            name: "White Mold (Beans)",
            cause: "White mold, also known as sclerotinia stem rot, is a fungal disease caused by Sclerotinia sclerotiorum. This disease affects various crops, particularly beans, and can lead to significant yield losses if not managed properly. White mold is characterized by the presence of white, fluffy fungal growth and the formation of sclerotia, which are hard, black structures that can survive in the soil for years.",
            image: "/images/vegetables/Pythium Root Rot (Cucumber).jpeg"
        },
    ]

    const [currentPage, setCurrentPage] = useState(0);
    const diseasesPerPage = 4;

    // Calculate the number of pages
    const pageCount = Math.ceil(vegetableDisease.length / diseasesPerPage);

    // Get the current diseases based on the current page
    const indexOfFirstDisease = currentPage * diseasesPerPage;
    const currentDiseases = vegetableDisease.slice(indexOfFirstDisease, indexOfFirstDisease + diseasesPerPage);

    // Handle page click
    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-center w-full bg-emerald-50'>
            <div className='px-1 py-2 flex flex-col gap-5 flex-wrap h-auto  w-10/12 items-center justify-center pt-10'>
                <div className='flex gap-5 flex-wrap items-center justify-center w-full'>
                    {currentDiseases.map((vege) => (
                        <div
                            onClick={()=>navigate("/diseases/vegetable/" + vege.id)}
                            key={vege.name}
                            className='w-64 h-80 bg-white rounded-2xl overflow-hidden p-3 border border-dashed border-emerald-1000 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
                        >
                            <img className='w-full h-1/2 object-cover rounded-2xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ' src={vege.image} alt={vege.name} />
                            <div>
                                <h1 className='text-emerald-1000 text-xl font-medium' title={vege.name}>
                                    {vege.name.length > 19 ? `${vege.name.slice(0, 18)}...` : vege.name}
                                </h1>
                                <p className='text-xs p-1 text-justify'>
                                    {vege.cause.length > 230 ? `${vege.cause.slice(0, 230)}...` : vege.cause}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='pt-5'>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                            </svg>
                        }
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        containerClassName='flex gap-5 '
                        activeClassName='text-emerald-900 font-semibold '
                        previousLabel={
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                            </svg>
                        }
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </div>
    )
}

export default Vegetables