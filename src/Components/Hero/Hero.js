import React from 'react'
import bg_search from '../../Asset/bg_search.jpg'
import { Button } from 'antd';

const Hero = () => {
  return (
    <div className='px-[128px] flex'>
      <div className='relative'>
        <img src={bg_search} style={{width: '1300px', height: '300px'}} className='object-cover opacity-90'/>
      </div>
      <div className='absolute flex flex-col gap-8 px-[40px] py-[30px] max-w-[1300px] w-full'>
        <div className='text-white w-full'>
          <h2 className='text-[48px]'>Welcome.</h2>
          <h3 className='text-[32px]'>Millions of movies, TV shows and people to discover. Explore now.</h3>
        </div>
        <div className='flex justify-between w-full'>
          <input type='text' placeholder='Search for a movie, tv show, person......' className='rounded-[30px] w-full'/>
          <button>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Hero