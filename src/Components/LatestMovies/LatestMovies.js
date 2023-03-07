import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/action";

const LatestMovies = () => {
    // const dispatch = useDispatch()
    // const { LatestMovies } = useSelector((state) => state.infoMovies)
    // useEffect(() => {
    //     dispatch(actions.getLatestMovies())
    //     console.log(LatestMovies)
    // }, [])
    const dispatch = useDispatch()
    const { VideoMovies } = useSelector((state) => state.infoMovies)
    useEffect(() => {
        dispatch(actions.getVideoMovies())
    }, [])
    console.log(VideoMovies)

  return (
    <div>LatestMovies</div>
  )
}

export default LatestMovies