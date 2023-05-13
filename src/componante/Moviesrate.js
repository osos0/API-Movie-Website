import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Moviesrate() {
  const [Movies, setMovies] = useState([]);
  const [Btnount, setBtnount] = useState(8);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWIwYmU1Y2EyMDQzMWEzNWM4NmE0Y2U4ZTgwMjA1NSIsInN1YiI6IjY0NTdlMjAwNzdkMjNiMDExOWUwMTM4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xVspGDSdPQb3b8HlCTPtTfs9Wyu8fqO5wlgtebxNVC0",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US",
      options
    )
      .then((response) => response.json())
      //   .then((response) => console.log(response.results))
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  }, []);

  const displayMovies2 = Movies.slice(0, Btnount);

  function Viewmore() {
    setBtnount(Btnount + 4);
  }

  return (
    <>
      <div className="container">
        <h1>Top Rated</h1>
        <div className="row">
          {displayMovies2.map((film, ind) => {
            return (
              <div
                key={film.id}
                className="col-lg-3 col-md-6 col-sm-12 boxOfMovie"
              >
                <Link to={`/movie/${ind}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    alt={film.id}
                  />
                  <h4>{film.title}</h4>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="btnCon">
          <button className="IMDBbtn" onClick={Viewmore}>
            View More
          </button>
        </div>
      </div>
    </>
  );
}

export default Moviesrate;
