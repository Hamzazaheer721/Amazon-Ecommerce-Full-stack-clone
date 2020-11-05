import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { db } from '../firebase/firebase';
function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() =>{
        //generate the special stripe secret that allows us to charge a customer

        const getClientSecret = async () => {
            //axios is a way of making request
            const response = await axios({
                method: 'post',
                // Stripe expects the total in currencies submits
                url : `http://localhost:5001/clone-c4551/us-central1/api/payments/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret(); 
    }, [basket])

    console.log("The Client Secret >>>>>>>>>>> ", clientSecret);

    const handleSubmit = async (event) =>{
        //do all the fancy stripe stuff
        event.preventDefault();
        setProcessing(true);
        
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method  :{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_BASKET"
            })

            history.replace('/orders')
        })
    }

    const handleChange = event =>{
        setDisabled(event.empty)
        setError(event.error? event.error.message : "");
    }
    return (
        <div className="payment">
            <div className="payment__container">

                <h1>
                    Checkout (<Link to = "/checkout"> 
                        {basket?.length} items
                        </Link>)    
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p> AllahAbad </p>
                        <p> Wazirabad </p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>

                    <div className="payment__items">
                        {basket.map((item) => 
                            <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                            />
                        )}              
                     </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement  onChange={handleChange}/>

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                renderText = { (value) => (
                                    <>
                                        <p>
                                            Subtotal ({basket.length} items): <strong>{value}</strong>
                                        </p>
                                        <small className= "subtotal__gift">
                                            <input type="checkbox"/>
                                            This order contains a gift
                                        </small>
                                    </>
                                )}
                                decimalScale={2}
                                value ={getBasketTotal(basket)}
                                displayType= {'text'}
                                thousandSeperator= {true}
                                prefix={"$"}
                                />
                                <button disabled = {processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> :
                                        "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div> {error} </div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
