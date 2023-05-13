import React from "react";
import Navbar from "../componante/Navbar";
// import Imdb from "../componante/Imdb";
import Footer from "../componante/Footer";
import Slider from "../componante/Slider";
import Moviesrate from "../componante/Moviesrate";

const Home = () => {
  return (
    <div className="bgB">
      <Navbar />
      <Slider />
      {/* <Imdb /> */}
      <Moviesrate />
      <Footer />
    </div>
  );
};

export default Home;
