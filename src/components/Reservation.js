import React from "react";

const Reservation =()=>{
    return(
        <div class="reservation">
<h3>Reservation</h3>
<h1>BOOK YOUR TABLE</h1>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Dolores nemo quis tempora vel sapiente voluptate.</p>
<form class="form-inline" action="/action_page.php">
  <input type="number" placeholder="Total Person"/>
  <input type="time" placeholder="Expected Time"/>
  <input type="date" placeholder="Expected Date"/>
  <button type="submit">CHECK AVAILABILITY</button>
</form>
</div>
    );
};

export default Reservation;