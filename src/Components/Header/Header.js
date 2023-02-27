import React from 'react'
import Logo from '../../Asset/logo.png'
import icons from '../../icons/icons'

const { GrAdd, FaSearch} = icons

const Header = () => {
  return (
    <div className='flex justify-between bg-[rgb(3,37,65)] px-[64px] py-4'>
        <div className='px-10 w-[250px] gap-8 flex items-center text-white'>
            <img src={Logo} />
            <span>Movies</span>
            <span>TVShow</span>
            <span>People</span>
            <span>More</span>
        </div>
        <div className='flex gap-5   justify-center items-center px-10 text-white'>
            <GrAdd />
            <span className='border border-white rounded-md px-1'>EN</span>
            <span>Login</span>
            <span>JoinTMDB</span>
            <FaSearch />
        </div>
    </div>
  )
}

export default Header