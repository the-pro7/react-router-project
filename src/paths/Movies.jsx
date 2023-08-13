import React from "react";
import Movie from "./Movie";

const Movies = ({ searchQuery, movies }) => {
  const movie = {
    Title: "Italian Spiderman",
    Year: "2007",
    imdbID: "tt2705436",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
  };
  return (
    <main className="movies">
      {movies?.length ? (
        <h1 className="movies__results">Results for "{searchQuery}"</h1>
      ) : (
        <>No movies found</>
      )}
      <div className="movies__container">
        {movies.map((movie) => (
          <Movie movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default Movies;
