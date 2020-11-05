import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className= "checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_LP_Dash_en_US.jpg" className="checkout__ad"/>
                <div>
                    <h3 className="checkout__user">Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct 
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />
                    ))}
                    
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
