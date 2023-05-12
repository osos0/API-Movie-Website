import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Filmdetails() {
  const [Imdbapi, setImdbapi] = useState({});
  const prams = useParams();

  useEffect(() => {
    fetch(`https://imdb-top-100-movies.p.rapidapi.com`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f7f48eaa1dmshe05d714559f0236p1d1e95jsnadef6b25e692",
        "X-RapidAPI-Host": `imdb-top-100-movies.p.rapidapi.com`,
      },
    })
      .then((res) => res.json())
      //   .then((data) => setImdbapi(data[prams.filmid - 1]));
      .then((data) => setImdbapi(data[prams.filmid - 1]));
  }, {});
  //   const arr = [
  //     {
  //       id: "1",
  //       image: logotest,
  //       title: "The Shawshank Redemption",
  //       discripe: "The Shawshank Redemption ",
  //     },
  //     {
  //       id: "2",
  //       image: logotest,
  //       title: "The Shawshank Redemption",
  //       discripe: "The Shawshank Redemption ",
  //     },
  //     {
  //       id: "3",
  //       image: logotest,
  //       title: "The Shawshank Redemption",
  //       discripe: "The Shawshank Redemption ",
  //     },
  //     {
  //       id: "4",
  //       image: logotest,
  //       title: "The Shawshank Redemption",
  //       discripe: "The Shawshank Redemption ",
  //     },
  //     {
  //       id: "5",
  //       image: logotest,
  //       title: "The Shawshank Redemption",
  //       discripe: "The Shawshank Redemption ",
  //     },
  //     {
  //       id: "6",
  //       image: logotest,
  //       title: "The Shawshank Redemption",
  //       discripe: "The Shawshank Redemption ",
  //     },
  //     {
  //       id: "7",
  //       image: logotest,
  //       title: "The Shawshank Redemption",
  //       discripe: "The Shawshank Redemption ",
  //     },
  //     {
  //       id: "8",
  //       image: logotest,
  //       title: "The Shawshank Redemption",
  //       discripe: "The Shawshank Redemption ",
  //     },
  //     {
  //       id: "9",
  //       image: logotest,
  //       title: "The Shawshank Redemption",
  //       discripe: "The Shawshank Redemption ",
  //     },
  //     {
  //       id: "10",
  //       image: logotest,
  //       title: "The Shawshank Redemption",
  //       discripe: "The Shawshank Redemption ",
  //     },
  //     {
  //       id: "11",
  //       image: logotest,
  //       title: "The Shawshank Redemption",
  //       discripe: "The Shawshank Redemption ",
  //     },
  //     {
  //       id: "12",
  //       image: logotest,
  //       title: "The Shawshank Redemption",
  //       discripe: "The Shawshank Redemption ",
  //     },
  //   ];

  console.log(Imdbapi);
  return (
    <>
      <div className=" bigPic ">
        <div className="row">
          <div className="col-md-4 col-sm-12 liftConDet">
            <img src={Imdbapi.image} alt="filmimg" />
          </div>
          <div className="col-md-8 col-sm-12 rightConDet">
            <h1>{Imdbapi.title}</h1>

            <div>
              <span>Rating</span> : {Imdbapi.rating}
            </div>
            <div>
              <span>genre</span> :<div>{Imdbapi.genre}</div>
              {/* <div>{Imdbapi.genre[1]}</div> */}
            </div>
            <div>
              <span>year</span> : {Imdbapi.year}
            </div>
            <div>
              <span>Description</span> : {Imdbapi.description}
            </div>
            <div>
              <span>Writers</span> :<div>{Imdbapi.writers}</div>
              {/* <div>{Imdbapi.writers[1]}</div> */}
            </div>
            <div>
              <span>Director</span> : {Imdbapi.director}
            </div>

            <div>
              <span>Description</span> : {Imdbapi.description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filmdetails;
