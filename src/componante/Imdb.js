import React, { useState } from "react";
import { useEffect } from "react";

function Imdb() {
  const [Imdbapi, setImdbapi] = useState([]);
  const [Btnount, setBtnount] = useState(4);
  useEffect(() => {
    fetch("https://imdb-top-100-movies.p.rapidapi.com/", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f7f48eaa1dmshe05d714559f0236p1d1e95jsnadef6b25e692",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => setImdbapi(data));
  }, []);

  // const arr = [
  //   {
  //     id: "1",
  //     image: logotest,
  //     title: "The Shawshank Redemption",
  //     discripe: "The Shawshank Redemption ",
  //   },
  //   {
  //     id: "2",
  //     image: logotest,
  //     title: "The Shawshank Redemption",
  //     discripe: "The Shawshank Redemption ",
  //   },
  //   {
  //     id: "3",
  //     image: logotest,
  //     title: "The Shawshank Redemption",
  //     discripe: "The Shawshank Redemption ",
  //   },
  //   {
  //     id: "4",
  //     image: logotest,
  //     title: "The Shawshank Redemption",
  //     discripe: "The Shawshank Redemption ",
  //   },
  //   {
  //     id: "5",
  //     image: logotest,
  //     title: "The Shawshank Redemption",
  //     discripe: "The Shawshank Redemption ",
  //   },
  //   {
  //     id: "6",
  //     image: logotest,
  //     title: "The Shawshank Redemption",
  //     discripe: "The Shawshank Redemption ",
  //   },
  //   {
  //     id: "7",
  //     image: logotest,
  //     title: "The Shawshank Redemption",
  //     discripe: "The Shawshank Redemption ",
  //   },
  //   {
  //     id: "8",
  //     image: logotest,
  //     title: "The Shawshank Redemption",
  //     discripe: "The Shawshank Redemption ",
  //   },
  //   {
  //     id: "9",
  //     image: logotest,
  //     title: "The Shawshank Redemption",
  //     discripe: "The Shawshank Redemption ",
  //   },
  //   {
  //     id: "10",
  //     image: logotest,
  //     title: "The Shawshank Redemption",
  //     discripe: "The Shawshank Redemption ",
  //   },
  //   {
  //     id: "11",
  //     image: logotest,
  //     title: "The Shawshank Redemption",
  //     discripe: "The Shawshank Redemption ",
  //   },
  //   {
  //     id: "12",
  //     image: logotest,
  //     title: "The Shawshank Redemption",
  //     discripe: "The Shawshank Redemption ",
  //   },
  // ];

  const arrSlice = Imdbapi.slice(0, Btnount);

  function Viewmore() {
    setBtnount(Btnount + 4);
  }

  return (
    <>
      <div className="container">
        <h1>IMDB Rated</h1>

        <div className="row">
          {arrSlice.map((imd) => {
            return (
              <div
                key={imd.id}
                className="col-lg-3 col-md-6 col-sm-12 boxOfMovie"
              >
                <img src={imd.image} alt={imd.rank} />
                <h4>{imd.title}</h4>
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

export default Imdb;
