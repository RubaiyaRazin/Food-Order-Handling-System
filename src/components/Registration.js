import React from 'react';

const Registration =()=>{
    return(
    <div class="reg-container">
      <div class="reg-content">
        <div class="reg-title"><span>Registration</span></div>
      <form action="#">
        <div class="reg-user-details">
          <div class="reg-input-box">
            <span class="reg-details">Full Name</span>
            <input type="text" placeholder="Enter your name" required=""/>
          </div>
          <div class="reg-input-box">
            <span class="reg-details">Username</span>
            <input type="text" placeholder="Enter your username" required=""/>
          </div>
          <div class="reg-input-box">
            <span class="reg-details">Email</span>
            <input type="text" placeholder="Enter your email" required=""/>
          </div>
          <div class="reg-input-box">
            <span class="reg-details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required=""/>
          </div>
          <div class="reg-input-box">
            <span class="reg-details">Password</span>
            <input type="text" placeholder="Enter your password" required=""/>
          </div>
          <div class="reg-input-box">
            <span class="reg-details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required=""/>
          </div>
        </div>
        <div class="reg-button">
          <input type="submit" value="Register"/>
        </div>
        <div class="reg-signup-link">Not a member? <a href="#">Signin now</a></div>
      </form>
    </div>
  </div>
    );
};

export default Registration;