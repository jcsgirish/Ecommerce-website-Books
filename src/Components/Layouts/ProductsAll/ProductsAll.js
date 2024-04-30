import React from "react";
import Card from "../../Cards/Card";
import './ProdcuctsAll.styles.css'
import { BookData } from "../../../Pages/BookData/BookData";


const ProductsAll=()=>{

    return(
    <div className="Products-allcontainer">
        <div className="Grid-container">
            {BookData.map((book)=>{
                    return(
                    <div  key={book.id} className="grid-items">
                        {<Card BookData={book}/>}
                    </div>
                    )
                })}
        
        </div>
    </div>
    )
}

export default ProductsAll