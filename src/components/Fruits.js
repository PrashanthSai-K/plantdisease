import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

function Fruits() {

  const fruitsDisease = [
    {
      id:1,
      name: "Anthracnose (Mangoes)",
      cause: "Anthracnose (Mangoes) is a common fungal disease that affects mango trees, causing significant damage to the fruit, leaves, flowers, and twigs.Anthracnose is caused by the fungus Colletotrichum gloeosporioides. This fungus thrives in warm, moist conditions, especially during the rainy season, and spreads rapidly on mango trees.",
      image: "/images/fruits/Anthracnose in Mangoes.png"
    },
    {
      id:2,
      name: "Powdery Mildew (Apple)",
      cause: "Powdery Mildew is a fungal disease that affects apple trees, causing white, powdery growth on leaves, shoots, and fruit. This disease can significantly reduce the quality of the fruit and weaken the tree over time.Powdery mildew is caused by the fungus Podosphaera leucotricha. The fungus thrives in warm, dry conditions but requires a humid microclimate on the plant surface to grow.",
      image: "/images/fruits/Apple Powdery Mildew.jpeg"
    },
    {
      id:3,
      name: "Apple Scab",
      cause: "Apple Scab is one of the most common and destructive diseases of apple trees. It affects the fruit, leaves, and sometimes the stems, causing aesthetic damage to the fruit and weakening the tree.Apple scab is caused by the fungus Venturia inaequalis, which thrives in cool, wet conditions, especially during spring and early summer.",
      image: "/images/fruits/Apple Scab.jpg"
    },
    {
      id:4,
      name: "Bacterial Spot (Peaches)",
      cause: "Bacterial Spot is a serious disease that affects peach trees and other stone fruits. It causes unsightly blemishes on the fruit, leaves, and twigs, leading to reduced fruit quality and yield.The disease is caused by the bacterium Xanthomonas campestris pv. pruni. It thrives in warm, wet conditions and is spread by rain, wind, insects, and contaminated equipment.",
      image: "/images/fruits/Bacterial Spot in Peaches.jpg"
    },
    {
      id:5,
      name: "Black Knot (Cherries)",
      cause: "Black Knot is a fungal disease that primarily affects cherry and plum trees. It causes characteristic black, gnarled swellings or `knots` on branches and twigs, leading to reduced fruit production and weakening of the tree.Black Knot is caused by the fungus Apiosporina morbosa. The spores spread through wind and rain, infecting trees during periods of warm, wet weather, especially in the spring.",
      image: "/images/fruits/Black Knot in Cherries.jpg"
    },
    {
      id:6,
      name: "Black Rot (Grapes)",
      cause: "Black Rot is a fungal disease that severely affects grapevines, causing significant damage to the fruit, leaves, and stems. If not properly managed, it can lead to major crop loss and reduced grape quality.Black Rot is caused by the fungus Guignardia bidwellii. It thrives in warm, humid environments and spreads through rain, wind, and contaminated tools or plant material.",
      image: "/images/fruits/Black Rot in Grapes.jpg"
    },
    {
      id:11,
      name: "Gray Mold (Strawberries)",
      cause: "Gray Mold, also known as Botrytis Fruit Rot, is a common fungal disease that affects strawberries and other soft fruits. It primarily targets ripe and overripe fruit but can also infect flowers, stems, and leaves, significantly reducing fruit yield and quality.Gray mold is caused by the fungus Botrytis cinerea. The fungus thrives in cool, damp environments, and its spores spread through air, water, and physical contact between plants.",
      image: "/images/fruits/Botrytis Fruit Rot (Gray Mold) in Strawberries.jpg"
    },
    {
      id:12,
      name: "Citrus Canker",
      cause: "Citrus Canker is a bacterial disease that affects citrus trees, causing lesions on the leaves, fruit, and stems. It can lead to defoliation, fruit drop, and blemished fruit, making it a significant threat to citrus production.Citrus Canker is caused by the bacterium Xanthomonas axonopodis pv. citri. The disease spreads through wind-driven rain, contaminated tools, and the movement of infected plant material.",
      image: "/images/fruits/Citrus Canker.jpg"
    },
    {
      id:13,
      name: "Citrus Greening (Huanglongbing)",
      cause: "Citrus Greening, also known as Huanglongbing (HLB), is one of the most devastating diseases affecting citrus trees worldwide. It leads to poor fruit quality, tree decline, and eventually tree death. Once infected, trees cannot be cured, making early detection and management critical.Citrus Greening is caused by the bacterium Candidatus Liberibacter and is spread by the Asian citrus psyllid (Diaphorina citri), an insect that feeds on the leaves and stems of citrus trees.",
      image: "/images/fruits/Citrus Greening (Huanglongbing).jpeg"
    },
    {
      id:14,
      name: "Crown Gall (Apple)",
      cause: "Crown Gall is a bacterial disease that affects apple trees as well as a wide range of other plants. It causes tumor-like growths, or galls, on the roots and lower trunk, which can stunt growth and reduce the tree's vigor.Crown Gall is caused by the bacterium Agrobacterium tumefaciens. The bacteria enter the plant through wounds in the roots or stems, often caused by pruning, grafting, or insect feeding.",
      image: "/images/fruits/Crown Gall in Apple and Pear.jpg"
    },
    {
      id:15,
      name: "Downy Mildew (Grapes)",
      cause: "Downy Mildew is a serious fungal disease that affects grapevines, causing significant damage to both the foliage and fruit. It can lead to reduced yields and lower fruit quality, making effective management critical for grape growers.Downy Mildew is caused by the oomycete Plasmopara viticola. The disease thrives in warm, humid conditions and spreads through spores carried by wind and water.",
      image: "/images/fruits/Downy Mildew in Grapes.jpg"
    },
    {
      id:16,
      name: "Firblight",
      cause: "Fire Blight is a bacterial disease that primarily affects apple and pear trees, causing significant damage during the growing season. It can lead to tree dieback and reduced fruit production if not managed effectively.Fire Blight is caused by the bacterium Erwinia amylovora. The bacteria can enter trees through blossoms, wounds, and natural openings, often spreading during warm, humid conditions.",
      image: "/images/fruits/firblight.jpg"
    },
    {
      id:17,
      name: "Fusicoccum Canker (Blueberries)",
      cause: "Fusicoccum Canker is a fungal disease that affects blueberry plants, leading to significant damage, particularly in established orchards. It can cause dieback of branches and reduce fruit yields if not properly managed.Fusicoccum Canker is caused by the fungus Fusicoccum putrefaciens, which invades blueberry plants through wounds, often created by pruning, mechanical damage, or environmental stress.",
      image: "/images/fruits/Fusicoccum Canker in Blueberries.png"
    },
    {
      id:18,
      name: "Ringspot Virus (Papaya)",
      cause: "Ringspot Virus is a viral disease that primarily affects papaya plants, causing significant economic losses in papaya production worldwide. It is characterized by distinct symptoms that can severely impact fruit quality and yield.The Ringspot Virus affecting papayas is primarily caused by the Papaya ringspot virus (PRSV), which is transmitted by aphids, particularly the green peach aphid (Myzus persicae), as well as through mechanical means such as contaminated tools and equipment.",
      image: "/images/fruits/Papaya Ringspot Virus.jpg"
    },
    {
      id:7,
      name: "Leaf Curl (Peach)",
      cause: "Leaf Curl is a fungal disease that primarily affects peach and nectarine trees, causing distorted leaves and reduced fruit quality. It can lead to significant economic losses if not managed properly.Leaf Curl is caused by the fungus Taphrina deformans. The fungus typically infects the buds and new leaves in the spring, especially during periods of wet, cool weather.",
      image: "/images/fruits/Peach Leaf Curl.jpg"
    },
    {
      id:8,
      name: "Phytophthora Root Rot (Avocados)",
      cause: "Phytophthora Root Rot is a serious disease affecting avocado trees, leading to significant economic losses in avocado production. It is caused by the soil-borne pathogen Phytophthora cinnamomi, which thrives in saturated soil conditions.",
      image: "/images/fruits/Phytophthora Root Rot in Avocados.JPG"
    },
    {
      id:9,
      name: "Pox Virus (Plum)",
      cause: "Pox Virus is a viral disease that primarily affects plum trees and can significantly impact fruit quality and yield. It is characterized by various symptoms that can lead to economic losses in plum production.The disease is caused by the Plum pox virus (PPV), which is transmitted through aphids, particularly the green peach aphid (Myzus persicae), as well as through mechanical means such as contaminated tools, clothing, and grafting practices.",
      image: "/images/fruits/Plum Pox Virus.jpg"
    },
    {
      id:10,
      name: "Verticillium Wilt (Strawberries)",
      cause: "Verticillium Wilt is a serious fungal disease that affects strawberries and other plants. It is caused by the soil-borne fungus Verticillium dahliae, which can lead to significant reductions in fruit yield and quality.The disease is caused by the fungus Verticillium dahliae, which survives in the soil and infects plants through their root systems. It thrives in cool, moist conditions, making it a significant threat to strawberry crops.",
      image: "/images/fruits/Verticillium Wilt in Strawberries.jpg"
    },
  ]
  
  const [currentPage, setCurrentPage] = useState(0);
  const diseasesPerPage = 4;

  // Calculate the number of pages
  const pageCount = Math.ceil(fruitsDisease.length / diseasesPerPage);

  // Get the current diseases based on the current page
  const indexOfFirstDisease = currentPage * diseasesPerPage;
  const currentDiseases = fruitsDisease.slice(indexOfFirstDisease, indexOfFirstDisease + diseasesPerPage);

  // Handle page click
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className='flex items-center justify-center w-full bg-emerald-50'>
        <div className='px-1 py-2 flex flex-col gap-5 flex-wrap h-auto  w-10/12 items-center justify-center pt-10'>
          <div className='flex gap-5 flex-wrap items-center justify-center w-full'>
            {currentDiseases.map((vege) => (
              <div 
                key={vege.name} 
                onClick={()=>navigate("/diseases/fruits/" + vege.id)}
                className='w-64 h-80 bg-white rounded-2xl overflow-hidden p-3 border border-dashed border-emerald-1000 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
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
    </>
  )
}

export default Fruits