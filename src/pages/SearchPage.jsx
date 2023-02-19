import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SearchPage.css";

export default function SearchPage({ search, setCurrentMovie }) {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://www.omdbapi.com/?i=tt3896198&apikey=5d41d2f2&s=${search}`
      );
      setMovies(request.data.Search);
      console.log(request.data.Search);
      return request;
    }

    fetchData();
  }, [search]);

  return (
    <div className="search">
      <h1 className="result-title">search results for "{search}"</h1>
      <div className="results">
        {movies.map((movie) => (
          <Link to={`/movieInfo`}  >
            <figure className="poster__wrapper">
              <img
                onClick={() => {
                  setCurrentMovie(movie)
                  navigate("/movieInfo")
                  console.log(movie)}
                }
                className="poster"
                key={movie.imdbID}
                src={movie.Poster}
                alt={movie.Title}
              />
            </figure>
          </Link>
        ))}
      </div>
    </div>
  );
}
