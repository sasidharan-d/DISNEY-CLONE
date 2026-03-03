import React from 'react'
import disney from '../assets/images/disney-pic.png'
import marvel from '../assets/images/marvel-logo.png'
import national from '../assets/images/national-geographic-logo.png'
import pixar from '../assets/images/pixar-logo.png'
import starwar from '../assets/images/star-wars-logo.png'

import disneyV from '../assets/videos/Disney-gif.gif'
import marvelV from '../assets/videos/Endgame-gif.gif'
import nationalGV from '../assets/videos/National-Geographic.gif'
import pixarV from '../assets/videos/Pixar-gif.gif'
import starwarV from '../assets/videos/Star-wars.gif'
function ProductionHouse() {
  const productionHouseList=[
    {
      id:1,
      image:disney,
      video:disneyV
    },
    {
      id:2,
      image:pixar,
      video:pixarV
    },
    {
      id:3,
      image:marvel,
      video:marvelV
    },
    {
      id:4,
      image:starwar,
      video:starwarV
    },
    {
      id:5,
      image:national,
      video:nationalGV
    },
  ]
  
  return (
    <div className='flex items-center gap-5 p-2 px-5 md:px-16   '>
      {productionHouseList.map((item)=>(
        <div className='border-[2px] border-gray-600 rounded-lg h-[150px] flex items-center justify-center w-[300px] hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800 group'> 
          <img src={item.video} autoPlay muted loop playsInline className='absolute top-0 rounded-md z-0 opacity-0 group-hover:opacity-50 h-[150px] w-[300px] object-cover transition-opacity duration-300'/>
          <img src={item.image} alt="logo" className='w-[180px] z-[1] overflow-hidden h-[100px] cursor-pointer pointer-evens-none' />
          
        </div>
      )
        )}
      </div>
  )
}

export default ProductionHouse