import React from 'react';

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
                    Start Learning Now,
                    <br />
                    World is Waiting...
                </h1>
                <h2>Build Skills &amp; Push Yourself to the Next Level</h2>
                <a href="courses.html" className="btn-get-started">
                    Get Started
                </a>
            </div>
        </section>
    );
};

export default Hero;