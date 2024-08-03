import React, { useState } from "react";
import img1 from "../Photos/imsnewlogo.png"
import { FiAlignJustify } from "react-icons/fi";
import "../Navbar/headerNavbar.css"
import img2 from "../Photos/crossimage.png";
import { SlArrowDown } from "react-icons/sl";
import { useRef } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { useNavigate } from "react-router-dom";



function HeaderNavbar() {
    const sallyPopUp = useRef();
    const sallyBurg = useRef();
    const [open1, setOpen1] = useState(false)
    const [open, setOpen] = useState(false)
    const Menus = ['Project Management', 'App Development', 'IT Development and Payroll', 'Website Design and Development', 'Marketing', 'HR Payroll Management and Services', 'HR Services']
    const Menus1 = ['Home ', 'About Us', 'Social Contacts', 'Careers', 'Clients', 'Login/Sign Up']
    const [services, setservices] = useState()
    const [showSocialNetworks, setShowSocialNetworks] = useState(false)
    console.log(services)
    const onhandleservices = (value) => {
        setservices(value)
        setOpen(false)


    }

    const closePopup = () => {
        setOpen1(false)
    } 
    const navigate = useNavigate();
    return (

        <>
            <div className="sallymaindiv" style={{ height: "70px" }}>
                <div className="sallylogo" onClick={()=> navigate("/")}> <img src={img1} alt="logo" /></div>
                <div className="sallyitems">
                    <div className="sallyitemsInside" style={{cursor:"pointer",borderRadius:"5px"}} onClick={()=>navigate("/")} onMouseOut={()=>navigate("/")} >Home</div>
                    <div className="sallyitemsInside1" style={{cursor:"pointer",borderRadius:"5px"}} onMouseOver={() => {
                        setOpen(!open);
                        sallyPopUp.current.style.visibility = "visible";
                        sallyBurg.current.style.visibility = "hidden";
                        //  if(sallyBurg.current.style.visibility = "visible") {
                        //     sallyBurg.current.style.visibility = "hidden";  
                        //  }

                    }} >Services</div>
                    <div className="sallyitemsInside"style={{cursor:"pointer",borderRadius:"5px"}} onClick={()=>navigate("/Ourworks")}>Our Works</div>
                    <div className="sallyitemsInside"style={{cursor:"pointer",borderRadius:"5px"}} onClick={()=>navigate("/login")}>Careers</div>
                    <div className="sallyitemsInside"style={{cursor:"pointer",borderRadius:"5px"}} onClick={()=>navigate("/About")}>About</div>
                </div>
                <div className="sallyburger-container" > <a>
                    <FiAlignJustify className="sallyburger" onClick={() => {
                        setOpen1(!open1);

                        sallyPopUp.current.style.visibility = "hidden";
                        sallyBurg.current.style.visibility = "visible";

                        //   if(sallyPopUp.current.style.visibility = "visible") {
                        //     sallyPopUp.current.style.visibility = "hidden";  
                        //  }

                    }} />

                </a>
                </div>

            </div>
            <div className="sallypopupBox" ref={sallyPopUp}>
                {
                    open && (
                        <div className="sallyservices-card">
                            <ul className="sallyservices-list" style={{cursor:"pointer"}}>
                                {
                                    Menus.map((menu) => (<li onClick={() => 
                                        {onhandleservices(menu);
                                            navigate(`/${menu}`)
                                        
                                       }} key={menu}>{menu}</li>))
                                }
                            </ul>

                        </div>
                    )}

            </div>
            <div className="sallyburger1" ref={sallyBurg} style={{ cursor: "pointer" }}>
                {
                    open1 && (
                        <div >
                            <ul className="sallyservices-burger">
                                <img className="sallycross-image" src={img2} onClick={closePopup} alt="cross" />

                                {
                                    Menus1.map((menu) => (
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <li onClick={() => onhandleservices(menu)} style={{ "cursor": "pointer" }} key={menu}>{menu}</li>
                                            {menu === "Social Contacts" &&

                                                < SlArrowDown
                                                    onClick={() => setShowSocialNetworks(!showSocialNetworks)}
                                                />

                                            }
                                            {menu === "Social Contacts" && showSocialNetworks &&
                                                <div style={{ display: "flex", flexDirection: "column" }}>
                                                    <div
                                                        onClick={() => setShowSocialNetworks(false)}
                                                    >
                                                        {/* <p><img src={img2} onClick={closePopup} style={{ cursor: "pointer" }} /></p> */}
                                                    </div>
                                                    <div style={{ display: 'flex', alignItems: "center", width: "80px" }}>
                                                        <p>

                                                            <a href="https://www.linkedin.com/company/it-monks-solutions/">
                                                                <CiLinkedin />
                                                            </a>
                                                        </p>

                                                        <p>
                                                            <a href="https://www.facebook.com/profile.php?id=61553934685933&mibextid=ZbWKwL">
                                                                <FaFacebookSquare />
                                                            </a>
                                                        </p>

                                                        <p>
                                                            <a href="https://www.instagram.com/itmonks_solutions?igsh=Z2h5d3Ezbjg3aHNr">
                                                                <CiInstagram />
                                                            </a>
                                                        </p>


                                                    </div>
                                                </div>
                                            }

                                        </div>

                                    ))
                                }

                            </ul>

                        </div>

                    )}
            </div>
            {services === "Project Management" ?
                ""
                :
                services === "App Development" ?
                    ""
                    :
                    services === "IT Development and Payroll" ?
                        ""
                        :
                        services === "Website Design and Development" ?
                            ""
                            :
                            services === "Marketing" ?
                                ""
                                :
                                services === "HR Payroll Management and Services" ?
                                   ""
                                    :
                                    services === "HR Services" ?
                                       ""


                                        : open1 &&
                                            services === "About Us" ?
                                            <div style={{ height: "20rem", backgroundColor: "red", width: "20rem" }}>
                                                <p style={{ color: "black" }}>About Us</p>
                                            </div>
                                            : open1 &&
                                                services === "Home" ?
                                                <div style={{ height: "20rem", backgroundColor: "red", width: "20rem" }}>
                                                    <p style={{ color: "black" }}>Home</p>
                                                </div>
                                                : open1 &&
                                                    services === "Clients" ?
                                                    <div style={{ height: "20rem", backgroundColor: "red", width: "20rem" }}>
                                                        <p style={{ color: "black" }}>Home</p>
                                                    </div>
                                                    : open1 &&
                                                        services === "Login/Sign Up" ?
                                                        <div style={{ height: "20rem", backgroundColor: "red", width: "20rem" }}>
                                                            <p style={{ color: "black" }}>Home</p>
                                                        </div>

                                                        : open1 &&
                                                            services === "Careers" ?
                                                            <div style={{ height: "20rem", backgroundColor: "red", width: "20rem" }}>
                                                                <p style={{ color: "black" }}>carrers</p>
                                                            </div> : null
            }
        </>
    )
}
export default HeaderNavbar;