import React, { useEffect } from "react";
import Movie from "./Movie";

const Movies = ({ searchQuery, movies }) => {

  useEffect(() => {
    <h1>Results for {searchQuery}</h1>
  }, [movies])
  return (
    <main className="movies">
      <div className="movies__container">
        {movies.map((movie) => (
          <Movie movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default Movies;
