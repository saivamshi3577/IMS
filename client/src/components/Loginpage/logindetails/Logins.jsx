import Loginfooter from "../logindetails/../loginfooter/Loginfooter"
import redphoto from "../../Photos/Rectangle 25.png"
import photo from "../../Photos/imsnewlogo.png";


import axios from "axios";
import React, { useRef, useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './logins.css';
function Login() {  
    const navigate = useNavigate();
    const emailInputRef = useRef();
    const passwordInputRef = useRef(); 
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("")



    const validateForm = () => {
        let valid = true
        
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(emailInputRef.current.value.trim())){
           setEmailError("Please enter a valid email address");
           valid = false;
        }else {
            setEmailError("")
        }

        if(!passwordInputRef.current.value.trim()){
            setPasswordError("Password must be at least 6 characters long")
            valid = false
        }else {
            setPasswordError("")
        }
        return valid;
    }
    // const  loginToHome = async () => {
    //     let dataToSend = new FormData();
    //     dataToSend.append("email", emailInputRef.current.value);
    //     dataToSend.append("password", passwordInputRef.current.value);
    //     let JSONData = await axios.post("http://localhost:8888/login", dataToSend);
    //     console.log('Response Data:', JSONData.data);
    //     console.log(JSONData);
    //     alert(JSONData.data.status);
    //     if (JSONData.data.status === "success") {
    //         navigate('/home');      
    //     }

    // }
        const loginToHome = async () => {
            if(validateForm()){
               let dataToSend = new FormData();
               dataToSend.append("email", emailInputRef.current.value);
               dataToSend.append("password", passwordInputRef.current.value);
               
               try{
                   let response = await axios.post("/login", dataToSend);
                   console.log('Response Data:', response.data);
                       alert(response.data.status);

                if (response.data.status === 'success') {
                
                   navigate('/careers');
                    
                 }
              
               }catch (error){
                console.error('Error during login:', error);
                alert('Login failed. Please try again.');
               }
            }
        }
    return (
    <>
        <div className="mainDiv">
            <img className="red" src={redphoto} alt=""></img>
            <img className="ims"src={photo} alt=""></img>
            <div className="card" id="card1">
                <form>
                    <h1 className="heading1">Welcome</h1>
     
                    <input type="text" id="email" placeholder="Email" className="inputBox" ref={emailInputRef}></input><br></br>
                    <div className="error-message">{emailError}</div>
                    <input type="text" id="password" placeholder="Password" className="inputBox" ref={passwordInputRef}></input><br></br>
                    <div className="error-message">{passwordError}</div>
                    <button type='button' className="btn1" onClick={()=> {
                        loginToHome();
                    }}>log in</button>
                    <h2>New User? <NavLink to="/signUp"><h4 style={{display:"inline-block", color:"white"}}>Sign up now</h4></NavLink></h2>
                </form>
            </div>
            
        </div>
        <Loginfooter/>
        </>
        
    )
    
} 

export default Login;