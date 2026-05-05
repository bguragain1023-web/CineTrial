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
  console.log(heroMovie);
  return (
    <>
      <div className="wrapper ">
        <Navbar />

        <Hero
          heroMovie={heroMovie}
          genres={genre}
          setHeroMovie={setHeroMovie}
        />
        <Display movies={movies} genres={genre} />
        <Footer />
      </div>
    </>
  );
}

export default App;
