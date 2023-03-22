import React from 'react'
import Image from 'next/image'
import {MagnifyingGlassIcon, GlobeAltIcon,Bars3Icon, UserCircleIcon} from '@heroicons/react/24/solid'
function Header() {
  return (
    <header className='sticky z-50 shadow-md grid grid-cols-3 p-5 md:px-10'>
        {/* left */}
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
           <Image  style={{ objectFit:'contain', objectPosition:'left',}}  src="https://links.papareact.com/qd3" fill alt='' />
        </div>


        {/* mid */}
        <div className='flex md:border-2  rounded-full py-2 md:shadow-sm'>
          <input className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' type='text' placeholder='start your search'/>
          <MagnifyingGlassIcon className='hidden lg:inline-flex h-8 bg-red-400 rounded-full p-2 cursor-pointer text-white mx-2'/>
        </div>


        {/* right */}
        <div className='flex space-x-4 items-center justify-end'>
          <p className='hidden md:inline cursor-pointer'>Become a host</p>
          <GlobeAltIcon className='h-6 cursor-pointer'/>
          <div className='flex space-x-2 border-2 p-2 rounded-full cursor-pointer'>
            <Bars3Icon className='h-6'/>
            <UserCircleIcon className='h-6'/>
          </div>
        </div>
    </header>
  )
}

export default Header