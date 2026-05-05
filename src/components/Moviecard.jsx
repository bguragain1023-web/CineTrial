import React from "react";
import mp from "../assets/mp.jpg";

export const Moviecard = ({
  movie,
  addToWatchList,
  isWatchList,
  removeFromWatchList,
  handleOnTrailer,
  genreName,
}) => {
  if (!movie) return null;
  const {
    id,
    title,
    overview,
    poster_path,
    vote_average,
    release_date,
    genre_ids,
  } = movie;
  return (
    <>
      <div className="card card-edit">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body cardbody-edit d-flex flex-column justify-content-between">
          <div className="moviecard-title fjalla-one-regular">{title}</div>
          <div className="year-rating d-flex justify-content-between">
            <span>{release_date.split("-")[0]}</span>
            <span>{genreName(genre_ids[0])}</span>

            <span>IMDB : {vote_average.toFixed(1)}</span>
          </div>
          <div className=" card-btns d-flex gap-3 mt-4">
            <button
              className="card-btn-r btn-h"
              onClick={() => handleOnTrailer(id)}
            >
              <i className="bi bi-play-fill"></i> Trailer
            </button>

            {isWatchList ? (
              <button
                className="card-btn-r btn-h"
                onClick={() => removeFromWatchList(movie)}
              >
                <i className="bi bi-trash3-fill"></i> Remove
              </button>
            ) : (
              <button
                className="card-btn-g btn-h"
                onClick={() => addToWatchList(movie)}
              >
                <i className="bi bi-plus"></i>Watchlist
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
