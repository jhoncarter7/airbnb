import React from 'react'
import Image from 'next/image'
function LargeCard({image, title, description, buttonText}) {
  return (
    <section className='relative py-16 cursor-pointer'>
      <div className='relative h-96 min-w-[300px]'>
        <Image src={image} alt="" fill style={{objectFit:'cover' }} className='rounded-2xl'/>
      </div>
      <div className='absolute top-32 left-12'>
      <h1 className='text-4xl mb-2 w-64'>{title}</h1>
      <h3>{description}</h3>
      <button className='bg-black text-white px-4 py-2 rounded-xl mt-5 text-sm'>{buttonText}</button>
      </div>
     
    </section>
  )
}

export default LargeCard