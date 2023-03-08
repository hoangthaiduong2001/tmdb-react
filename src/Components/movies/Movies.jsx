import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Movies.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/action"

function Movies({ title, isTrailer }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const dispatch = useDispatch()
  const { ComedyMovies } = useSelector(state => state.infoMovies)
  useEffect(() => {
    dispatch(actions.getComedyMovies())
  }, [])
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(fetchUrl);
  //     setMovies(request.data.results);
  //     return request;
  //   }

  //   fetchData();


  // }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1
    }
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.title ||
          movie?.original_title ||
          movie?.name ||
          movie?.original_name ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="movies">
      <h2 className="category-title">{title}</h2>

      <div className="row-posters">
        {ComedyMovies?.map((movie) => {
          return (
            <div key={movie.id} className="each-movie-box">
              <img
                onClick={() => {
                  handleClick(movie);
                }}
                className={`row-poster ${isTrailer && "row-poster-small"}`}
                src={`${imageBaseUrl}${
                  isTrailer ? movie.backdrop_path : movie.poster_path
                }`}
                alt={movie.name}
              />
              <div className="row-poster-content">
                <h2 className="movie-title">
                  {movie?.title ||
                    movie?.original_title ||
                    movie?.name ||
                    movie?.original_name}
                </h2>
              </div>
            </div>
          );
        })}
        <div className="row-posters-blur"></div>
      </div>

      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Movies;
