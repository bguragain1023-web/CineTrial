import React from "react";
import mp from "../assets/mp.jpg";
export const Hero = () => {
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
            <img src={mp} alt="" />
          </div>
          <div className="desc-box">
            <div className="movie-title">Brazzy Man</div>
            <div className="movie-detail d-flex gap-3 mt-1">
              <span>Action</span>
              <span>2021</span>
              <span>7.5</span>
            </div>
            <div className="desc mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              minus repellendus quia earum cupiditate numquam impedit. Laborum,
              unde aspernatur minima earum molestias nisi laboriosam sunt iure
              tempora explicabo corporis officia?
            </div>
            <div className="watch-trailer mt-3 d-flex gap-3">
              <button className="bg-danger btn-edit">watch Trailor</button>
              <button className="bg-success btn-edit">Add to watchlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
