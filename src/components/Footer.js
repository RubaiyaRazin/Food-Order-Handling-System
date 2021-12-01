import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return(
        <div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Customer Support</h4>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Help & Ordering</a></li>
                                
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Reservation</a></li>
                                <li><a href="#">Menu</a></li>
                                <li><a href="#">Offer</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Contact Info</h4>
                            <ul>
                                <li><a href="#">Support@gmail.com</a></li>
                                <li><a href="#">restaurant@gmail.com</a></li>
                                <li><a href="#">+01777777777</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Follow Us</h4>
                            <div className="social-links">
                                <a href="#"><i><FaInstagram/></i></a>
                                <a href="#"><i><FaFacebookSquare/></i></a>
                                <a href="#"><i><FaTwitterSquare/></i></a>
                                <a href="#"><i><FaYoutube/></i></a>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </div>

    );

};

export default Footer;
