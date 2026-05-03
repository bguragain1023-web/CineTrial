import "./App.css";
import { Display } from "./components/Display";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
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
