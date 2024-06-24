import React from 'react'

export default async function Web({ searchParams }) {
  
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
        process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
    );
    const data = await response.json()
    const results = data.items
   


  return (
    <div>
      Web
      {results && results.map((result) =><h1>{result.title}</h1>)}
    </div>
  )
}

//https://www.googleapis.com/customsearch/v1?key=AIzaSyDg10NJXaHAD3TStW9ZgE-5WxqjpwqEpk0&cx=b4e7f78ce22774cdb&q=lectures

