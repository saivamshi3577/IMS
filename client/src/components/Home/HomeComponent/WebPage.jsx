import React from 'react'
import IMS from "../../Photos/Ims logo.png"
import enhanced from "../../Photos/enhanced image.png";
import flexibility from "../../Photos/flexibility image.png";
import speed from "../../Photos/speed and safety image.png";
import Button from "react-bootstrap/Button"
import "../HomeComponent/Webpage.css";



function WebPage() {
  return (
    <div id="mainDiv">
      <div className='widthAdjust'>
        <img src={IMS} alt="" className="logo" ></img>
      </div>
      <div className="contentDiv">
        <h1 className="heading1"><span className="emerging1">ENGAGE WITH THE </span><span className="emerging">EMERGING AND </span></h1>
        <h1 className="heading2"> <span className="emerging">TRANSFORM</span> AT THE INTERSECT</h1>
        <p className="para1">IT Monks Solutions Pvt Ltd is a dynamic player in the Information Technology Development and</p>
        <p className="para2">Services industry, committed to driving innovation and delivering cutting-edge solutions.</p>
        <Button variant="danger" className="learnButton" href="#scrollDiv">Learn More</Button>
        <div className="imagesDiv">
          <div>
            <img src={speed} alt=""></img>
            <h4>Speed and Safety</h4>
          </div>
          <div>
            <img src={enhanced} alt=""></img>

            <h4 id="enhancedHeading">Enhanced <br></br>Collabration</h4>
          </div>
          <div>
            <img src={flexibility} alt=""></img>
            <h4>Flexibility</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebPage;