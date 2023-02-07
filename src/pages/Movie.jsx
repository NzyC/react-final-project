import React from "react";
import "./Movie.css";

export default function Movie({ currentMovie }) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  console.log(currentMovie);

  return (
    <div className="movie">
      <img
        className="poster"
        src={currentMovie.Poster || base_url + currentMovie.poster_path}
        alt=""
      />
      <div className="movie__info">
        <h1>{currentMovie.title || currentMovie.original_name || currentMovie.Title}</h1>
        <p className="movie_date">Movie Date: {currentMovie.release_date || currentMovie.Year}</p>
        <p className="movie_overview">
          Movie Overview: <br />
          {currentMovie.overview || 'n/a'}
          <br />
          <br />
          <br />
          Movie Popularity: {currentMovie.popularity || `n/a`}
        </p>
      </div>
    </div>
  );
}
