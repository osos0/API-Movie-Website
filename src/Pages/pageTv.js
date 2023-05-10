import React from "react";
import Navbar from "../componante/Navbar";
import Tvlist from "../componante/Tvlist";
import Footer from "../componante/Footer";

const PageTv = () => {
  return (
    <>
      <div className="bgB">
        <Navbar />
        <Tvlist />
        <Footer />
      </div>
    </>
  );
};

export default PageTv;
