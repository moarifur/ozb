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
                    Develop Your Skill Now,
                    <br />
                    Tech World Needs You.
                </h1>
                <h2>Build Skills &amp; Push Yourself to the Next Level</h2>
                <a href="courses.html" className="btn-get-started">
                    Guaranteed Employment
                    {/*নিশ্চিত এমপ্লয়মেন্ট*/}
                    {/*Sure Job*/}
                </a>
            </div>
        </section>
    );
};

export default Hero;