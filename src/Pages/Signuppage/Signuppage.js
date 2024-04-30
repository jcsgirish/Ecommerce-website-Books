
import React from "react";
import './Signuppage.styles.css'
import Navbar from "../../Components/Layouts/Navbar/Navbar";
import AuthForm from "../../Components/Form/AuthForm/AuthForm";

const Signup =()=>{
    return(
        <>
        <Navbar darkTheme={true}/>
        <section className="signup-section">
        <div className="signup-container">
            <div className="signup-items">
                <h2 style={{color:"orange",fontSize:"3rem"}}>SIGNUP</h2>
                <p>Creat a New Account Here </p>
                <AuthForm buttonName="SIGNUP"/>

        </div>
        </div>
        </section>
        </>
    )
}

export default Signup