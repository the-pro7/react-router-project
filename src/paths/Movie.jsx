import React from "react";

const Movie = ({movie}) => {
  return (
    <div className="movies__container--movie">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/600x600?text=Image+Missing"}
        alt={movie.Title}
        title={`${movie.Title} Poster`}
        className="movie__poster"
      />
      <div className="movie__details">
        <p className="movie__details--type">{movie.Type.toUpperCase()}</p>
        <h2 className="movie__details--title">{movie.Title}</h2>
        <p className="movie__details--release">{movie.Year}</p>
      </div>
    </div>
  );
};

export default Movie;
