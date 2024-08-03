import React from 'react'
import image1 from "../../Photos/male-employee-sitting-sofa-window-with-his-laptop (1) 1.jpg"
import image2 from "../../Photos/people-generating-images-using-artificial-intelligence-laptop 1.jpg"
import image3 from "../../Photos/woman-using-laptop-cafe 1.jpg"
import image4 from "../../Photos/online-web-design 1.jpg"
import image5 from "../../Photos/top-view-businesswoman-sitting-desk-table-checking-financial-accounting-documents 1.jpg"
import image6 from "../../Photos/man-mobile-people-background-business 1.jpg"
// import bgImg from "../images/Frame 1.png"

import './style.css'
function HomePageComponent2() {
  return (
    <div className='mainBodyContainer'>
        <div className='servicesList'>
            <div className='servicesHeading'>Our Services</div>
            <div className='ourServices'> Project Management</div>
            <div className='ourServices'>App Developement</div>
            <div className='ourServices'>IT Software Developement</div>
            <div className='ourServices'>Website Design and Developement</div>
            <div className='ourServices'>Marketing Services</div>
            <div className='ourServices'>HR Resourses and Developement</div>
        </div>

        <div className='discriptionWithImage'>


            <div className='imageBox'>

                <div className='serviceImage' ><img src={image1} alt="Image"/></div>
                    <div className='description'>
                        <div className='descriptionInfo'>At IT Monks Solutions Pvt Ltd, our approach to project management is grounded in precision and adaptability. We understand the dynamic nature of the IT landscape, and 
Our experienced project teams excel at navigating complexities strategically.</div>
                        <div className='readMore'>Read More</div>
                    </div>
                </div>
            



            <div className='imageBox'>

                <div className='serviceImage'><img src={image2} alt="Imgae2" /></div>
                    <div className='description'>
                        <div className="descriptionInfo">IT Monks Solutions Pvt Ltd excels in the dynamic realm of app development that elevate user experiences and drive business growth.Our skilled team of developers transforms concepts into intuitive, high-performance applications.</div>
                        <div className='readMore'>Read More</div>
                    </div>                
                </div>


            <div className='imageBox'>

                <div className='serviceImage'><img src={image3} alt="Imgae2" /></div>
                    <div className='description'>
                        <div className="descriptionInfo">IT Monks Solutions Pvt Ltd seamlessly integrates IT development and payroll services, offering a comprehensive solution to streamline and optimize the intricate processes of workforce management.</div>
                        <div className='readMore'>Read More</div>
                    </div>
                </div>
        </div>


        

        {/* second row */}



        <div className='discriptionWithImage'>


            <div className='imageBox'>

                <div className='serviceImage' ><img src={image4} alt="Image"/></div>
                    <div className='description'>
                        <div className='descriptionInfo'>Our seasoned team of designers and developers collaborates closely with clients to understand their unique brand identity and business objectives, ensuring the creation of visually stunning and highly responsive websites.</div>
                        <div className='readMore'>Read More</div>
                    </div>
                </div>
            



            <div className='imageBox'>

                <div className='serviceImage'><img src={image5} alt="Imgae2" /></div>
                    <div className='description'>
                        <div className="descriptionInfo">Our marketing strategies are rooted in conveying the value of our innovative solutions, emphasizing client success stories, and establishing thought leadership in the ever-evolving technology landscape.</div>
                        <div className='readMore'>Read More</div>
                    </div>                
                </div>


            <div className='imageBox'>

                <div className='serviceImage'><img src={image6} alt="Imgae2" /></div>
                    <div className='description'>
                        <div className="descriptionInfo">Our HR Payroll Management system is designed to streamline payroll processes, ensuring accuracy, compliance, and timely disbursement of employee compensation and benefits.</div>
                        <div className='readMore'>Read More</div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default HomePageComponent2