import React from "react";
import '../DropdownComponent/HrResourses.css';
import shiva from "../../Photos/img1.png";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/headerNavbar";

function Resourses() {
    return (<>
        <Navbar />
        <div className="pad">
            <h1 className="header">HR Services</h1>
            <p className="paragraph">"At IT Monks Solutions Pvt Ltd, our HR Services encompass a full spectrum of strategic and operational support tailored to meet the unique needs of businesses. From talent acquisition and employee onboarding to performance management and engagement initiatives, we provide comprehensive solutions to optimize your HR functions. Our goal is to create a positive and productive work environment that fosters organizational success."</p>
            <img src={shiva} className="img1"></img>
        </div>
        <Footer />
    </>
    )
}

export default Resourses