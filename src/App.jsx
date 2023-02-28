import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
    </BrowserRouter>
  );
}

export default App;
