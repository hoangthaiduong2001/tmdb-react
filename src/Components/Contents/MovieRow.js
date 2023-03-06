import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/action";
import moment from "moment/moment"
import bg_trending from '../../Asset/bg-trending.svg'



const MovieRow = () => {
  const dispatch = useDispatch();
  const { TrendingMovies } = useSelector((state) => state.infoMovies);
  useEffect(() => {
    dispatch(actions.getTrendingMovies());
  }, []);
  // console.log(TrendingMovies);
  return (
    <div className="flex flex-col">
      <img  src={bg_trending} className="relative pt-[100px]"/>
      <div className="flex gap-4 absolute px-10">
        {TrendingMovies?.filter((item, index) => index < 7 )?.map((item) => (     
          <div className="" key={item?.id}>
            <img
              style={{ width: "155px", height: "255px" }}
              src={`http://image.tmdb.org/t/p/original/${item?.backdrop_path}`}
              className="object-cover rounded-md"
            />
            <div className="max-w-[160px] flex flex-col">
              <div className="text-4">{item.name || item.title}</div>
              <div className="text-4 text-gray-500">{moment(item?.release_date).format('ll')}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
