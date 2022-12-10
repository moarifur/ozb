import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div
                        className="col-lg-6 order-1 order-lg-2"
                        data-aos="fade-left"
                        data-aos-delay={100}
                    >
                        <img src="assets/img/about-us.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <h3>
                            Who We Are
                        </h3>
                        <p className="fst-italic">
                            Our team at Oz Bangla Academia is based on a group of professionals
                            who are constantly working to provide the highest quality of training
                            module to our students. As technology keeps improving exponentially, we
                            believe with each passing day, there is always a better way to
                            cater to our students needs.
                        </p>
                        <p>
                            We're happy to help if our students who need any assistance in the
                            domain of educational solutions — our promise is to work with you
                            to innovate and deliver the highest quality of service!
                        </p>
                        <ul>
                            <li>
                                {/*<i className="bi bi-check-circle" />*/}
                                 Delivering our students with premium grade learning solutions using
                                cutting edge technologies complemented by inspiring and engaging contents.
                            </li>
                            <li>
                                {/*<i className="bi bi-check-circle" />*/}
                                 Becoming a benchmark in the global learning industry in providing high
                                performance premium grade training, courses and workshops to elevate students
                                satisfaction and experience.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default About;