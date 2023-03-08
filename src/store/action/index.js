import axios from "axios";
import * as Types from '../types';

const API_KEY = '0284c6337930ad960073c25bfe182fe8'
const BASE_URL = 'https://api.themoviedb.org/3'


export const getTrendingMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`
        );
        dispatch({type: Types.GET_TRENDING_MOVIES, payload: result.data.results});
    } catch (error) {
        console.log(' Get Trending API error: ', error);
    }
}

export const setMovieDetail = (movie) => dispatch => {
    dispatch({type : Types.SET_MOVIE_DETAIL, payload: movie})
}

export const getSearchMovies = (keywords) => async (dispatch) => {
    try {
        const result = await axios.get(
            `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`
        )
        dispatch({type: Types.GET_SEARCH_MOVIES, payload: result.data.results});
    } catch (error) {
        console.log('Get search movies API error:', error);
    }
}


export const getLatestMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/movie/latest?api_key=${API_KEY}&language=en-US`
        );
        dispatch({type: Types.GET_LATEST_MOVIES, payload: result.data.results});
    } catch (error) {
        console.log(' Get Latest API error: ', error);
    }
}

export const getVideoMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/movie/539885/videos?api_key=${API_KEY}&language=en-US`
        );
        dispatch({type: Types.GET_VIDEO_MOVIES, payload: result.data.results});
    } catch (error) {
        console.log(' Get Latest API error: ', error);
    }
}

export const getComedyMovies = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
        );
        dispatch({type: Types.GET_COMEDY_MOVIES, payload: result.data.results});
    } catch (error) {
        
    }
}



