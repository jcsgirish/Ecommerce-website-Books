
import React from "react";
import './Showcase.Styles.css'
import Navbar from "../Navbar/Navbar";
import InputForm from "../../Form/InputForm/InputForm";

const Showcase=()=>{
    return(
        <section className="showcase-container">

            {<Navbar></Navbar>}
            <div className="showcase-content">
                <h1>Books for <span style={{color:"brown"}}>Sale!</span></h1>
                <p>Get your <span style={{color:"maroon"}}>favourite books</span> at best prices</p>
                <div>{<InputForm/>}</div>
              
            </div>
            

        </section>
    )
}

export default Showcase