import axios from "axios";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const apiToken = import.meta.env.VITE_TMDB_TOKEN;
const baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization: `Bearer ${apiToken}`,
  },
};

export const fetchPopularMovie = async () => {
  const response = await axios.get(`${baseURL}/movie/popular`, options);

  return response.data;
};

export const fetchSearchedMovie = async (searched) => {
  const response = await axios.get(
    `${baseURL}/search/movie?query=${searched}`,
    options,
  );
  return response.data;
};

export const fetchTrailer = async (id) => {
  const response = await axios.get(`${baseURL}/movie/${id}/videos`, options);
  console.log("All videos:", response.data.results);
  const trailer = response.data.results.find(
    (video) => video.site == "YouTube" && video.type == "Trailer",
  );
  console.log("Matched trailer:", trailer);
  return trailer?.key;
};

export const fetchGenre = async () => {
  const response = await axios.get(`${baseURL}/genre/movie/list`, options);
  return response.data.genres;
};
export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${baseURL}/trending/movie/day`, options);
  return response.data;
};

export const fetchByGenre = async (genreId) => {
  const response = await axios.get(
    `${baseURL}/discover/movie?with_genres=${genreId}`,
    options,
  );
  console.log(response.data);

  return response.data;
};
