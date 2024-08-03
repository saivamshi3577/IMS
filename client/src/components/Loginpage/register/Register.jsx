
import { NavLink } from "react-router-dom";
import photo from "../../Photos/imsnewlogo.png"
import redphoto from "../../Photos/Rectangle 25.png";
import Loginfooter from "../logindetails/../loginfooter/Loginfooter"
import axios from "axios";

import './register.css';
import React, { useRef, useState } from "react";  

const  SignUp =() =>{  
 
    // const userInputRef = useRef();
    // const emailInputRef = useRef();
    //  const passwordInputRef = useRef();

    // let postDataIntoDb = async () => {
    //     let dataToSend = new FormData();
    //     dataToSend.append("userName", userInputRef.current.value);
    //     dataToSend.append("email", emailInputRef.current.value);
    //     dataToSend.append("password", passwordInputRef.current.value);
    //     console.log("FormData values:", userInputRef.current.value, emailInputRef.current.value, passwordInputRef.current.value)

    //     let JSONData = await axios.post("http://localhost:8888/SignUp", dataToSend)
    //     console.log(JSONData);
    //     console.log(JSONData.data.status);
    //     alert(JSONData.data.msg)
    const userInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const clearInputFields = () => {
      userInputRef.current.value = '';
      emailInputRef.current.value = '';
      passwordInputRef.current.value = '';
    };
  
    const validateForm = () => {
      let valid = true;
  
      if (!userInputRef.current.value.trim()) {
        setUsernameError("Please enter a valid username");
        valid = false;
      } else {
        setUsernameError("");
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInputRef.current.value.trim())) {
        setEmailError("Please enter a valid email address");
        valid = false;
      } else {
        setEmailError("");
      }
  
      if (passwordInputRef.current.value.trim().length < 6) {
        setPasswordError("Password must be at least 6 characters long");
        valid = false;
      } else {
        setPasswordError("");
      }
  
      return valid;
    };

  const postDataIntoDb = async () => {
    if (validateForm()) {
      let dataToSend = new FormData();
      dataToSend.append("userName", userInputRef.current.value);
      dataToSend.append("email", emailInputRef.current.value);
      dataToSend.append("password", passwordInputRef.current.value);

      try {
        let response = await axios.post("/SignUp", dataToSend);
        console.log(response);
        console.log(response.data.status);
        alert(response.data.msg);
        
        if (response.data.status === 'success') {
          clearInputFields(); // Reset input fields on successful registration
        }
      } catch (error) {
        console.error("Error during registration:", error);
        alert("Registration failed. Please try again.");
      }
    }
  };
    // }
    return (
    <>
        <div className="mainDiv">
            <img className="red" src={redphoto} alt=""></img>
            <img className="ims"src={photo} alt=""></img>
            <div className="card" id="card1">
                <form>
                    <h1 className="heading4">Welcome</h1>
                    {/* <label for="username" className="text">Forgot Username?</label><br></br> */}
                    <input type="text" id="username" placeholder="Username" className="inputBox" ref={userInputRef}></input><br></br>
                    <div className="error-message">{usernameError}</div>
                    {/* <label for="password" className="text">Forgot Password?</label><br></br> */}
                    <input type="text" id="email" placeholder="Email" className="inputBox" ref={emailInputRef}></input><br></br>
                    <div className="error-message">{emailError}</div>
                    <input type="text" id="password" placeholder="Enter Password" className="inputBox" ref={passwordInputRef}></input><br></br>
                    <div className="error-message">{passwordError}</div>
                    {/* <input type="checkbox" className="checkBox"></input> 
                    <label className="text2">Keep me signed in</label><br></br> */}
                    <button type="button" className="btn2" onClick={()=>{
                        postDataIntoDb();
                    }}>Register</button>
                    <h2>Already User?{""} <NavLink to="/" ><h4 style={{display:"inline-block", color:"white"}}>log in</h4></NavLink>{""} </h2>
                </form>
                
            </div>
        </div>
        <Loginfooter/>
        </>
        
    )
} 

export default SignUp;