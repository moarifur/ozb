import React from 'react';

const Header = () => {
    return (
        <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto">
                    <a href="index.html">Oz Bangla</a>
                </h1>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li>
                            <a className="active" href="index.html">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="about.html">About</a>
                        </li>
                        <li>
                            <a href="courses.html">Courses</a>
                        </li>
                        {/*<li>*/}
                        {/*    <a href="trainers.html">Trainers</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a href="events.html">Events</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a href="pricing.html">Pricing</a>*/}
                        {/*</li>*/}
                        <li>
                            <a href="contact.html">Contact</a>
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