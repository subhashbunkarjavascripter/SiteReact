import React from 'react'

const Search = ({query, setQuery}) => {
  return (
     
     <div className="w-full  flex justify-center">
        <div className="flex gap-1 items-center shadow-lg px-2 justify-center bg-slate-50 border mt-4 w-2/5 rounded-full">
          <i className="ri-search-eye-line font-normal text-2xl"></i>
          <input value={query} onChange={(e) =>setQuery(e.target.value) } className='px-2 py-2 text-left w-full focus:outline-none bg-transparent' type="text" placeholder='Search for book...'/>
        </div>
                  
      </div>
     
  )
}

export default Search