import axios from "axios";
const movieBaseUrl = "https://api.themoviedb.org/3"

const movieByGenreURL = 'https://api.themoviedb.org/3/genre/movie/list?'

const  api_key='57ad1c99d767e4573bb26b84504529e4'
//'https://api.themoviedb.org/3/movie/11'
const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key)
const getMovieByGenreId=(id)=>axios.get(`${movieBaseUrl}/discover/movie?api_key=${api_key}&with_genres=${id}`
)
export default{
  getTrendingVideos
  ,getMovieByGenreId

}