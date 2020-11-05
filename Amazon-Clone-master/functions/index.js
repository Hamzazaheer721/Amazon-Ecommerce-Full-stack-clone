const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')
//secret key is added here
const stripe = require("stripe")('sk_test_51Hh9urHiPWmDi69yDnJnuX7eZB9wESUTFURgvw3AnXHOq5XTSUS464lgWxSOS2AENjdO0DvhnsYRmGkbjZzu6kQx00ChrejcaI')


//API
//App Config
const app = express();

//Middlewares
app.use(cors ({origin: true}));
app.use(express.json());  

//API routes
app.get('/', (request,response) =>{
    response.status(200).send('Hello World')
})

app.post('/payments/create', async (request, response) =>{
    const total = request.query.total;
    console.log("Payment Received !!!!!!!! for this total ==========>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,          //submits of the currency
        currency: "usd",
    });

    //ok created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,

    })
})
//listen command
exports.api = functions.https.onRequest(app)

//Example end point
//http://localhost:5001/clone-c4551/us-central1/api
//clicking it will cause you to see what is in app.get('/')