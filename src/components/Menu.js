import React from 'react'       //rafce is a Shortcut to write react code
import Item from './Item';
import Pizza from "../img/pizza.png";
import Tikka from "../img/tikka.png";


const Menu = ({name, desc}) => {
    return (
        <section className="features-boxed">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center">{name}</h2>
                    <p className="text-center">{desc}</p>
                </div>
                <div className="row justify-content-center features">
                    <Item name="BBQ Chicken" 
                    desc="BBQ Chicken with grilled chicken."
                    price={12.50}
                    img={Pizza}
                    />
                    
                    <Item name="BBQ Chicken" 
                    desc="BBQ Chicken with grilled chicken."
                    price={12.50}
                    img={Tikka}
                    />

                    <Item name="BBQ Chicken" 
                    desc="BBQ Chicken with grilled chicken."
                    price={12.50}
                    img={Pizza}
                    />

                    <Item name="BBQ Chicken" 
                    desc="BBQ Chicken with grilled chicken."
                    price={12.50}
                    img={Tikka}
                    />

                    <Item name="BBQ Chicken" 
                    desc="BBQ Chicken with grilled chicken."
                    price={12.50}
                    img={Pizza}
                    />

                    <Item name="BBQ Chicken" 
                    desc="BBQ Chicken with grilled chicken."
                    price={12.50}
                    img={Tikka}
                    />

                    <Item name="BBQ Chicken" 
                    desc="BBQ Chicken with grilled chicken."
                    price={12.50}
                    img={Pizza}
                    />
                    
                    <Item name="BBQ Chicken" 
                    desc="BBQ Chicken with grilled chicken."
                    price={12.50}
                    img={Tikka}
                    />

                    <Item name="BBQ Chicken" 
                    desc="BBQ Chicken with grilled chicken."
                    price={12.50}
                    img={Pizza}
                    />

                    <Item name="BBQ Chicken" 
                    desc="BBQ Chicken with grilled chicken."
                    price={12.50}
                    img={Tikka}
                    />

                </div>
            </div>
        </section>
    );
};

export default Menu;