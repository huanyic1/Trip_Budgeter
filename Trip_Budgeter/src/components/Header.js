import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from './Logo2.png';

const Header = () => {
    return (
        <div className="header">
            <Link to= "/">
             <img src={logo} className="icon"></img>
             </Link>
            <h1 className="logo"> Trip Budgeter</h1>
            <div className="links">
                <Link to="/trip">Take a trip!</Link>
                <Link to="/add">Help us improve!</Link>
            </div>
        </div>
    )
}

export default Header
