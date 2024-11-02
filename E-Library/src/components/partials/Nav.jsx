import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
   
  return (
    <>
    
    <nav className="w-full py-4 px-12 bg-zinc-900 text-emerald-50 font-normal text-1xl flex justify-between">
    <NavLink to={'/'} className="text-2xl font-bold">E-Library</NavLink>
      <div className='flex gap-9 font-semibold'>

        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About us</NavLink>
        <NavLink to={'/login'}>Login</NavLink>
      </div>
    </nav>
    
    </>
  )
}

export default Nav