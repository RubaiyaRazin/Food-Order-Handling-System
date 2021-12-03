import React from 'react'       //rafce is a Shortcut to write react code
import Item from './Item';
import BBQPizza from "../img/BBQPizza.png";


const Menu = ({name, desc}) => {
    return (
        <section className="features-boxed">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center">{name}</h2>
                    <p className="text-center">{desc}</p>
                </div>
                <div className="row justify-content-center features">
                    <Item name="BBQ Chickne" 
                    desc="BBQ Chicken with grilled chicken."
                    price={12.50}
                    img={BBQPizza}
                    />
                    
                    <Item name="BBQ Chickne" 
                    desc="BBQ Chicken with grilled chicken."
                    price={12.50}
                    img={BBQPizza}
                    />

                    <Item name="BBQ Chickne" 
                    desc="BBQ Chicken with grilled chicken."
                    price={12.50}
                    img={BBQPizza}
                    />

                    <Item name="BBQ Chickne" 
                    desc="BBQ Chicken with grilled chicken."
                    price={12.50}
                    img={BBQPizza}
                    />

                    <Item name="BBQ Chickne" 
                    desc="BBQ Chicken with grilled chicken."
                    price={12.50}
                    img={BBQPizza}
                    />

                    <Item name="BBQ Chickne" 
                    desc="BBQ Chicken with grilled chicken."
                    price={12.50}
                    img={BBQPizza}
                    />

                </div>
            </div>
        </section>
    );
};

export default Menu;