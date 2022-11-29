import React from "react";
import "./Landing.css";
import kiguma from "./images/Kigumoposter.png";
import { Link } from "react-router-dom";
import Timer from "../../components/timer/Timer"

import { BsFacebook } from "react-icons/bs";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";


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
        <div className="ticket" id="bookbutton">
            <Link to="/login">
              <button className="" type="submit">
                book ticket
              </button>
            </Link>
          </div>
        </div>
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
