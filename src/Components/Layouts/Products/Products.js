import React from "react"
import "./Product.styles.css"
import Card from "../../Cards/Card"
import { BookData } from "../../../Pages/BookData/BookData"


const ProductsList=()=>{


    return(
<div className="Products-container">
    <div className="container">
         <h2>Get Your <span style={{color:"brown"}}>Limited Edition Books !</span></h2>

<div className="Productslist-container">  

{BookData.slice(0,6).map((book)=>(
                 <Card BookData={book} key={book.id}></Card>

    ))}
        

</div>
    </div>
</div>
   
    )
}

export default ProductsList