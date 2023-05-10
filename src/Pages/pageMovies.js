import React from "react";
import Navbar from "../componante/Navbar";
import Moviesrate from "../componante/Moviesrate";
import Footer from "../componante/Footer";

const PageMovies = () => {
  return (
    <>
      <div className="bgB">
        <Navbar />
        <Moviesrate />
        <Footer />
      </div>
    </>
  );
};

export default PageMovies;
