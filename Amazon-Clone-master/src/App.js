
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom'
import Checkout from './component/Checkout';
import Login from './component/Login';
import { useEffect } from 'react';
import { auth } from './firebase/firebase';
import { useStateValue } from './component/StateProvider';
import Payment from './component/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './component/Orders';
function App() {
  const [state, dispatch] = useStateValue();
  const promise = loadStripe("pk_test_51Hh9urHiPWmDi69y1gq2dLH54vpXvy01K4FvP2htYqwfL6ZHmK3r0SwPlmwG4tgRq0xmdMbwMBt4ogREtR1mWKUb00GRpEHRvJ")
  
  
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("USER IS ", authUser);
      if(authUser){
        dispatch({
          type : "SET_USER",
          user: authUser         
        })
      }else{
        dispatch({
          type : "SET_USER",
          user: null
        })
      }
    })
  },[])


  return (
        <Router>
          <div className="App">
            <Switch>
                <Route path = "/login">   
                  <Login />
                </Route>
                
                <Route path = "/orders"> 
                  <Header />  
                  <Orders />
                </Route>


                <Route path = "/checkout"> 
                  <Header />    
                  <Checkout />
                </Route>

                <Route path = "/payment">   
                  <Header />
                  <Elements stripe ={promise}>  
                    <Payment />
                  </Elements>
                  
                  
                </Route>

                <Route path = "/"> 
                  <Header />   
                  <Home />
                </Route>
            </Switch>
          </div>
        </Router>
  );
}

export default App;
