import React from "react";
import "./Landing.css";
import kiguma from "./images/Kigumoposter.png";
import { Link } from "react-router-dom";
import Timer from "../../components/timer/Timer";

import { BsFacebook } from "react-icons/bs";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Choir from "../../components/choirs/Choir";

export default function Landing() {
  return (
    <div className="container-fluid" id="fullpage">
      <span></span>
      <div className="landingview">
        <div className="landingviewpage">
          <img src={`${kiguma}`} />
        </div>
        <div className="landingviewpage">
          <Timer />
          
            <Link to="/login">
              <button className="" type="submit">
                RSVP
              </button>
            </Link>
    
        </div>
      </div>
      {/* partners section */}
      <div className="card-body" id="partners">
        <Choir />
      </div>
      {/* partners section */}
      {/* footersection */}
      <footer>
        <div className="foot">
          
          <a href="https://twitter.com/sdajkuat" id="linkf" target="_blank">
            <BsTwitter id="sicon"/>
            SDA church,JKUAT
          </a>

          <a href="" id="linkf" target="_blank">
            <FaInstagramSquare  id="sicon"/>
            SDA Church,JKUAT
          </a>
          <a href="https://www.facebook.com/jkusda/" id="linkf" target="_blank">
            <BsFacebook id="sicon"/>
            SDA Church,JKUAT
          </a>
          <a href="https://www.jkusdachurch.org/" id="linkf" target="_blank">
            <FaGlobeAfrica id="sicon"/>
            JKUSDA Church
          </a>
        </div>
      </footer>
    </div>
  );
}
