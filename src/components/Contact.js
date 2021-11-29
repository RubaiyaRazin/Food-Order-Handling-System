import React from "react";

const Contact = () =>{
    return(
        <section>
            <div className="contactContainer">
                    <div className="contactForm">
                        <h2>Send a Message</h2>
                        <div className="formBox">
                            <div className="inputBox w50">
                                <input type="text" required/>
                                <span>First Name</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="text" required/>
                                <span>Last Name</span>
                            </div>
                            <div className="inputBox w50">
                                <input type="email" required/>
                                <span>Email Address</span>
                            </div>
                            <div className="inputBox w100">
                                <textarea required></textarea>
                                <span>Write message here</span>
                            </div>
                            <div className="inputBox w100">
                                <input type="submit" value="send"/>
                            </div>
                        </div>

                    </div>
            </div>

        </section>
    );
};

export default Contact;