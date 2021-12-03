import React from 'react'       //rafce is a Shortcut to write react code

const Menu = ({name, desc, menu, addItem}) => {
    return (
        <section className="features-boxed">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center">{name}</h2>
                    <p className="text-center">{desc}</p>
                </div>
                <div className="row justify-content-center features">
                    {menu.map((pizza) => (
                        <Item key={pizza.id} item={pizza} addItem={addItem}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;