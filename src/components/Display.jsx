
import { Moviecard } from "./Moviecard";

export const Display = ({
  movies,
  watchList,
  addToWatchList,
  removeFromWatchList,
  handleOnTrailer,
  activeTab,
  genreName,
}) => {
  return (
    <>
      <div className="display-wrapper mt-3 ">
        <div className="container moviecard-wrapper rounded-3">
          <span className="light-text ">{activeTab}</span>
          <div className="row mt-3 gy-3">
            {movies.slice(0, 6).map((movie) => (
              <div className="col-md-6 col-lg-4" key={movie.id}>
                <Moviecard
                  movie={movie}
                  addToWatchList={addToWatchList}
                  handleOnTrailer={handleOnTrailer}
                  genreName={genreName}
                />
              </div>
            ))}
          </div>
        </div>

        {watchList && watchList.length > 0 && (
          <div className="container moviecard-wrapper mt-3 rounded-3">
            <span className="light-text ">Watchlist</span>
            <div className="row mt-3 gy-3">
              {watchList.map((movie) => (
                <div className="col-md-6 col-lg-4" key={movie.id}>
                  <Moviecard
                    movie={movie}
                    isWatchList={true}
                    removeFromWatchList={removeFromWatchList}
                    handleOnTrailer={handleOnTrailer}
                    genreName={genreName}
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
