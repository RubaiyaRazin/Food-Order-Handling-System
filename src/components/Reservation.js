import React from "react";

const Reservation =()=>{
    return(
        <div class="reservation">
<h2>Reservation</h2>
<h3>BOOK YOUR TABLE</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Dolores nemo quis tempora vel sapiente voluptate.</p>
<form class="form-inline" action="/action_page.php">
  <input type="number" placeholder="Total Person"/>
  <input type="time" placeholder="Expected Time"/>
  <input type="date" placeholder="Expected Date"/>
  <button type="submit">CHEACK AVAILABILITY</button>
</form>
</div>
    );
};

export default Reservation;