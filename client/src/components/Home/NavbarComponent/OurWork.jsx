import React from "react";
// import image from  "../../Photos/"
import image from "../../Photos/Rectangle 26.png";
import workingwomen from "../../Photos/woman-working-laptop 1.png";
import "../NavbarComponent/ourWork.css";
import Navbar from "../../Navbar/headerNavbar";
import Footer from '../../Footer/Footer';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"

function Ourworks() {
    return (
        <>
            <Navbar />
            <h1 className="heading" style={{color:"red"}}>We Create an Incredible Designs</h1>
            <div className="container">
                <div className="left">
                    <p >"At IT Monks Solutions Pvt Ltd, we redefine user <br/> experiences through our commitment to cutting-edge UX design. Our seasoned team of designers collaborates closely with clients to understand their unique brand identity, ensuring the creation of visually stunning and highly intuitive interfaces. From conceptualization to deployment, we prioritize user-centric design principles, ensuring that every interaction with our / and websites is not just seamless but also delightful. At the intersection of creativity and functionality, we elevate digital experiences, setting new standards in UX design excellence."</p>
                </div>
                <div className="right">

                    <img src={image} className="img2" alt="new" />

                </div>
            </div>
            <h1 className="heading-1">We Create an Amazing Websites</h1>
            <div className="container-1">
                <div className="left-1">
                    <img src={workingwomen} className="img3" alt="new" />

                </div>
                <div className="right-1">

                    <p>"At IT Monks Solutions Pvt Ltd, we excel in the art of website creation. From concept to code, our dedicated team combines creativity and technical prowess to craft bespoke websites tailored to your unique needs. We go beyond the ordinary, ensuring that your online presence is not just a website but a dynamic, engaging experience. Partner with us to embark on the journey of creating a website that seamlessly blends innovation, design, and functionality, setting you apart in the digital realm."</p>
                </div>

            </div>
            <p className="next">Next<MdOutlineKeyboardDoubleArrowRight /></p>
            <Footer />
        </>
    )
}
export default Ourworks;