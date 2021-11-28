
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pic1 from "../img/food1.png";
import pic2 from "../img/food2.png";
import pic3 from "../img/food3.png";
import pic4 from "../img/food4.png";
import pic5 from "../img/food5.png";
import pic6 from "../img/food6.png";

import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="offer-slide">
        <h3> Exclusive </h3>
        <h4>BEST OFFER</h4>
        <Slider {...settings}>
            <div className="box">
            <div className="slide-img">
                <img src={pic1} alt="food img"/>
                <div className="overlayer">
                    <a href="#" className="cart-btn">ADD TO CART</a>
                </div>
            </div>
            <hr/>
            <div className="detail-box">
                <div className="type">
                    <a href="#">Weekend Snacks</a>
                </div>
                <a href="#" className="price">750.00</a>
            </div>
            </div>

            <div className="box">
            <div className="slide-img">
                <img src={pic2} alt="food img"/>
                <div className="overlayer">
                    <a href="#" className="cart-btn">ADD TO CART</a>
                </div>
            </div>
            <hr/>
            <div className="detail-box">
                <div className="type">
                    <a href="#">Salmon & Vegetables</a>
                </div>
                <a href="#" className="price">1200.00</a>
            </div>
            </div>

            <div className="box">
            <div className="slide-img">
                <img src={pic3} alt="food img"/>
                <div className="overlayer">
                    <a href="#" className="cart-btn">ADD TO CART</a>
                </div>
            </div>
            <hr/>
            <div className="detail-box">
                <div className="type">
                    <a href="#">Beef Burger</a>
            </div>
                <a href="#" className="price">450.00</a>
            </div>
            </div>

            <div className="box">
            <div className="slide-img">
                <img src={pic4} alt="food img"/>
                <div className="overlayer">
                    <a href="#" className="cart-btn">ADD TO CART</a>
                </div>
            </div>
            <hr/>
            <div className="detail-box">
                <div className="type">
                    <a href="#">Steak with Fries</a>
                </div>
                <a href="#" className="price">1100.00</a>
            </div>
            </div>

            <div className="box">
            <div className="slide-img">
                <img src={pic5} alt="food img"/>
                <div className="overlayer">
                    <a href="#" className="cart-btn">ADD TO CART</a>
                </div>
            </div>
            <hr/>
            <div className="detail-box">
                <div className="type">
                    <a href="#">Shrimp Pizza</a>
                </div>
                <a href="#" className="price">750.00</a>
            </div>
            </div>

            <div className="box">
            <div className="slide-img">
                <img src={pic6} alt="food img"/>
                <div className="overlayer">
                    <a href="#" className="cart-btn">ADD TO CART</a>
                </div>
            </div>
            <hr/>
            <div className="detail-box">
                <div className="type">
                    <a href="#">Mushroom Special Pizza</a>
                </div>
                <a href="#" className="price">470.00</a>
            </div>
            </div>

        </Slider>
      </div>
    );
  }
}