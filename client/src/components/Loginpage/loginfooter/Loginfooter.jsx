
// import icon from "../Photos/Facebook.png";
// import icon1 from "../Photos/Instagram.png";
// import icon2 from "../Photos/LinkedIn.png";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";


import './loginfooter.css'
import React from "react";
function web() {
    return (
        <div className="card1">
            <div className="imageHeadingContainer">
                <h1 className="mainHeading">On Social Media</h1>
        
                <ul className="footer-ul">
                        <li className="footer-item">
                            <a className="footer-a" href="https://www.instagram.com/itmonks_solutions?igsh=Z2h5d3Ezbjg3aHNr">
                            <CiInstagram className="footer-icon" />
                            </a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-a" href="https://www.facebook.com/profile.php?id=61553934685933&mibextid=ZbWKwL">
                            <FaFacebookSquare className="footer-icon"/>
                            </a>
                        </li>
                        <li className="footer-item">
                            <a className="footer-a" href="https://www.linkedin.com/company/it-monks-solutions/">
                            <CiLinkedin className="footer-icon" />
                            </a>
                        </li>
                    </ul>
            </div>
            <div className="addressContainer">
                <h1 className="subHeading">Meet Us</h1>
                <p className="addressPara">4th Floor,Bizness Square,<br></br>opposite Meydan expo centre,16,<br></br>Hitech City Rd,Laxmi Cyber City Whitefields Hyderabad,<br></br> Telangana 500081</p>
            </div>
        </div>
    )
}

export default web;
