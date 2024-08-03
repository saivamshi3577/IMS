import React from 'react'
import './styleSheet.css'
import MarketingImage from '../../Photos/map-lying-wooden-table 2.jpg'
import Navbar from "../../Navbar/headerNavbar";
import Footer from '../../Footer/Footer';


function Marketing() {
  return (
    <>
      <Navbar />

      <div className='mainDetailContainer'>
        <div className='mainDetailContainerHeading'>Marketing</div>
        <div className='mainDetailContainerBody'>IT Monks Solutions Pvt Ltd takes a strategic and comprehensive approach to marketing, recognizing its pivotal role in showcasing our cutting-edge IT services. With a focus on digital marketing, we leverage various channels to amplify our brand presence and connect with a wider audience. Our marketing strategies are rooted in conveying the value of our innovative solutions, emphasizing client success stories, and establishing thought leadership in the ever-evolving technology landscape. From targeted online campaigns to engaging content creation, we strive to not only promote our services but also to educate and inspire our audience. IT Monks Solutions is committed to staying at the forefront of digital marketing trends, ensuring that our message resonates with potential clients and reinforces our position as a trusted and forward-thinking IT partner</div>
        <div className='mainDetailContainerImage'><img src={MarketingImage} alt="image" /></div>
      </div>
      <Footer />
    </>
  )
}

export default Marketing