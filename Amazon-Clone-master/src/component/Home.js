import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className ="home">
            <div className="home__container">
                <img className = "home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg" alt=""/>
                
                <div className="home__row">
                    <Product
                    id ={45417512} 
                    title = "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price= {29.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    rating = {4}
                    />
                               
                    <Product 
                    id ={4543732}
                    title = "Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Black)"
                    price= {121.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/612ZBnygMxL._AC_SX679_.jpg"
                    rating = {4}
                    />
                </div>

                <div className="home__row">
                    <Product
                    id = {57234234} 
                    title = "Olytop for Galaxy Watch 46mm Bands & Gear S3 Frontier Bands, Samsung Galaxy Watch 3 45mm Bands, 22mm Quick Release Premium Nylon Sports Strap Wrist Band Men for Samsung Galaxy Watch 45mm/46mm Smartwatch - 2 Pack Black+Army Green"
                    price= {19.58}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71%2BS48wZ3jL._AC_SL1010_.jpg"
                    rating = {4}
                    />
    
                    <Product
                    id = {5656778} 
                    title = "Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
                    price= {29.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg"
                    rating = {5}
                    />
                    
                    <Product
                    id = {2312412} 
                    title = "Apple iPad Mini (Wi-Fi, 64GB) - Space Gray (Latest Model)"
                    price= {384.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71Ha06XS-VL._AC_SL1500_.jpg"
                    rating = {4}
                    />
                </div>

                <div className="home__row">
                    <Product
                    id = {78785645} 
                    title = "SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black"
                    price= {1129.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg"
                    rating = {3}
                    />
                </div>
        
            </div>
        </div>
    )
}

export default Home
