"use client"

import { useEffect, useState } from "react"

function CountryLockup() {
  const [country,setCountry] = useState('')
  useEffect(() =>{
    const getCountry = async () =>{
        const response = await fetch('https://extreme-ip-lookup.com/json')
            .then((res) => res.json())
            .then((data) =>data.country)
        if(!response) return
        setCountry(response)
    }
    getCountry()
  },[])
  return (
    <div>
      {country}
    </div>
  )
}

export default CountryLockup
