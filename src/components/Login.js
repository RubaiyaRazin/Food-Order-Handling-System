import React from 'react';
import { RiUser3Fill } from "react-icons/ri";
import { FaLock } from "react-icons/fa";

const Login =()=>{
    return(
    <div class="login-container">
      <div class="login-wrapper">
        <div class="login-title"><span>LOGIN FORM</span></div>
        <form action="#">
          <div class="login-row">
            <i class="fas fa-user"><RiUser3Fill/></i>
            <input type="text" placeholder="Email or Phone" required=""/>
          </div>
          <div class="login-row">
            <i class="fas fa-lock"><FaLock/></i>
            <input type="password" placeholder="Password" required=""/>
          </div>
          <div class="login-pass"><a href="#">Forgot password?</a></div>
          <div class="login-row login-button">
            <input type="submit" value="Login"/>
          </div>
          <div class="login-signup-link">Not a member? <a href="#">Sign up now</a></div>
        </form>
      </div>
    </div>
    );
};

export default Login;