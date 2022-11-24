import React from "react";
import "./Landing.css";
// import kiguma from "../../components/images/Kiguma mission poster.jpg"
import { Link } from "react-router-dom";

import { BsFacebook } from "react-icons/bs";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";




export default function Landing() {
  const myStyles = {
    // backgroundImage:
    //   "url('kiguma.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  return (
    <div className="container-fluid" style={myStyles}>
      <span></span>
      <div className="landingview">
        <div className="landingviewpage">
          <h1></h1>
          <p>
         
          </p>
          <div className="button">
          
            <Link to="/login">
              <button className="btn btn-primary p-0 w-100" type="submit">
                RSVP
              </button>
            </Link>
          </div>
        </div>
        <div className="landingviewpage"></div>
      </div>
      {/* partners section */}
      <div className="card-body" id="partners">
        {/* <div className="">
          <div className="part-heading">
            <h1>Our Partners</h1>
          </div>
          <div className="partners-png">
            <div className="im">
              <img className="image" src={`${}`} alt="mastercard" />
            </div>
            <div className="im">
              <img className="image" src={`${ }`} alt="saf-logo" />
            </div>
            <div className="im">
              <img className="image" src={`${}`} alt="sanlam" />
            </div>
         
            <div className="im">
              <img className="image" src={`${ }`} alt="i_click" />
            </div>
            <div className="im">
              <img className="image" src={`${ }`} alt="adrian" />
            </div>
            <div className="im">
              <img className="image" src={`${ }`} alt="i_talanta" />
            </div>
            
          </div>
        </div> */}
      </div>
      {/* partners section */}
      {/* footersection */}
      {/* <footer>
        <div className="foot">
          <Link to="" id="linkf">
            <BsTwitter />
            SDA church,JKUAT
          </Link>

          <Link to="" id="linkf">
            <FaInstagramSquare />
            SDA Church,JKUAT
          </Link>
          <Link to="" id="linkf">
            <BsFacebook />
            SDA Church,JKUAT
          </Link>
          <Link to="https://www.jkusdachurch.org/" id="linkf">
            <FaGlobeAfrica />
            JKUSDA Church
          </Link>
        </div>
      </footer> */}
    </div>
  );
}
