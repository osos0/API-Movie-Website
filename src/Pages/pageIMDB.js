import React from "react";
import Navbar from "../componante/Navbar";
import Imdb from "../componante/Imdb";
import Footer from "../componante/Footer";

const PageIMDB = () => {
  return (
    <>
      <div className="bgB">
        <Navbar />
        <Imdb />
        <Footer />
      </div>
    </>
  );
};

export default PageIMDB;
