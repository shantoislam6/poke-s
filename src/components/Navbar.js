import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";


 class NavBar extends Component {
    render() {
        return (
           
            <nav className="nav-wrapper purple darken-4">
                <div className="container">
                <Link className="brand-logo" to="/" >Poke's </Link>
                    <ul className="right">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/posts">Posts</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <style>
                            {`
                                nav ul li a.active{
                                    background-color: rgba(0,0,0,0.1);
                                }
                            `}
                        </style>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default NavBar;