import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import {NavLink} from "react-router-dom";
const Header = () => {

    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto">
                    <NavLink to="/">
                        OZ Bangla
                        {/*<img src="assets/img/logo.jpg" width='150' height='150'/>*/}
                    </NavLink>
                </h1>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li>
                            <Link smooth to="#">Home</Link>
                        </li>
                        <li>
                            <Link smooth to="#why-us">Why Us</Link>
                        </li>
                        <li>
                            <Link smooth to="#courses">Courses</Link>
                        </li>
                        <li>
                            <Link smooth to="#trainers">Trainers</Link>
                        </li>
                        <li>
                            <Link smooth to="#about">About Us</Link>
                        </li>
                        <li>
                            <Link smooth to="#footer">Contact</Link>
                        </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" />
                </nav>
                {/*<a href="courses.html" className="get-started-btn">*/}
                {/*    Get Started*/}
                {/*</a>*/}
            </div>
        </header>

    );
};

export default Header;



