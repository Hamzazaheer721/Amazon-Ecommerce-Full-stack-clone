import React, { useState } from 'react'
import { Link, useHistory} from 'react-router-dom'
import { auth } from '../firebase/firebase';
import './Login.css'
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth =>{
            history.push('/')
        })
        .catch(err => alert(err.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) =>{
            //successfully created!!
            console.log(auth);
            if(auth){
                history.push('/')
            }
        }).catch(err => alert(err.message))
    }

     
 
    return (
        <div className = "login">
            <Link to = '/'>
                <img className= "login__logo" src="https://lh3.googleusercontent.com/proxy/PTU-DGpVOoNvbE1mpcuVolfomcdw5EgrJzy9ZKpz8GEjcU5erKaIBJb6KjucpNLIfXgDsmOWgti2R8_ddeEhfUw0zwByUp-t8gyRPZdcGQnDcoPEiADHmcWDBIkB9OxzM3Q87JBTvhg9B4dTAw" />
            
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5> Email </h5>
                    <input 
                    value = {email} 
                    onChange={e => setEmail(e.target.value)}
                    type="text"
                    />

                    <h5> Password </h5>
                    <input 
                    value = {password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    />

                    <button type = "submit" onClick = {signIn} className="login__signInButton"> Sign In</button>
                </form>   
                
                <p>
                By continuing, you agree to this Amazon Clone Conditions of Use and Privacy Notice.
                </p>

                <button onClick = {register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>

        
    )
}

export default Login
