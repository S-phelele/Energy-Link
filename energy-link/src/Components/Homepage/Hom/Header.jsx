import React, { useState } from "react";
import './Styles/Header.css';
import { useNavigate } from "react-router-dom";
import logo from '../Images/logo.png';

function Header() {

    const navigate= useNavigate();

    const loginOnClick =() => {
        navigate("/");
    }

    return(
        <div className="header-container">
            <div className="header-logo">
                <img id="logo" src={logo} height={80}/>
            </div>
            <div className="middle-section">
                <h3 id="links">About</h3>
                <h3 id="links">Contact</h3>
                <h3 id="links">Payment</h3>
            </div>
            <div className="right-section">
                <button id="header-btn" onClick={loginOnClick}>Log In</button>
                <button id="header-btn">Sign Up</button>
            </div>
        </div>
    );
}; export default Header;