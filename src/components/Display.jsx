import React from "react";
import { Moviecard } from "./Moviecard";

export const Display = ({
  movies,
  watchList,
  addToWatchList,
  removeFromWatchList,
  handleOnTrailer,
  activeTab,
}) => {
  return (
    <>
      <div className="display-wrapper mt-3 ">
        <div className="container moviecard-wrapper border">
          <span className="light-text ">{activeTab}</span>
          <div className="row mt-3 gy-3">
            {movies.slice(0, 6).map((movie) => (
              <div className="col-md-4" key={movie.id}>
                <Moviecard
                  movie={movie}
                  addToWatchList={addToWatchList}
                  handleOnTrailer={handleOnTrailer}
                />
              </div>
            ))}
          </div>
        </div>

        {watchList && watchList.length > 0 && (
          <div className="container moviecard-wrapper mt-3 border">
            <span className="light-text ">Watchlist</span>
            <div className="row mt-3 gy-3">
              {watchList.map((movie) => (
                <div className="col-md-4" key={movie.id}>
                  <Moviecard
                    movie={movie}
                    isWatchList={true}
                    removeFromWatchList={removeFromWatchList}
                    handleOnTrailer={handleOnTrailer}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
