import { useState, lazy, Suspense } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Movies from "./paths/Movies";
// COmponents lazily loaded
const Navbar = lazy(() => import("./paths/Navbar"));
const Home = lazy(() => import("./paths/Home"));

function App() {
  const [moviePageShowing, setMoviePageShowing] = useState(false)
  return (
    <>
      <Navbar moviePageShowing={moviePageShowing} setMovieShowing={setMoviePageShowing}/>
      <Suspense fallback={<h1 className="loading">Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />}/>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
