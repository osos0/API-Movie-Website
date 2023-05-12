import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/main.scss";
import Home from "./Pages/Home";
import PageIMDB from "./Pages/pageIMDB";
import PageMovies from "./Pages/pageMovies";
import PageTv from "./Pages/pageTv";
import Film from "./Pages/Film";
// import { useParams } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imdb" element={<PageIMDB />} />
        <Route path="/movies" element={<PageMovies />} />
        <Route path="/tv" element={<PageTv />} />
        <Route path="film/:filmid" element={<Film />} />
      </Routes>
    </Fragment>
  );
}

export default App;
