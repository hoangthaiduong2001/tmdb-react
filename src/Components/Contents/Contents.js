  import React, { useEffect } from 'react'
  import { useDispatch, useSelector } from 'react-redux'
  import MovieRow from './MovieRow'
  import * as actions from '../../store/action'

const Contents = () => {
  const dispatch = useDispatch()
  const { TrendingMovies } = useSelector(state => state.infoMovies)
  useEffect(() => {
    dispatch(actions.getTrendingMovies())
  }, [])
  // console.log(TrendingMovies)
  return (
    <div className='flex flex-col px-[128px]'>
      <div className='flex gap-4 px-10 my-8'>
        <h2 className='text-2xl font-bold'>Trending</h2>
        <div className='flex border-solid border-2 border-[rgba(3,37,65,1)] gap-1 rounded-r-full rounded-l-full'>
          <button className='text-[rgb(175,250,203)] bg-[rgba(3,37,65,1)] rounded-r-full rounded-l-full py-1 px-5'>Today</button>
          <button className='text-[rgba(#032541)] py-1 px-5'>This Week</button>
        </div>
      </div>
      <MovieRow />
    </div>
  )
}

export default Contents