import React from 'react'
import Image from 'next/image'

function MediumCard({image, title}) {
  return (
    <div className='cursor-pointer hover:scale-105 transition-all transform duration-300 ease-out '>
        <div className='relative h-80 w-80'>
            <Image src={image} alt='' fill className='rounded-xl' />
        </div>
        <h3 className='sm:text-lg'>{title}</h3>
    </div>
  )
}

export default MediumCard