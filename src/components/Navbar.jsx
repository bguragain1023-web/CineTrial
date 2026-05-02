import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="nav  ">
        <div className="navigation-bar d-flex justify-content-between align-items-center container">
          <div className="left d-flex gap-3 justify-content-between align-items-center ">
            <i className="fa-solid fa-video"></i>
            Movie world
          </div>
          <div className="right d-flex gap-4">
            <a href="">Trending</a>
            <a href="">Action</a>
            <a href="">Drama</a>
          </div>
        </div>
      </div>
    </>
  );
};
