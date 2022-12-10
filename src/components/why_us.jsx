import React from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less";
import CollapsibleText from "@paprika/collapsible-text";


const WhyUs = () => {
    return (
        <section id="why-us" className="why-us">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h3>Why Choose Us?</h3>
                            <img src="assets/img/whyUs.png" className="img-fluid" alt="" />
                            <div className="text-center">
                                <a href="about.html" className="more-btn">
                                    Learn More <i className="bx bx-chevron-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-8 d-flex align-items-stretch"
                        data-aos="zoom-in"
                        data-aos-delay={100}
                    >
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <i className="bx bx-receipt" />
                                        <h4>Hands on Training</h4>
                                        <CollapsibleText collapsedLength={120}>
                                            <p>
                                                <p>
                                                    All the courses are designed to follow challenged based strategy. Every level depends
                                                    on the previous level completion like a game.
                                                </p>
                                            </p>
                                        </CollapsibleText>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <i className="bx bx-cube-alt" />
                                        <h4>Develop Your Career Plan</h4>
                                        <CollapsibleText collapsedLength={120}>
                                            <p>
                                                <p>
                                                    Are you interested in a career as a software engineer but are not sure how to
                                                    start preparing for it? We have you covered!
                                                </p>
                                                <p>
                                                    Web developers have two main career paths to choose from, depending on work style
                                                    and level of experience. You might opt for a stable, salaried position, or enjoy
                                                    more autonomy as an independent contractor.
                                                </p>
                                            </p>
                                        </CollapsibleText>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <i className="bx bx-images" />
                                        <h4>Understand The Job Market</h4>
                                        <CollapsibleText collapsedLength={120}>
                                            <p>
                                                <p>
                                                    On average, the U.S. expects about 13,400 openings for Web Developers, and
                                                    others pursuing a related career in digital design professionals are projected
                                                    each year, on average, over the decade.
                                                </p>
                                                <p>
                                                    The job outlook for Web Developers as very positive because Web Developers
                                                    are in high demand across a variety of industries.
                                                    The U.S. Bureau of Labor Statistics expects employment of Web Developers
                                                    to grow 8% by 2029, much faster than the average for job roles.
                                                </p>
                                            </p>
                                        </CollapsibleText>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End .content*/}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default WhyUs;