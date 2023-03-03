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
  console.log(TrendingMovies)
  return (
    <div className='flex flex-col px-[128px]'>
      <div className='flex gap-4'>
        <h2>Treding</h2>
        <div className='flex'>
          <button>Today</button>
          <button>This Week</button>
        </div>
      </div>
      <MovieRow />
    </div>
  )
}

export default Contents