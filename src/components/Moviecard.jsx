import React from "react";
import mp from "../assets/mp.jpg";

export const Moviecard = () => {
  return (
    <>
      <div className="card card-edit">
        <img src={mp} className="card-img-top" alt="..." />
        <div className="card-body cardbody-edit d-flex flex-column">
          <div className="moviecard-title fjalla-one-regular">Brazzy Man</div>
          <div className="year-rating d-flex justify-content-between">
            <span>2008</span>
            <span>IMDB : 7.7</span>
          </div>
          <div className=" card-btns d-flex gap-3 mt-4">
            <button className="card-btn-r btn-h">
              <i className="bi bi-play-fill"></i> Trailer
            </button>
            <button className="card-btn-g btn-h">
              <i className="bi bi-plus"></i>Watchlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
