import React from "react";
import { movie } from "../data";

function Movie() {
  return (
    <div>
      <h1>Movie Page</h1>
      <div>
        {movies.map((film) => (
          <div key={film.title}>
            <h3>Name: {film.title}</h3>
            <p>Time: {film.time}</p>
            <p>Genres:</p>
            <ul>
              {film.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Movie;