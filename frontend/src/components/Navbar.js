// import React from "react";

import "../css/navbar.css";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Navbar = () => {
    return (
        <header>
            <div className="navigation">
                <div className="logo_container">
                    <img src={Logo} alt="logo" />
                    <h1>ByteFriend</h1>
                </div>

                <div className="nav_list">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/aboutUs">About Us</Link>
                        </li>

                        <li>
                            <Link to="/services">Services</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
