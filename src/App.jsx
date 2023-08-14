import { useState, lazy, Suspense, useEffect } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./paths/Home";
// Components lazily loaded
const Navbar = lazy(() => import("./paths/Navbar"));
const Movies = lazy(() => import("./paths/Movies"));

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [moviePageShowing, setMoviePageShowing] = useState(false);


  // API call
  const API_URL = `https://omdbapi.com/?apikey=33d0d5be`;
  const getMovies = async (search) => {
    try {
      const response = await fetch(`${API_URL}&s=${search}`);
      const data = await response.json();
      setMovies(data?.Search);
      console.log(movies);
    } catch (error) {
      console.log(error);
    }
  };

  // Call on page reload
  useEffect(() => {
    getMovies("spiderman");
  }, []);
  return (
    <>
      <Navbar
        moviePageShowing={moviePageShowing}
        setMovieShowing={setMoviePageShowing}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        getMovies={getMovies}
      />
      <Suspense fallback={<h1 className="loading">Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movies"
            element={<Movies searchQuery={searchQuery} movies={movies} />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
