import React from "react";
import "./Careers.css"
import imagecareer from '../../Photos/Careerimg.png';
// import imagecareer from '../../Photos/Rectangle 30.png'
import Navbar from "../../Navbar/headerNavbar";
import Footer from '../../Footer/Footer';




function Careers() {
    return (
        <>
            <Navbar />
            {/* <div>
                const myStyle = {
                    backgroundImage : `url(${imagecareer})`;
                }
                    back
                }
                <div className="bg-career-container">
                    <h2 className="career-heading" >Find Jobs</h2>
                    <div className="bar">
                        <div className="row">
                            <div className="col-12 col-md-6 col-sm-3 col-xs-3">
                                <input type="text" placeholder="Search for job" name="textBox" />
                            </div>
                        </div>
                        <div className="location-container">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <select name="location" className="location">
                            <option>Select Location</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        
                    </div>
                </div>
            </div> */}

            <div className="careers-container">
                <div>
                    <h1 className="career-heading">Find Jobs</h1>
                </div>
                <div className="input-location">

                    <div className="bar">
                        <div className="content">
                            <input type="text" placeholder="Search for job" />

                            <div className="location-container">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <select name="location" className="location">
                                <option>Select Location</option>
                            </select>
                        </div>
                        <div>
                            <img className="image" src={imagecareer} />
                        </div>
                    </div>
                </div>
              
            </div>
    
            <Footer/>

        </>
    )
}

export default Careers;



