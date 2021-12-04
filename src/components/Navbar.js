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
      </ul>
        )}
  
        <button onClick={toggleNav} className="btn"><i class="fas fa-bars"></i></button>
      </nav>
    )
  }

