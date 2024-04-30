import React from "react";

import Showcase from "../../Components/Layouts/Showcase/Showcase";
import ProductsList from "../../Components/Layouts/Products/Products";
import Footer from "../../Components/Layouts/Footer/Footer";

const Homepage =()=>{

    return(
        <section>
            {<Showcase/>}
            {<ProductsList/>}
            {<Footer/>}
        </section>
    )
}


export default Homepage;