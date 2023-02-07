import axios from "../axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import { useNavigate } from "react-router-dom";

export default function Row({ title, fetchUrl, currentMovie }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className="row__poster"
            key={movie.id}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
            onClick={() => {
              navigate('/movieInfo')
              currentMovie(movie)
            }}
          />
        ))}
      </div>
    </div>
  );
}
