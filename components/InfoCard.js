import React from 'react'
import Image from 'next/image'
import { HeartIcon, StarIcon } from '@heroicons/react/24/outline'
function InfoCard({image, location, address, title, price, total, star, description}) {
  
  return (
    <div className='flex py-7 px-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
        
    <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
    <Image  src={image.pictureUrl} alt="" fill style={{objectFit: "cover"}} className="rounded-2xl"/>
    </div>
  <div className='flex flex-col flex-grow pl-5 pr-4'> 
  <div className='flex justify-between'>
    <p className=''>{address}</p>
    <HeartIcon className='h-7 cursor-pointer'/>
  </div>
  <h3 className='text-xl'>{title}</h3>
  <div className='border-b w-10 pt-2'/>
  <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>

  <div className='flex justify-between items-end pt-5'>
    <div className='flex gap-2 text-center'>
        <StarIcon className='h-5 text-red-500'/>
        <p className='text-gray-600'>{star}</p>
    </div>
    <div>
        <p className='text-lg lg:text-xl font-semibold pb-2'>{price.rate.amountFormatted}/ {price.rateType}</p>
        <p className='text-right font-light'>{total} guest</p>
    </div>
  </div>
  </div>
    </div>
  )
}

export default InfoCard