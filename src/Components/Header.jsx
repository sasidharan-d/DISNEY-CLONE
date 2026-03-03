import React, { useState } from 'react'
import logo from '../assets/images/disney_logo.png'
import {HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv} from 'react-icons/hi2';

import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import Headeritems from './Headeritems';

const Header = () => {
  const [toggle,setToggle]=useState(false)
  const menu=[
    {
      name:'HOME',
      icon:HiHome
    },
    {
      name:'SEARCH',
      icon:HiMagnifyingGlass
    },
    {
      name:'WATCH LIST',
      icon:HiPlus
    },
    {
      name:'ORIGINALS',
      icon:HiStar
    },
    {
      name:'MOVIES',
      icon:HiPlayCircle
    },
    {
      name:'SERIES',
      icon:HiTv
    }
  ]
  return (
   <div className='flex items-center p-5 justify-between '>
    <div className='flex items-center gap-8 justify-center'>
      <img src={logo} alt="logo" className='w-[80px] md:w-[115px] object-cover'/>
      <div className='hidden md:flex gap-15 ml-[20px]'>
        {menu.map((item) => (
          <Headeritems key={item.name} name={item.name} Icon={item.icon}/>
        ))}
      </div>
      <div className='flex md:hidden gap-12 ml-[20px]'>
        {menu.map((item,index) =>index<3&& (
          <Headeritems key={item.name} name={''} Icon={item.icon}/>
        ))}
        <div className='text-white md:hidden' onClick={()=>setToggle(!toggle)}>
          <Headeritems name={''} Icon={HiDotsVertical}/>
          {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4 min-w-[100px]  '>
            {menu.map((item,index) =>index>2&& (
          <Headeritems key={item.name} name={item.name} Icon={item.icon}/>
           ))}
          </div>:null}
        </div>
      </div>
    </div>
    <img src="https://cdn-icons-png.flaticon.com/128/4140/4140061.png" alt="profile" className='w-[40px] h-[40px] cursor-pointer' />
  </div>
  )
}

export default Header