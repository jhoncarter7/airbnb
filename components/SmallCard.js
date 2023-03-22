import React from 'react'
import Image from 'next/image'
function SmallCard({image, location, distance}) {
  return (
    <div className='flex m-2 mt-5 space-x-4 items-center hover:bg-gray-100 rounded-xl hover:scale-105 transition transform duration-200 ease-out cursor-pointer resize-none' >
        <div className='relative h-16 w-16 '>
        <Image className='rounded-lg' src={image} alt='' fill/>
        </div>
        <div>
            <h2>{location}</h2>
            <h3 className='items-center'>{distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard