import React from 'react';
import { MdLocationOn } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Contact =()=>{
    return(
        <div class="contact-container">
    <div class="contact-content">
      <div class="contact-left-side">
        <div class="address details">
          <i><MdLocationOn/></i>
          <div class="contact-topic">Office Address</div>
          <div class="contact-text-one">Surkhet, NP12</div>
          <div class="contact-text-two">Birendranagar 06</div>
        </div>
        <div class="phone details">
          <i><FiPhoneCall/></i>
          <div class="contact-topic">Call Us</div>
          <div class="contact-text-one">+0098 9893 5647</div>
          <div class="contact-text-two">+0096 3434 5678</div>
        </div>
        <div class="email details">
          <i><MdEmail/></i>
          <div class="contact-topic">Email Us</div>
          <div class="contact-text-one">support@gmail.com</div>
          <div class="contact-text-two">restaurant@gmail.com</div>
        </div>
      </div>
      <div class="contact-right-side">
        <div class="contact-topic-text">Get In Touch</div>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <form action="#">
        <div class="contact-input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="contact-input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="contact-input-box contact-message-box">
          <textarea placeholder="Enter your comments"></textarea>
        </div>
        <div class="contact-button">
          <input type="button" value="SEND" />
        </div>
      </form>
    </div>
    </div>
  </div>
    );
};

export default Contact;