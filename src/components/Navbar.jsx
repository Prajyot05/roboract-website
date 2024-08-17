import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex p-5 fixed'>
        <div className="nav-left flex items-center">
            <img className='w-[4rem]' src="/assets/logo.png" alt="" />
            <h2 className='text-3xl pl-2 font-semibold'>Rotaract Club</h2>
        </div>
        <div className="nav-right"></div>
    </div>
  )
}

export default Navbar