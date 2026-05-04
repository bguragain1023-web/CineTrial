import React, { useEffect } from "react";
import mp from "../assets/mp.jpg";
import { fetchPopularMovie } from "../utils/axios";

export const Hero = ({ heroMovie, genres }) => {
  if (!heroMovie) return null;

  const {
    id,
    original_title,
    title,
    overview,
    poster_path,
    vote_average,
    release_date,
    genre_ids,
  } = heroMovie;

  const genreName = (id) => {
    if (!genres || !Array.isArray(genres) || genres.length === 0) return "";
    const genre = genres.find((g) => g.id === id);
    return genre.name;
  };
  return (
    <>
      <div className="hero container mt-2 pt-4 ">
        <div className="search-area d-flex justify-content-center align-items-center ">
          <div className="input-group mb-3 ">
            <input
              type="text"
              className="form-control"
              placeholder=" Search Moive By Title"
              aria-label="Recipient’s username"
              aria-describedby="basic-addon2"
            />
            <button
              className="input-group-text btn btn-danger"
              id="basic-addon2"
            >
              Search movie
            </button>
          </div>
        </div>

        <div className="container  d-flex p-3 gap-4 border rounded-4  ">
          <div className="image-box">
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
          </div>
          <div className="desc-box">
            <div className="movie-title fjalla-one-regular">{title}</div>
            <div className="movie-detail d-flex gap-3 mt-1">
              <span>{genreName(genre_ids[0])}</span>
              <span>{release_date.split("-")[0]}</span>
              <span>{vote_average.toFixed(1)}</span>
            </div>
            <div className="desc mt-3">{overview}</div>
            <div className="watch-trailer mt-3 d-flex gap-3">
              <button className="bg-danger btn-edit">
                <i className="bi bi-play-circle-fill"></i> watch Trailor
              </button>
              <button className="bg-success btn-edit">
                {" "}
                <i className="bi bi-plus-lg"></i> Add to watchlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
