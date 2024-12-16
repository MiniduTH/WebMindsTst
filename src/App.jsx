import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RenderedCards from "./components/RenderedCards.jsx";
import RenderedImageLine from "./components/RenderedImageLine.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="my-10"></div>
      <div>
        sample txt <br />
        sample txt <br />
        sample txt <br />
      </div>
      <Hero/>
      <RenderedImageLine/>
      <RenderedCards />
      <Footer />
    </>
  );
}

export default App;
