import React from "react";
import Navbar from "../Navbar/headerNavbar";
import HomePageComponent1 from "../Home/HomeComponent/WebPage"
import HomePageComponent2 from "../Home/HomeComponent/Body";
import HomePageComponent3 from "../Home/HomeComponent/FoundationPrinciple";
import HomePageComponent4 from "../Home/HomeComponent/OurWorkComponent";
import Footer from "../Footer/Footer"

function WebSiteHomePage() {
    return (
        <>
            <Navbar />
            <HomePageComponent1 />
            <HomePageComponent2 />
            <HomePageComponent3 />
            <HomePageComponent4 />
            <Footer />
        </>
    )
}
export default WebSiteHomePage;