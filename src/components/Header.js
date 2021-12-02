// by using rafce short cut key 
import React from 'react'
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="banner">
        <Navbar />
        <div className="banner__content">
            <div className="container">
                <div className="banner__text">
                    <h3>Food Order Handling</h3>
                    <h1>Food Made With Love</h1>
                    <p>
                        To Eat Is A Necessity, But To Eat Intelligently Is An Art!
                        Good Food Is The Foundation Of Genuine Happiness.
                    </p>

                    <div className="banner__btn">
                        <a href="" className="btn btn-smart">
                            CONFIRM ORDER
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header
