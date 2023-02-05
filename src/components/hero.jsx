import React from 'react';
import {NavLink} from "react-router-dom";

const Hero = () => {
    return (
        <section
            id="hero"
            className="d-flex justify-content-center align-items-center"
        >
            <div
                className="container position-relative"
                data-aos="zoom-in"
                data-aos-delay={100}
            >
                <h1>
                    {/*It's Never too Late,*/}
                    Develop Your Skill Now,
                    <br />
                    Tech World Needs You.
                </h1>
                <h2>Build Skills &amp; Push Yourself to the Next Level</h2>
                <NavLink to="/job" className="btn-get-started">Guaranteed Employment</NavLink>
            </div>
        </section>
    );
};

export default Hero;