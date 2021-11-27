import React from 'react';
import about_img from '../img/food.png';

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-25">    {/*here p-25 for padding */}
                        <h3>About Us</h3>
                        <h1>WELCOME TO Our Food Order Handling Website!</h1>
                        <p>
                            Investigationes demonstraverunt lectores legere me lius quod ii
                            legunt saepius. Claritas est etiam processus dynaus, quise
                            sequitur mutationem consuetudium lectorum.
                        </p>
                        <div className="about__btn">
                            <a href="" className="btn btn-smart">
                                READ MORE
                            </a>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__img">
                            <img src={about_img} alt="Pizza" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
