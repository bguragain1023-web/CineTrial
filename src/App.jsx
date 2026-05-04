import { useEffect, useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { fetchPopularMovie } from "./utils/axios";

function App() {
  const [heroMovie, setHeroMovies] = useState([]);

  useEffect(() => {
    const fetchRandomMovie = async () => {
      const randomMovies = await fetchPopularMovie();
      setHeroMovies(randomMovies.results);
      console.log(randomMovies.results);
    };
    fetchRandomMovie();
  }, []);

  return (
    <>
      <div className="wrapper ">
        <Navbar />

        <Hero />
        <Display />
        <Footer />
      </div>
    </>
  );
}

export default App;
