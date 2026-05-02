import React from "react";
import mp from "../assets/mp.jpg";

export const Moviecard = () => {
  return (
    <>
      <div className="card card-edit">
        <img src={mp} className="card-img-top" alt="..." />
        <div className="card-body cardbody-edit">
          <h5 className="card-title">Card title</h5>
          <div className="year-rating d-flex justify-content-between">
            <span>2008</span>
            <span>7.7</span>
          </div>
          <div className="card-btn d-flex gap-3">
            <button className=" btn btn-edit btn-danger">Watch Trailer</button>
            <button className="btn btn-success btn-edit">Watchlist</button>
          </div>
        </div>
      </div>
    </>
  );
};
