import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Contents from "./Components/Contents/Contents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Contents />
    </BrowserRouter>
  );
}

export default App;
