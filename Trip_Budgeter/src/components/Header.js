import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1 className="logo"> Trip Budgeter</h1>
            <div className="links">
                <Link to="/trip">Take a trip!</Link>
                <Link to="/add">Help us improve!</Link>
            </div>
        </div>
    )
}

export default Header
