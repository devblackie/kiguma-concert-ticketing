import React from "react";
import "./choir.css";
import brotherhood from "./images/Brotherhood.jpg";
import gifted from "./images/Gifted.jpg";
import obnj from "./images/Obnj.jpg";
import onkoba from "./images/Onkoba.jpg";
import everyword from "./images/Everyword.jpeg"


export default function Choir() {
  return (
    <div className="choirs">
      <h2>Featuring ...</h2>
      <div className=" " id="slideshow">
        <div className="slider">
      
          <div className="slide">
            <img src={`${brotherhood}`} alt=" " />
            <div className="contentt"> <div className="imagetag">Brotherhood</div></div>
          </div>
       
      
          <div className="slide">
            <img src={`${gifted}`} alt=" " />
            <div className="contentt"> <div className="imagetag">Gifted Ministry</div> </div>
          </div>
       
      
          <div className="slide">
            <img src={`${obnj}`} alt=" " />
            <div className="contentt"> <div className="imagetag">Ob & J </div> </div>
          </div>
       
      
          <div className="slide">
            <img src={`${onkoba}`} alt=" " />
            <div className="contentt"> <div className="imagetag">Onkoba</div> </div>
          </div>
       
      
          <div className="slide">
            <img src={`${brotherhood}`} alt=" " />
            <div className="contentt"> <div className="imagetag">Everyword</div> </div>
          </div>
       
      
          <div className="slide">
            <img src={`${everyword}`} alt=" " />
            <div className="contentt">
             <div className="imagetag">Everyword</div> 
              </div>
          </div>
       
      
          <div className="slide">
            <img src={`${brotherhood}`} alt=" " />
            <div className="contentt"> <div className="imagetag">Brotherhood</div> </div>
          </div>
       
        </div>
      </div>
    </div>
  );
}
