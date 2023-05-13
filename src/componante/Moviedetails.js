import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Moviedetails() {
  const [Movies, setMovies] = useState([]);
  const prams = useParams();

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
      //   .then((response) => console.log(response.results[prams.movieid]))
      .then((response) => setMovies(response.results[prams.movieid]))
      // .then((response) => setMovies(response))
      .catch((err) => console.error(err));
  }, []);

  console.log(Movies);

  return (
    <>
      <div className=" bigPic ">
        <div className="row">
          <div className="col-md-4 col-sm-12 liftConDet">
            <img
              src={`https://image.tmdb.org/t/p/w500${Movies.poster_path}`}
              alt="filmimg"
            />
          </div>
          <div className="col-md-8 col-sm-12 rightConDet">
            <h1>{Movies.title}</h1>
            <div>
              <span>Rating</span> : {Movies.vote_average}
            </div>
            <div>
              <span>year</span> : {Movies.release_date}
            </div>
            <div>
              <span>original_language</span> :
              <div>{Movies.original_language}</div>
            </div>
            <div>
              <span>Description</span> : {Movies.overview}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moviedetails;
