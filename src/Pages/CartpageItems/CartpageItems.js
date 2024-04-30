import React, { useContext } from 'react'
import './CartpageItems.styles.css'
import Cartcard from '../Cartpage/Cartcard/Cartcard'
import { CartContext } from '../../App'
import StripeCheckout from 'react-stripe-checkout'
import { useNavigate } from 'react-router-dom'

const CartpageItems =()=>{
    const  {cartItems,totalAmount} = useContext(CartContext)
    const StripeKey = 'pk_test_51PBCasSEzKNAeT5TGLF5eYHR5qyFe7dUWF5SK7iKsGBLwcAdjpC9EUWGXQAPFYNPiMVFcTk4HeUcOzd91NLMQHpI005mXrsbNp'
    const navigate = useNavigate()
    const onToken =(token)=>{
        alert("Your payment is Done.Thank You!")
        navigate("/books")
        

    }

    return (
        <section className="Cart-section">
            <div className="Cart-container">

                {totalAmount === 0 ? (
                    <h2>Currently Your Cart is Empty</h2>

                ):(
                    <React.Fragment>
                            <h2>CART</h2>
                {cartItems.map((item)=>(
                    <Cartcard key={item.id} data={item}></Cartcard>

                ))}
                <h2>Total Amount = &#8377;{totalAmount}</h2>
                <StripeCheckout name="Book Checkout"
                 description='Please fill the Details'
                 amount={totalAmount * 100}
                 currency='INR'
                 stripeKey={StripeKey}
                 token={onToken}
                 billingAddress
                 >
                 <button className= 'check-btn'>Proceed to checkout</button>
                 </StripeCheckout>
                    </React.Fragment>
                )}
            </div>

        </section>
    )




}

export default CartpageItems