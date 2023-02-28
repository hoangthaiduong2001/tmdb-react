import React from 'react'
import Logo from '../../Asset/logo.png'
import icons from '../../icons/icons'

const { FaPlus, FaSearch} = icons

const Header = () => {
  return (
    <div className='flex justify-between bg-[rgb(3,37,65)] px-[80px] py-5'>
        <div className='px-[70px] w-[300px] gap-8 flex items-center text-white'>
            <img src={Logo} />
            <span>Movies</span>
            <span>TVShow</span>
            <span>People</span>
            <span>More</span>
        </div>
        <div className='px-[70px] flex gap-8 justify-center items-center text-white'>
            <FaPlus />
            <span className='border border-white rounded-md px-1'>EN</span>
            <span>Login</span>
            <span>JoinTMDB</span>
            <FaSearch size={22} className='text-blue-500' />
        </div>
    </div>
  )
}

export default Header