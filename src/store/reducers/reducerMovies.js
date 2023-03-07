import * as Types from '../types';

const reducerMoviesInitialState = {
    TrendingMovies: null,
    MovieDetail: null,
    SearchMovies: null,
    LatestMovies: null,
    VideoMovies: null
}
const reducerMovies = (state = reducerMoviesInitialState, action) => {
    const {type, payload} = action;
    switch(type){
          
        case Types.GET_TRENDING_MOVIES:
            return {...state, TrendingMovies: payload}
          
        case Types.SET_MOVIE_DETAIL:
            return {...state, MovieDetail: payload}

        case Types.GET_SEARCH_MOVIES:
            return {...state, SearchMovies: payload}

        case Types.GET_SEARCH_MOVIES:
            return {...state, LatestMovies: payload}

        case Types.GET_VIDEO_MOVIES:
            return {...state, VideoMovies: payload}
        default:
            return state
    }
}
export default reducerMovies;
