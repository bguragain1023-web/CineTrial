import "./App.css";
import { Display } from "./components/Display";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <div className="wrapper ">
        <Navbar />

        <Hero />
        <Display />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
