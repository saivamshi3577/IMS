import React from 'react'
import img1 from '../../Photos/employer-networking 1.jpg'
import img2 from '../../Photos/close-up-successful-entrepreneur 1.jpg'
import img3 from '../../Photos/young-businessman-very-busy 1.jpg'
import StarIcon from '@mui/icons-material/Star';
import './styling.css'




function OurWorkComponent() {
    return (
        <>
            <div className='topContent'>
                <div id="ourWorkHeading">Our Work</div>
                <div id="ourWorkContent">At IT Monks Solutions Pvt Ltd, our vision is to be at the forefront of technological innovation, empowering businesses to achieve their full potential in the digital era. We aspire to be recognized as a leading provider of transformative IT solutions that not only meet but exceed the evolving needs of our clients. Through a commitment to excellence, continuous learning, and a forward-thinking approach, we envision creating a positive impact on the global business landscape.</div>
                <div id="dummy"></div>
            </div>
            <div id="wholeCardContainer">
                <div id="employeSay">What our Employees Say</div>
                <div className='employeCardsContainer'>
                    <div className='employeCards'>
                        <div className='imageDiv'><img src={img1} alt='img1'></img></div>
                        <div className='imageInfoCard'>
                            <div className='nameDiv'>John</div>
                            <div className='aboutDiv'>Working with IT Monks Solutions was an absolute pleasure! Their team of professionals is highly skilled and dedicated to delivering top-notch IT solutions. We engaged them for software development and were impressed with their innovative approach and timely delivery.</div>
                            <div className='dateDiv'>
                                <div className='date'>3rd December,2023</div>
                                <div className='rating'>
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ///////////////// */}
                    <div className='employeCards'>
                        <div className='imageDiv'><img src={img2} alt='img1'></img></div>
                        <div className='imageInfoCard'>
                            <div className='nameDiv'>Mike</div>
                            <div className='aboutDiv'>Working with IT Monks Solutions was an absolute pleasure! Their team of professionals is highly skilled and dedicated to delivering top-notch IT solutions. We engaged them for software development and were impressed with their innovative approach and timely delivery.</div>
                            <div className='dateDiv'>
                                <div className='date'>3rd December,2023</div>
                                <div className='rating'>
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //////////// */}
                    <div className='employeCards'>
                        <div className='imageDiv'><img src={img3} alt='img1'></img></div>
                        <div className='imageInfoCard'>
                            <div className='nameDiv'>stan lee</div>
                            <div className='aboutDiv'>Working with IT Monks Solutions was an absolute pleasure! Their team of professionals is highly skilled and dedicated to delivering top-notch IT solutions. We engaged them for software development and were impressed with their innovative approach and timely delivery.</div>
                            <div className='dateDiv'>
                                <div className='date'>3rd December,2023</div>
                                <div className='rating'>
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ////////// */}
            <div id="wholeCardContainer">
                <div id="employeSay">What our Clients Say about us</div>
                <div className='employeCardsContainer'>
                    <div className='employeCards'>
                        <div className='imageDiv'><img src={img2} alt='img1'></img></div>
                        <div className='imageInfoCard'>
                            <div className='nameDiv'>Leo</div>
                            <div className='aboutDiv'>Working with IT Monks Solutions was an absolute pleasure! Their team of professionals is highly skilled and dedicated to delivering top-notch IT solutions. We engaged them for software development and were impressed with their innovative approach and timely delivery.</div>
                            <div className='dateDiv'>
                                <div className='date'>3rd December,2023</div>
                                <div className='rating'>
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ///////////////// */}
                    <div className='employeCards'>
                        <div className='imageDiv'><img src={img3} alt='img1'></img></div>
                        <div className='imageInfoCard'>
                            <div className='nameDiv'>Mike</div>
                            <div className='aboutDiv'>Working with IT Monks Solutions was an absolute pleasure! Their team of professionals is highly skilled and dedicated to delivering top-notch IT solutions. We engaged them for software development and were impressed with their innovative approach and timely delivery.</div>
                            <div className='dateDiv'>
                                <div className='date'>3rd December,2023</div>
                                <div className='rating'>
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //////////// */}
                    <div className='employeCards'>
                        <div className='imageDiv'><img src={img1} alt='img1'></img></div>
                        <div className='imageInfoCard'>
                            <div className='nameDiv'>Jack Son</div>
                            <div className='aboutDiv'>Working with IT Monks Solutions was an absolute pleasure! Their team of professionals is highly skilled and dedicated to delivering top-notch IT solutions. We engaged them for software development and were impressed with their innovative approach and timely delivery.</div>
                            <div className='dateDiv'>
                                <div className='date'>3rd December,2023</div>
                                <div className='rating'>
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                    <StarIcon style={{ color: "yellow" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OurWorkComponent