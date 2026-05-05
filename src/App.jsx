import { useEffect, useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { fetchGenre, fetchPopularMovie, fetchTrailer } from "./utils/axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [heroMovie, setHeroMovie] = useState(null);
  const [genre, setGenre] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchRandomMovie = async () => {
      const randomMovies = await fetchPopularMovie();

      const genreList = await fetchGenre();
      setMovies(randomMovies.results);
      setGenre(genreList);

      const random = Math.floor(Math.random() * randomMovies.results.length);

      setHeroMovie(randomMovies.results[random]);
    };
    fetchRandomMovie();
  }, []);

  const addToWatchList = (movie) => {
    const exists = watchList.find((m) => m.id == movie.id);
    if (exists) return;
    setWatchList([...watchList, movie]);
  };

  const removeFromWatchList = (movie) => {
    setWatchList(watchList.filter((m) => m.id !== movie.id));
  };

  const handleOnTrailer = async (movieID) => {
    const key = await fetchTrailer(movieID);
    console.log(key);
    setTrailerKey(key);
    setShowTrailer(true);
  };
  console.log(heroMovie);

  return (
    <>
      <div className="wrapper ">
        <Navbar />

        <Hero
          heroMovie={heroMovie}
          genres={genre}
          setHeroMovie={setHeroMovie}
          addToWatchList={addToWatchList}
          handleOnTrailer={handleOnTrailer}
        />
        <Display
          movies={movies}
          genres={genre}
          watchList={watchList}
          addToWatchList={addToWatchList}
          removeFromWatchList={removeFromWatchList}
          handleOnTrailer={handleOnTrailer}
        />

        {showTrailer && trailerKey && (
          <div
            className="trailer-overlay"
            onClick={() => setShowTrailer(false)}
          >
            <div
              className="trailer-container"
              onClick={(e) => stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setShowTrailer(false)}
              >
                X
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                width="100%"
                height="100%"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}

export default App;
