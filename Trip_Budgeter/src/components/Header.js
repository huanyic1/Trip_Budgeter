import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from './Logo5.png';


const Header = () => {
    return (
        <div className="header">
            <Link to= "/">
             <img src={logo} className="icon"></img>
             {/* <h1 className="logo"> Capital </h1>
             <h1 className="logo2">Voyagers</h1> */}
             </Link>
             {/* <h1 className="logo"> Capital Voyagers</h1> */}
            <div className="links">
                <Link to="/trip">Take a trip!</Link>
                <Link to="/add">Help us improve!</Link>
            </div>
        </div>
    )
}

export default Header
