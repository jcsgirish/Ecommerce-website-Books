import React, { useContext } from 'react'
import'./Cartcard.styles.css'
import { CartContext } from '../../../App'


const Cartcard=({data})=>{

    const {cartItems,SetcartItems}=useContext(CartContext)
    const handledelete=()=>{
        SetcartItems(cartItems.filter((item)=> item.id  !== data.id))

    }
    return(
        <section className="Cart-section">
        <div className="Cart-container">

         

            <div className='cart-item'>
                <div className='cart-item-img'>
                    <img src={data.book_url} alt='cart-image-item'/>
                </div>
                <div className='cart-item-content'>
                    <h3>{data.book_name }</h3>
                    <p>{data.author_name}</p>
                    <p className='cart-price'> &#8377; {data.price}</p>
                    <button onClick={handledelete} className='Cart-dlt'>Remove from Cart</button>
                </div>
            </div>

        </div>

    </section>
      
    )
}

export default Cartcard