import { useEffect, useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { fetchGenre, fetchPopularMovie } from "./utils/axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [heroMovie, setHeroMovie] = useState(null);
  const [genre, setGenre] = useState([]);
  const [watchList, setWatchList] = useState([]);

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
        />
        <Display
          movies={movies}
          genres={genre}
          watchList={watchList}
          addToWatchList={addToWatchList}
          removeFromWatchList={removeFromWatchList}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
