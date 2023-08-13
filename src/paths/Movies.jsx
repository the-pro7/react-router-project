import React from "react";

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
        <div className="movies__container--movie">
          <img src={movie.Poster} alt={movie.Title} title={`${movie.Title} Poster`} className="movie__poster" />
          <div className="movie_details">
            <p className="movie__details--type">
              {movie.Type.toUpperCase()}
            </p>
            <h2 className="movie__details--title">
              {movie.Title}
            </h2>
            <p className="movie__details--release">
              {movie.Year}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Movies;
