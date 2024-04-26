import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./Signup.css"
const SignUp = ()=>{
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const signIn=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential);
        }).catch((error)=>{
            console.log(error);
        })
    }
    return(
        <div className="sign-up-container">
        <form on onSubmit={signIn}>
            <h1>Signup</h1>
            <input type="email" placeholder="Enter your mail" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br/>
            <button type="submit">SignUp</button>
        </form>
    </div>
    );
}
export default SignUp;