// import React from "react";

import "../css/navbar.css";
import { NavLink } from "react-router-dom"; // Change import to NavLink
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
                            <NavLink exact to="/" activeClassName="active">Home</NavLink> {/* Use NavLink instead of Link */}
                        </li>

                        <li>
                            <NavLink to="/aboutUs" activeClassName="active">About Us</NavLink> {/* Use NavLink instead of Link */}
                        </li>

                        <li>
                            <NavLink to="/services" activeClassName="active">Services</NavLink> {/* Use NavLink instead of Link */}
                        </li>

                        <li>
                            <NavLink to="/contact" activeClassName="active">Contact</NavLink> {/* Use NavLink instead of Link */}
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
