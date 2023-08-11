import { useState, lazy, Suspense } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
// COmponents lazily loaded
const Navbar = lazy(() => import("./paths/Navbar"));
const Home = lazy(() => import("./paths/Home"));

function App() {
  const [moviePageShowing, setMoviePageShowing] = useState(false)
  return (
    <>
      <Navbar moviePageShowing={moviePageShowing}/>
      <Suspense fallback={<h1 className="loading">Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
