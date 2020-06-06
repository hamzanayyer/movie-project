import * as axios from "axios";

const apiMovie = axios.create({
  baseURL: "https://api.themoviedb.org/4",
});

apiMovie.interceptors.request.use((req) => {
  req.headers["Authorization"] =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTZjY2FjYjc4NjZjYjU1NGUzYzM3ZTdmNGYzYmRiZSIsInN1YiI6IjVlZGFhZTdkZjM2YTMyMDAxZTg2YjFiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dJyJvS2MVaMGlbfLxwl90I4vBpDMUA7r5gFDfRnEqTU";
  return req;
});

export default apiMovie;

export const apiMovieMap = (m) => ({
  img: "https://image.tmdb.org/t/p/w500" + m.poster_path,
  title: m.title,
  details: `${m.release_date} | ${m.vote_average}/10 (${m.vote_count})`,
  description: m.overview,
});
