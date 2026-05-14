import { useEffect, useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import {
  fetchByGenre,
  fetchGenre,
  fetchPopularMovie,
  fetchTrailer,
  fetchTrendingMovies,
} from "./utils/axios";
import {
  accessFromLocalSession,
  storeInLocalSession,
} from "./utils/localStorage";

function App() {
  const [movies, setMovies] = useState([]);
  const [heroMovie, setHeroMovie] = useState(null);
  const [genre, setGenre] = useState([]);
  const [watchList, setWatchList] = useState(() => {
    return accessFromLocalSession() || [];
  });
  const [trailerKey, setTrailerKey] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const [activeTab, setActiveTab] = useState("Popular");
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRandomMovie = async () => {
      const randomMovies = await fetchPopularMovie();
  


      const genreList = await fetchGenre();
      setMovies(randomMovies.results);
      setGenre(genreList);

      const random = Math.floor(Math.random() * randomMovies.results.length);
setHeroMovie(randomMovies.results[random]);
       setLoading(false);


      
    };
   
    fetchRandomMovie();
  }, []);

  const addToWatchList = (movie) => {
    const exists = watchList.find((m) => m.id == movie.id);
    if (exists) return;
    const updated = [...watchList, movie];
    setWatchList(updated);
    storeInLocalSession(updated);
  };

  const removeFromWatchList = (movie) => {
    const updated = watchList.filter((m) => m.id !== movie.id);
    setWatchList(updated);
    storeInLocalSession(updated);
  };

  const handleOnTrailer = async (movieID) => {
    const key = await fetchTrailer(movieID);

    setTrailerKey(key);
    setShowTrailer(true);
  };

  const handleOnTrending = async () => {
    const trendingMovies = await fetchTrendingMovies();
    setMovies(trendingMovies.results);
    setActiveTab("Trending now");
  };
  const handleOnFetchByGenre = async (genre_ids, tabName) => {
    const fetchResult = await fetchByGenre(genre_ids);
    setMovies(fetchResult.results);
    setActiveTab(tabName);
  };

  const genreName = (id) => {
    if (!genre || !Array.isArray(genre) || genre.length === 0) return "";
    const found = genre.find((g) => g.id === id);
    return found ? found.name : "";
  };

  return (
    <>
      <div className="wrapper ">
        <Navbar  
          handleOnTrending={handleOnTrending}
          handleOnFetchByGenre={handleOnFetchByGenre}
        />

<Hero
          heroMovie={heroMovie}
          genres={genre}
          setHeroMovie={setHeroMovie}
          addToWatchList={addToWatchList}
          handleOnTrailer={handleOnTrailer}
          genreName={genreName}
          loading ={loading}
        />
        <Display
          movies={movies}
          genres={genre}
          watchList={watchList}
          addToWatchList={addToWatchList}
          removeFromWatchList={removeFromWatchList}
          handleOnTrailer={handleOnTrailer}
          activeTab={activeTab}
          genreName={genreName}
        />


       

        {showTrailer && trailerKey && (
          <div
            className="trailer-overlay"
            onClick={() => setShowTrailer(false)}
          >
            <div
              className="trailer-container"
              onClick={(e) => e.stopPropagation()}
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
