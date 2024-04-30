import React from "react";
import './Cartpage.styles.css'
import Footer from "../../Components/Layouts/Footer/Footer";
import Navbar from "../../Components/Layouts/Navbar/Navbar";
import CartpageItems from "../CartpageItems/CartpageItems";
const Cartpage =()=>{
    return(
        <section>
            
            <Navbar darkTheme={true}></Navbar>
            <CartpageItems></CartpageItems>
            <Footer></Footer>
        </section>
    )
}

export default Cartpage