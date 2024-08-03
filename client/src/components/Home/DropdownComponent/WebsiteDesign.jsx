import React from 'react'
import './styleSheet.css'
import WebsiteDesignImage from "../../Photos/map-lying-wooden-table 1.jpg";
import Navbar from "../../Navbar/headerNavbar";
import Footer from '../../Footer/Footer';


function WebsiteDesign() {
  return (
    <>
      <Navbar />
      <div className='mainDetailContainer'>
        <div className='mainDetailContainerHeading'>Website Design and Developement</div>
        <div className='mainDetailContainerBody'>IT Monks Solutions Pvt Ltd excels in providing comprehensive HR Payroll Management and HR Services, offering a seamless and efficient solution for workforce management. Our HR Payroll Management system is designed to streamline payroll processes, ensuring accuracy, compliance, and timely disbursement of employee compensation and benefits. Complementing this, our HR Services encompass a range of strategic and operational support, including talent acquisition, employee onboarding, performance management, and employee engagement initiatives. With a commitment to understanding the unique needs of each client, IT Monks Solutions fosters a collaborative partnership to optimize HR functions, allowing businesses to focus on their core operations while ensuring a motivated and well-supported workforce. Through our integrated HR solutions, we aim to contribute to organizational success by fostering a positive and productive work environment.</div>
        <div className='mainDetailContainerImage'><img src={WebsiteDesignImage} alt="image" /></div>
      </div>
      <Footer />
    </>
  )
}

export default WebsiteDesign