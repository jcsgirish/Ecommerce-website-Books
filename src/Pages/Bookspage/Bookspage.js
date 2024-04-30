import React from "react";
import Navbar from "../../Components/Layouts/Navbar/Navbar";
import InputForm from "../../Components/Form/InputForm/InputForm";
import './Bookspage.styles.css'
import ProductsAll from "../../Components/Layouts/ProductsAll/ProductsAll";
import Footer from "../../Components/Layouts/Footer/Footer";



const Bookspage=()=>{

    return (
        <section>
            <Navbar darkTheme={true}/>
            <div className="Books-form" >
            <InputForm/>
            </div>
          
          <div>
            {<ProductsAll/>}
          </div>

          <div>
            {<Footer/>}
          </div>
        </section>
    )
}

export default Bookspage