
import React from "react";
import './Loginpage.styles.css'
import Navbar from "../../Components/Layouts/Navbar/Navbar";
import AuthForm from "../../Components/Form/AuthForm/AuthForm";

const Login =()=>{
    return(
        <>
        <Navbar darkTheme={true}/>
        <section className="signup-section">
        <div className="signup-container">
            <div className="signup-items">
                <h2 style={{color:"brown",fontSize:'3rem'}}>LOGIN</h2>
                <p>Login with Email and password </p>
               <AuthForm buttonName = "LOGIN"/>
        </div>
        </div>
        </section>
        </>
    )
}

export default Login