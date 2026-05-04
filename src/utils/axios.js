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
export const fetchGenre = async () => {
  const response = await axios.get(`${baseURL}/genre/movie/list`, options);
  return response.data.genres;
};
