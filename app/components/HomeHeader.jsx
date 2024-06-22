import Link from 'next/link'
import { TbGridDots } from "react-icons/tb";
function HomeHeader() {
  return (
      <header className='flex justify-end p-5 text-sm'>
        <div className='flex space-x-4 items-center'>
            <Link href={"https://mail.google.com"}
            className='hover:underline'>
                Gmail
            </Link>
            <Link href={"https://image.google.com"}
            className='hover:underline'>
                Image
            </Link>
            <TbGridDots className='text-gray hover:brightness-105 hover:shadow-md transition-shadow'/>
           <button className='bg-blue-500 text-white
           px-6 py-2 rounded-md font-medium
           hover:brightness-105 hover:shadow-md
           transition-shadow'>Sign in</button>
        </div>
      </header>
  )
}

export default HomeHeader
