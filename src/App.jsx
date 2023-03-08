import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Contents from "./Components/Contents/Contents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import LatestMovies from "./Components/LatestMovies/LatestMovies";
import Movies from "./Components/movies/Movies";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Contents />
      {/* <LatestMovies /> */}
      <Movies 
        title="Latest Trailers"
        isTrailer
      />
    </BrowserRouter>
  );
}

export default App;
