import React from "react";
import "../NavbarComponent/aboutUs.css";
import image1 from "../../Photos/male-employee-sitting-sofa-window-with-his-laptop (1) 1.jpg"
import image3 from "../../Photos/woman-using-laptop-cafe 1.jpg"
import image2 from "../../Photos/young-businessman-very-busy 1.jpg"
import Navbar from "../../Navbar/headerNavbar";
import Footer from '../../Footer/Footer';




function AboutUs() {
  return (<>
    <Navbar />
    <div style={{marginTop:"110px"}}>
    <h1 className="heading">About Us</h1>
    <p className="paragraph">IT Monks Solutions Pvt Ltd is a cutting-edge
      technology firm dedicated to providing innovative and tailored IT solutions. With a focus on delivering exceptional services, we specialize in a wide range of areas, including software development, cloud computing, cybersecurity, and IT consulting. Our team of skilled professionals is committed to
      meeting the unique needs of our clients, leveraging the latest
      technologies to drive efficiency and success. At IT Monks, we strive for
      excellence in every project, aiming to be the trusted partner that empowers
      businesses to thrive in the rapidly evolving digital landscape.</p>
    <h1 className="heading">Meet Our Team</h1>
    <div className="background">
      <div className="background-images">
        <img src={image1} className="image2-width" alt="" />
        <p className="employees">Employee 1</p>
        <p className="para">President</p>
      </div>
      <div className="background-images">
        <img src={image2} className="image2-width" alt="" />
        <p className="employees">Employee 2</p>
        <p className="para">Vise President</p>
      </div>
      <div className="background-images">
        <img src={image3} className="image2-width" alt="" />
        <p className="employees">Employee 3</p>
        <p className="para">Managing Director</p>
      </div>
    </div>
    </div>
    <Footer />
  </>
  )
}
export default AboutUs;