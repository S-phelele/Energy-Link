import React, { useState } from "react";
import './Styles/Header.css';
import { useNavigate } from "react-router-dom";
import logo from '../Images/logo.png';

function Header() {

    const navigate= useNavigate();

    const handleLogin =() => {
        navigate('/login');
    }
    const handleSignUp = () => {
        navigate('/user');
    }
    const handleLogo = () => {
        navigate('/homepage');
    }

    return(
        <div className="header-container">
            <div className="header-logo">
                <img id="logo" src={logo} height={80} onClick={handleLogo}/>
            </div>
                
            <div className="right-section">
            <h3 id="links">About</h3>
            <h3 id="links">Contact</h3>
                <button id="header-btn" onClick={handleLogin}>Log In</button>
                <button id="header-btn" onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
    );
}; export default Header;