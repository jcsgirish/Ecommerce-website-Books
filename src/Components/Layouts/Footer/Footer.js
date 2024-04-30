
import React from "react";
import './Footer.styles.css'
import {useRef}from "react";
import emailjs from '@emailjs/browser'


const Footer =()=>{
    
const form = useRef()
const serviceID = "service_95unuft"
const templateID = "template_ouz9g8y"

const publicKey = "g2ZL97mPcF0UCsMk3"
const handleSubmit=(e)=>{
    e.preventDefault()
    emailjs.sendForm(serviceID,templateID,form.current,publicKey)
    .then((response)=>{
        console.log(response.text)
    })
    .catch((error)=>{
        console.log(error.text)

    })
    e.target.reset();

}

    return(
        <section className="Footer-container">
            <h3>Have questions or need assistance? Drop us a line in our Queries section below!  :</h3>

        <form  onSubmit={handleSubmit} ref={form} className="Form-content">
            <div className="Form-group">
                <input type='text' name="from_name" className="Form" placeholder="Enter Your Name"></input>
                <input type="mail" className="Form" name="reply_to" placeholder="Enter Your Email"></input>
                <textarea className="Form" name="message" placeholder="Type Your Query"></textarea>
                <input type="submit" value={"submit"} className="form-btn"></input>
            </div>
            <div className="Patents">
            <p>&copy;2023 BookHive.All Rights Reserved</p>
            </div>
    

        </form>
        

        </section>
    )
}

export default Footer