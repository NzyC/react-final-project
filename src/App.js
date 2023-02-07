import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Footer from "./components/Footer";
import SearchPage from "./pages/SearchPage";
import { useState } from "react";
import Movie from "./pages/Movie";

function App() {
  const [searchInputValue, setSearchInputValue] = useState('')
  
  const [currentMovie, setCurrentMovie] = useState("");

  return (
    <Router>
    <Nav search={setSearchInputValue} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home setCurrentMovie={setCurrentMovie} currentMovie={currentMovie} />} />
          <Route path="/search" element={<SearchPage search={searchInputValue} setCurrentMovie={setCurrentMovie} />} />
          <Route path="/movieInfo" element={<Movie currentMovie={currentMovie} />} />
        </Routes>
      </div>
    <Footer />
    </Router>
  );
}

export default App;
