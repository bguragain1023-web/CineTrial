import React from "react";
import { Moviecard } from "./Moviecard";

export const Display = () => {
  return (
    <>
      <div className="display-wrapper mt-3 ">
        <div className="container moviecard-wrapper border">
          <span className="light-text ">popular now</span>
          <div className="row mt-3 gy-3">
            <div className="col-md-3">
              <Moviecard />
            </div>
            <div className="col-md-3">
              <Moviecard />
            </div>
            <div className="col-md-3">
              <Moviecard />
            </div>
            <div className="col-md-3">
              <Moviecard />
            </div>
          </div>
        </div>

        <div className="container moviecard-wrapper mt-3 border">
          <span className="light-text ">Watchlist</span>
          <div className="row mt-3 gy-3">
            <div className="col-md-3">
              <Moviecard />
            </div>
            <div className="col-md-3">
              <Moviecard />
            </div>
            <div className="col-md-3">
              <Moviecard />
            </div>
            <div className="col-md-3">
              <Moviecard />
            </div>
            <div className="col-md-3">
              <Moviecard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
