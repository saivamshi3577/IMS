import React from "react";
import WebSiteHomePage from "../../client/src/components/Home/HomePage";
import ProjectManagment from "../../client/src/components/Home/DropdownComponent/ProjectManagment";
import AppDevelopment from "../../client/src/components/Home/DropdownComponent/AppDevelopment";
import ItDevelopment from "../../client/src/components/Home/DropdownComponent/ItDevelopment";
import WebsiteDesign from "../../client/src/components/Home/DropdownComponent/WebsiteDesign";
import Marketing from "../../client/src/components/Home/DropdownComponent/Marketing";
import HrPayroll from "../../client/src/components/Home/DropdownComponent/HrPayroll";
import Resourses from "../../client/src/components/Home/DropdownComponent/HrResourses";
import Ourworks from "../../client/src/components/Home/NavbarComponent/OurWork";
import Careers from "../../client/src/components/Home/NavbarComponent/Careers";
import AboutUs from "../src/components/Home/NavbarComponent/AboutUs"; 
import Login from "../src/components/Loginpage/logindetails/Logins";
import Register from "../../client/src/components/Loginpage/register/Register";
import { BrowserRouter, Route,Routes } from "react-router-dom";

function App() {
  return (
    <> 
     <BrowserRouter>  
    <Routes>
      <Route path="/" element={<WebSiteHomePage />}/>
      <Route path="/Project Management" element={<ProjectManagment/>}/>
      <Route path="/App Development" element={<AppDevelopment />}/>
      <Route path="/IT Development and Payroll" element={<ItDevelopment />}/>
      <Route path="/Website Design and Development" element={<WebsiteDesign />}/>
      <Route path="/Marketing" element={<Marketing/>}/>  
      <Route path="HR Payroll Management and Services" element={<HrPayroll/>}/>
      <Route path="/Ourworks" element={<Ourworks />}/>
      <Route path="/careers" element={<Careers />}/>
      {/* <Route
          path="/Careers"
          element={
            <Login>
              <Routes>
                <Route path="/careers" element={<Careers />} />
              </Routes>
            </Login>
          }
        /> */}
      <Route path="/About" element={<AboutUs />}/> 
      <Route path="/HR Services" element={<Resourses />}/>  
      <Route path="/Login" element={<Login/>}></Route> 
      <Route path="/signUp" element={<Register/>}/>    
      </Routes>
    </BrowserRouter>
      {/* <WebSiteHomePage /> */}
      {/* Dropdown* */}
      {/* <ProjectManagment/> */}
      {/* <AppDevelopment/> */}
      {/* <ItDevelopment/> */}
      {/* <WebsiteDesign/> */}
      {/* <Marketing/> */}
      {/* <HrPayroll/> */}
      {/* <Resourses/> */}

      {/* Navbar Menu */}
      {/* <Ourworks/> */}
      {/* <Careers/> */}
      {/* <AboutUs/> */}
    </>
  );
}

export default App;


 {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Logins/>} />
          <Route path='/signUp' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
        </BrowserRouter> */}