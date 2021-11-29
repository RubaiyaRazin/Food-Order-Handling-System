import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return(
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Affiliate program</a></li>
                                
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Get Help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">Order Status</a></li>
                                <li><a href="#">Payment Options</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Online Shop</h4>
                            <ul>
                                <li><a href="#">Watch</a></li>
                                <li><a href="#">Bag</a></li>
                                <li><a href="#">Shoe</a></li>
                                <li><a href="#">Dress</a></li>
                                <li><a href="#">Skincare</a></li>
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
