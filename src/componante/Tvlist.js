import React from "react";
import { useEffect, useState } from "react";
function Tvlist() {
  const [Tvlist, setTvlist] = useState([]);
  const [Btnount, setBtnount] = useState(4);

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
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => setTvlist(response.results))
      .catch((err) => console.error(err));
  }, []);

  //   console.log(Tvlist);
  const arrSlice = Tvlist.slice(0, Btnount);

  function Viewmore() {
    setBtnount(Btnount + 4);
  }

  return (
    <>
      <div className="container">
        <h1>Top Tv List</h1>
        <div className="row">
          {arrSlice.map((ser) => {
            return (
              <div
                key={ser.id}
                className="col-lg-3 col-md-6 col-sm-12 boxOfMovie"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${ser.backdrop_path}`}
                  alt={ser.id}
                />
                <h4>{ser.name}</h4>
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

export default Tvlist;
