import React from "react";  
import photo from "../Photos/imsnewlogo.png"; 
// import icon from "../Photos/Facebook.png";
// import icon1 from "../Photos/Instagram.png";
// import icon2 from "../Photos/LinkedIn.png";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import './footer.css';

function Footer() { 
    return ( 
        <div className="footer-flex"> 
            <div ><img src={photo} className="footer-ims" alt="photo"></img></div>
                <div className="footer-para1">
                    <h1 className="footer-h1">Company</h1>
                    <p className="footer-p"><a href="" target="" style={{color:"#ffffff" , textDecoration:"none"}}>Privacy policy</a></p> 
                    <p className="footer-p"><a href="" target="" style={{color:"#ffffff" , textDecoration:"none"}}>Terms and conditions</a></p> 
                    <p className="footer-p"><a href="" target="" style={{color:"#ffffff" , textDecoration:"none"}}>History</a></p> 
                    <p className="footer-p" ><a href="" target="" style={{color:"#ffffff" , textDecoration:"none"}}>Careers</a></p> 
                    <p className="footer-p"><a href="" target="" style={{color:"#ffffff" , textDecoration:"none"}}>About</a></p> 
                    <p className="footer-p" ><a href="" target="" style={{color:"#ffffff" , textDecoration:"none"}}>Our Work</a></p> 
                    <p className="footer-p"><a href="" target="" style={{color:"#ffffff" , textDecoration:"none"}}>More Info</a></p> 
                </div>
                <div className="footer-para2">
                    <h1 className="footer-h1">Services</h1>
                    <p className="footer-p"><a href="" target="" style={{color:"#ffffff" , textDecoration:"none"}}>Project Management</a></p> 
                    <p className="footer-p"><a href="" target="" style={{color:"#ffffff" , textDecoration:"none"}}>App Development</a></p> 
                    <p className="footer-p"><a href="" target="" style={{color:"#ffffff" , textDecoration:"none"}}>IT Software Development</a></p> 
                    <p className="footer-p"><a href="" target="" style={{color:"#ffffff" , textDecoration:"none"}}>Website Design and Development</a></p> 
                    <p className="footer-p"><a href="" target="" style={{color:"#ffffff" , textDecoration:"none"}}>Marketing Services</a></p> 
                    <p className="footer-p" ><a href="" target="" style={{color:"#ffffff" , textDecoration:"none"}}>HR Resources and Development</a></p> 
                    <p className="footer-p"><a href="" target="" style={{color:"#ffffff" , textDecoration:"none"}}>HR Services</a></p> 
                </div>
                <div className="footer-para3">
                    <h1 className="footer-h1">Meet Us</h1>
                    <div className="footer-head">
                    <p className="footer-p">4th Floor, Bizness Square, opposite Meydan expo centre, 16, Hitech City Rd, Laxmi Cyber City, Whitefields, Hyderabad, Telangana 500081</p>
                    </div>
                    
                    <p className="footer-p" style={{fontWeight:"800"}}>On Social Media</p> 
                    <div className="C">
                    {/* <a href="https://www.linkedin.com/company/it-monks-solutions/" target="_blank"><img src={icon2} alt="" ></img></a>
                    <a href="https://www.facebook.com/profile.php?id=61553934685933&mibextid=ZbWKwL" target="_blank"><img src={icon} alt="" ></img> </a>
                    <a  href="https://www.instagram.com/itmonks_solutions?igsh=Z2h5d3Ezbjg3aHNr" target="_blank"><img src={icon1} alt=""></img> </a> */}
                    </div>
                    <ul className="footer">
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
                
        </div>
    )
} 

export default Footer;