import React from "react";
import Navbar from "./components/home/Navbar";
import Hero from "./components/home/Hero";
import MovieSection from "./components/home/MovieSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MovieSection />
    </div>
  );
};

export default App;
