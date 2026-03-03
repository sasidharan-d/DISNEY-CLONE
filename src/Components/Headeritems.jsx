import React from 'react'

function Headeritems({name,Icon}) {
  return (
    <div className='flex text-white item-center gap-2 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 justify-start mb-3 '>
      <Icon className="w-5 h-5 md:w-6 md:h-6"/>
      <h2 className=''>{name}</h2>
    </div>
  )
}

export default Headeritems