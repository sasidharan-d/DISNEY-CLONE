import React, { useState } from 'react'
import logo from '../assets/images/disney_logo.png'
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiPlus,
  HiEllipsisVertical,
} from 'react-icons/hi2'

import Headeritems from './Headeritems'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const menu = [
    { name: 'HOME', icon: HiHome },
    { name: 'SEARCH', icon: HiMagnifyingGlass },
    { name: 'WATCH LIST', icon: HiPlus },
    { name: 'ORIGINALS', icon: HiStar },
    { name: 'MOVIES', icon: HiPlayCircle },
    { name: 'SERIES', icon: HiTv },
  ]

  return (
    <div className="flex items-center justify-between p-4 relative">
      {/* Logo (left) */}
      <img
        src={logo}
        alt="logo"
        className="w-[60px] md:w-[90px] lg:w-[115px] object-cover"
      />

      {/* Centered icons (desktop) */}
      <div className="hidden md:flex gap-4 lg:gap-6 flex-1 justify-center">
        {menu.map((item) => (
          <Headeritems
            key={item.name}
            name={item.name}
            Icon={item.icon}
          />
        ))}
      </div>

      {/* Centered icons + dots menu (mobile) */}
      <div className="flex md:hidden gap-3 relative justify-center flex-1">
        {menu.slice(0, 3).map((item) => (
          <Headeritems key={item.name} name="" Icon={item.icon} />
        ))}

        <button
          onClick={() => setToggle(!toggle)}
          className="text-white focus:outline-none"
        >
          <Headeritems name="" Icon={HiEllipsisVertical} />
        </button>

        {toggle && (
          <div className="absolute top-full mt-2 right-0 z-50 bg-[#121212] border border-gray-700 rounded-lg px-4 py-2 shadow-lg min-w-[140px]">
            {menu.slice(3).map((item) => (
              <Headeritems
                key={item.name}
                name={item.name}
                Icon={item.icon}
              />
            ))}
          </div>
        )}
      </div>

      {/* Profile (right, all sizes) */}
      <img
        src="https://cdn-icons-png.flaticon.com/128/4140/4140061.png"
        alt="profile"
        className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] cursor-pointer"
      />
    </div>
  )
}

export default Header