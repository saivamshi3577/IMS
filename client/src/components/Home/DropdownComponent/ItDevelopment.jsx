import React from 'react'
import './styleSheet.css'
import ItDevelopmentImage from "../../Photos/portrait-caucasian-unset-despair-man-watching-financial-economical-graphs-during-coronavirus-quarantine-problems 1.jpg"
import Navbar from "../../Navbar/headerNavbar";
import Footer from '../../Footer/Footer';

function ItDevelopment() {
  return (<>
    <Navbar />
    <div className='mainDetailContainer'>
      <div className='mainDetailContainerHeading'>IT Development and Payroll</div>
      <div className='mainDetailContainerBody'>IT Monks Solutions Pvt Ltd seamlessly integrates IT development and payroll services, offering a comprehensive solution to streamline and optimize the intricate processes of workforce management. Our IT development expertise ensures the design and implementation of robust, user-friendly payroll systems tailored to the specific needs of our clients. We prioritize accuracy, compliance, and efficiency in our payroll solutions, enabling businesses to manage employee compensation, benefits, and tax obligations with ease. Through the convergence of IT innovation and payroll management, IT Monks Solutions empowers organizations to focus on their core competencies while ensuring a seamless and error-free payroll process, ultimately contributing to enhanced operational efficiency and employee satisfaction.</div>
      <div className='mainDetailContainerImage'><img src={ItDevelopmentImage} alt="image" /></div>
    </div>
    <Footer />
  </>
  )
}

export default ItDevelopment