
import React from "react";
import Navbar from "../../Components/Layouts/Navbar/Navbar";
import BooksDetails from "../BooksDetails/BooksDetails";
import Footer from "../../Components/Layouts/Footer/Footer";


const Detailspage =()=>{

    return(
    <section>
        <Navbar darkTheme={true}></Navbar>
        <BooksDetails/>
        <Footer/>
    
        
    

    </section>)
}

export default Detailspage