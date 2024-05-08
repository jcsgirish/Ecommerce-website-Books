import React from "react"
import './Card.styles.css'
import { Link } from "react-router-dom"

const Card=({BookData})=>{
    return(
        <div>
            <div className="Productslist-card">
                <div className="Productslist-container-img">
                    <img src={BookData.book_url} alt="Products" />
            </div>
                    <div className="Productslist-details">
                        <h3>{BookData.book_name}</h3>
                        <p>{BookData.author_name}</p>
                        <p>&#8377; <span style={{color:"brown"}}>{BookData.price}</span></p>
                        
                        <Link to={`/Details/${BookData.id}`} className="product-btn">Book Details</Link>

                    </div>
           </div>
        </div>
    )
}
export default Card