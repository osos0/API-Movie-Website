import React from "react";
import logo from "../logo.png";

const Footer = () => {
  return (
    <>
      <div className="footerCon">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 logostylingFooter">
              <img src={logo} alt="logo" className="logostylingFooterimg" />
            </div>

            <div className="col-md-4 col-sm-6 rightFooter">
              <h2 className="text-danger">Quick Links</h2>
              <ul>
                <li>About Us</li>
                <li className="text-danger">Services</li>
                <li>Booking</li>
                <li className="text-danger">FAQs</li>
                <li>Blogs</li>
                <li className="text-danger">Our Team</li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-12 d-lg-flex d-md-flex d-sm-none rightFooter">
              <p className="text-danger">
                Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
                smod tempor incididunt ut labore et. Lorem ipsum is dolor sit
                amet, csectetur adipiscing elit, dolore smod tempor incididunt
                ut labore et.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 rightFooter">
              <h2 className="text-danger">Our Services</h2>
              <ul>
                <li>Dental Care</li>
                <li className="text-danger">Cardiac Clinic</li>
                <li>Massage Therapy</li>
                <li className="text-danger">Cardiology</li>
                <li>Precise Diagnosis</li>
                <li className="text-danger">Ambulance Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
