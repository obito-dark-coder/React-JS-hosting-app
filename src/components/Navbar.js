import React, {useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css';
import logo from '../assets/logo.png'

const Navbar = () => {
const[click, setClick] = useState(false)

const handleClick = () => setClick(!click)

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt='logo' id="nav-bar-logo"/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <a href="/">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/">
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/">
                        FAQ
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/">
                        Contact
                    </a>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}> 
                {click ? (<FaTimes size={30} style={{color:' #fff'}}/>) : (<FaBars size={30} style={{color:' #fff'}} />)} 
            </div>
        </div>
    )
}

export default Navbar