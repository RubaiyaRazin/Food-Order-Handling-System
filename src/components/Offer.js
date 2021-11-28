
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pic1 from "../img/food1.png";

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
                    <a href="#">Fried Potato & Drinks</a>
                </div>
                <a href="#" className="price">$10</a>
            </div>
            </div>

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
                    <a href="#">Fried Potato & Drinks</a>
                </div>
                <a href="#" className="price">$10</a>
            </div>
            </div>

            <div className="box">
            <div className="slide-img">
                <img src={pic1} alt="food img"/>
                <div className="overlayer">
                    <a href="#" className="cart-btn">ADD TO CART</a>
                </div>
            </div>
            <div className="detail-box">
                <div className="type">
                    <a href="#">Fried Potato & Drinks</a>
            </div>
                <a href="#" className="price">$10</a>
            </div>
            </div>

            <div className="box">
            <div className="slide-img">
                <img src={pic1} alt="food img"/>
                <div className="overlayer">
                    <a href="#" className="cart-btn">ADD TO CART</a>
                </div>
            </div>
            <div className="detail-box">
                <div className="type">
                    <a href="#">Fried Potato & Drinks</a>
                </div>
                <a href="#" className="price">$10</a>
            </div>
            </div>

            <div className="box">
            <div className="slide-img">
                <img src={pic1} alt="food img"/>
                <div className="overlayer">
                    <a href="#" className="cart-btn">ADD TO CART</a>
                </div>
            </div>
            <div className="detail-box">
                <div className="type">
                    <a href="#">Fried Potato & Drinks</a>
                </div>
                <a href="#" className="price">$10</a>
            </div>
            </div>

            <div className="box">
            <div className="slide-img">
                <img src={pic1} alt="food img"/>
                <div className="overlayer">
                    <a href="#" className="cart-btn">ADD TO CART</a>
                </div>
            </div>
            <div className="detail-box">
                <div className="type">
                    <a href="#">Fried Potato & Drinks</a>
                </div>
                <a href="#" className="price">$10</a>
            </div>
            </div>

            <div className="box">
            <div className="slide-img">
                <img src={pic1} alt="food img"/>
                <div className="overlayer">
                    <a href="#" className="cart-btn">ADD TO CART</a>
                </div>
            </div>
            <div className="detail-box">
                <div className="type">
                    <a href="#">Fried Potato & Drinks</a>
                </div>
                <a href="#" className="price">$10</a>
            </div>
            </div>

        </Slider>
      </div>
    );
  }
}