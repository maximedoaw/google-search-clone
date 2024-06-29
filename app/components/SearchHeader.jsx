import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import { RiSettings3Fill } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from './SearchHeaderOptions';

function SearchHeader() {
  return (
    <header className='sticky top-0 bg-white z-10'>
      <div className="flex w-full  items-center">
        <Link href='/'>
          <Image
          src="data:image/png;base64,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"
          height={40}
          width={120}
          priority
          style={{ width:'auto' }}
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className=" md:inline-flex space-x-2 sm:hidden">
          <RiSettings3Fill className='  bg-transparent
           hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer' />
          <TbGridDots className=' bg-transparent
           hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer'/>
        </div>
        <button className='bg-blue-500 text-white
           px-6 py-2 rounded-md font-medium
           hover:brightness-105 hover:shadow-md
           transition-shadow'>Sign in</button>
     
      </div>
      <SearchHeaderOptions />
    </header>
  )
}

export default SearchHeader
