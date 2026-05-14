import  {  useRef, useState } from "react";

import { fetchSearchedMovie } from "../utils/axios";

export const Hero = ({
  heroMovie,
  setHeroMovie,
  addToWatchList,
  handleOnTrailer,
  genreName,
  loading,
}) => {
    const searchedMovie = useRef("");
  const [errorMessage, setErrorMessage] = useState("");



  if (loading ) return (
 
<div className="d-flex justify-content-center align-items-center mt-5 text-white">
  <button class="btn loading-btn" type="button" disabled>
  <span class="spinner-border spinner-border-lg" aria-hidden="true"></span>
  <span role="status"> Fetching Movies from TMDB ...</span>
</button>
</div>

  ) 
  if (!heroMovie) return null;

  const {
    id,

    title,
    overview,
    poster_path,
    vote_average,
    release_date,
    genre_ids,
  } = heroMovie;


  const handleOnSearchMovie = async () => {
    const searchedMovieName = searchedMovie.current.value;

    const searchedMovieData = await fetchSearchedMovie(searchedMovieName);
    if (searchedMovieData.results.length === 0) {
      setErrorMessage("Movie not found !! Try again");
      return;
    }
    setErrorMessage("");
    setHeroMovie(searchedMovieData.results[0]);
  };

  return (
    <>

      <div className="hero container mt-2 pt-4 pb-3 ">

    <div className="search-area d-flex justify-content-center align-items-center flex-column">
          <div className="input-group mb-3 ">
            <input
              ref={searchedMovie}
              type="text"
              className="form-control"
              placeholder=" Search Moive By Title"
              aria-label="Recipient’s username"
              aria-describedby="basic-addon2"
            />
            <button
              className="input-group-text btn btn-danger"
              id="basic-addon2"
              onClick={handleOnSearchMovie}
            >
              Search movie
            </button>
          </div>
          <div className="errormsg">
            {errorMessage && (
              <p className="text-danger text-center">{errorMessage}</p>
            )}
          </div>
        </div>

        <div className="container heromovie-wrapper d-flex p-3 gap-4 border rounded-4  ">
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
              <button
                className="bg-danger btn-edit"
                onClick={() => handleOnTrailer(id)}
              >
                <i className="bi bi-play-circle-fill"></i> watch Trailor
              </button>
              <button
                className="bg-success btn-edit"
                onClick={() => addToWatchList(heroMovie)}
              >
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
