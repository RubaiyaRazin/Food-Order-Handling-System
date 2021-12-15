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
                <h2 style={{color:"rgba(37, 37, 37, 0.7)", fontSize:"40px" , textAlign: "center"}}>Food Menu</h2>
                <h3 style={{color:"#252525", textAlign: "center"}}>Super delectious food. Tasty & delecious food made with fresh ingrediants. Food is an important part of your health! Have a look into our food menu & chose your desired food inteligently.</h3>
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