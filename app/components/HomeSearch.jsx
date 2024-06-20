"use client"

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

function HomeSearch() {
  const [input,setinput] = useState('')
  const router = useRouter()
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`)
  }
  const randomSearch = async (e) =>{
    const response = await fetch('https://random-word-api.herokuapp.com/word')
    .then((res) => res.json())
    .then((data) => data[0])
   if(!response) return;
   router.push(`/search/web?searchTerm=${response}`)
  }
  return (
    <>
      <form className="flex w-full mx-auto max-w-[90%]
      border border-gray-200 px-5 py-3 rounded-full
      hover:shadow-md focus-within:shadow-md
      transition-shadow sm:max-w-xl lg:max-w-2xl"
      onSubmit={handleSubmit}>
        <AiOutlineSearch className="text-gray-500 text-xl mr-3"/>
        <input type="text" className="flex-grow
         focus:outline-none"
         onChange={e => setinput(e.target.value)}/>
        <BsFillMicFill className="text-lg"/>
      </form>
      <div className="flex sm:flex-col lg:flex-row space-y-2
      ">
        <button className="bg-[#F8F9FA] rounded-md
        text-sm text-gray-800 hover:ring-gray-200 focus:outline-none
        active:ring-gray-300 hover:shadow-md w-36 h-10
        transition-shadow mt-2"
        onclick = {handleSubmit}
        >
            Google search
        </button>
        <button className="bg-[#F8F9FA] rounded-md
        text-sm text-gray-800 hover:ring-gray-200 focus:outline-none
        active:ring-gray-300 hover:shadow-md w-36 h-10
        transition-shadow mt-2"
        onclick = {randomSearch}
        >
              I am Feeling Lucky
        </button>
      </div>
    </>
  )
}

export default HomeSearch
