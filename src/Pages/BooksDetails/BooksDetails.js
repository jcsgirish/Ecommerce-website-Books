import React, { useState,useContext } from "react";
import './BooksDetails.styles.css';
import { useParams } from "react-router-dom";
import { BookData } from "../BookData/BookData";
import { useEffect } from "react";
import { CartContext, UserContext } from "../../App";
import { useNavigate } from "react-router-dom";

const BooksDetails=()=>{
    const {id} = useParams();
    const navigate =useNavigate()

    
    const [data,Setdata]=useState({})

    const user = useContext(UserContext);

    const {cartItems,SetcartItems} = useContext(CartContext)

useEffect(()=>{
    let Newdata = BookData.filter((book)=> book.id === parseInt(id));
    Setdata(Newdata[0])

    },[id])

    const HandletoCart=()=>{
        if(user){
            SetcartItems([...cartItems, data]);
                    alert(`The book ${data.book_name} is added to the cart` )
        }else{
            navigate('/signup')
            alert("Please Login or Signup first!!");

        }

    };

    return(
        <section>
            <div className="BooksDetails-container">
                <div className="flex-container">
                    <div className="img-container">
                        <img src={data.book_url}/>
                    </div>
                    <div className="bookdtls-container">
                        <h2 style={{color:"black"}}>{data.book_name}</h2>

                        <p style={{color:"brown"}}>{data.author_name}</p>

                        <p style={{color:"burlywood"}}>{data.book_description}</p>
                        <p>Language:English</p>

                        <p>BookLength: {data.print_length} Pages</p>

                        <p>&#8377;{data.price}</p>
                        <br></br>

                        <div>
                        <a onClick={HandletoCart} className="Cart-btn"> Add to Cart</a>
                        </div>
                        

                     
                    </div>
                   
                </div>

            </div>
        </section>
    )
}

export default BooksDetails