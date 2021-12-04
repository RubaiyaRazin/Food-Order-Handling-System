// import React from 'react';
import React, {useState, useEffect} from 'react' 

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  
    const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
  
    useEffect(() => {
  
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', changeWidth)
  
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, [])
  
    return (
      <nav>
        {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
        <li className="items">Menu</li>
        <li className="items">Reservation</li>
        <li className="items">About</li>
        <li className="items">Contact</li>
        <li className="items">Login</li>
        <li className="items">About</li>
      </ul>
        )}
  
        <button onClick={toggleNav} className="btn"><i class="fas fa-bars"></i></button>
      </nav>
    )
  }


// const Navbar = () => {
//     return (
//         <div className="navbar">
//             <div className="navbar__text">
                
//                 <ul className="navbar__ul">
//                     <li>
//                         <a href="">Menu</a>
//                     </li>
                    
//                     <li>
//                         <a href="">Reservation</a>
//                     </li>
//                     <li>
//                         <a href="">About</a>
//                     </li>
//                     <li>
//                         <a href="">Contact</a>
//                     </li>
//                     <li>
//                         <a href="">Login</a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Navbar;
