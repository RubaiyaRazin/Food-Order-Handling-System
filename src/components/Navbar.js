// // import React from 'react';
// import React, {useState, useEffect} from 'react' 

// export default function Navbar() {
//     const [toggleMenu, setToggleMenu] = useState(false)
//     const [screenWidth, setScreenWidth] = useState(window.innerWidth)


//     const toggleNav = () => {
//       setToggleMenu(!toggleMenu)
//     }

//     useEffect(() => {

//       const changeWidth = () => {
//         setScreenWidth(window.innerWidth);
//       }

//       window.addEventListener('resize', changeWidth)

//       return () => {
//           window.removeEventListener('resize', changeWidth)
//       }

//     }, [])

//     return (
//       <nav>
//         {(toggleMenu || screenWidth > 500) && (
//         <ul className="list">
//         <li className="items">Menu</li>
//         <li className="items">Reservation</li>
//         <li className="items">About</li>
//         <li className="items">Contact</li>
//         <li className="items">Login</li>
//       </ul>
//         )}

//         <button onClick={toggleNav} className="btn"><i class="fas fa-bars"></i></button>
//       </nav>
//     )
//   }



import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

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
                <ul className='list'>
                    <Link to="/">
                        <li className='items'>Home</li>
                    </Link>
                    <Link to="/About">
                        <li className='items'>About</li>
                    </Link>
                    <Link to="/Menu">
                        <li className='items'>Menu</li>
                    </Link>

                    <Link to="/Reservation">
                        <li className='items'>Reservation</li>
                    </Link>
                    <Link to="/Contact">
                        <li className='items'>Contact</li>
                    </Link>
                    <Link to="/Login">
                        <li className='items'>Login</li>
                    </Link>

                    <Link to="/Registration">
                        <li className='items'>Registration</li>
                    </Link>

                </ul>
            )}

            <button onClick={toggleNav} className="btn"><i className="fas fa-bars"></i></button>
        </nav>
    )
}