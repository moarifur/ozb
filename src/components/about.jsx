import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>About Us</h2>
                    {/*<p>Who We Are</p>*/}
                </div>
                <div className="row">
                    <div
                        className="col-lg-6 order-1 order-lg-2"
                        data-aos="fade-left"
                        data-aos-delay={100}
                    >
                        <img src="assets/img/about-us.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <p className="fst-italic">
                            Welcome to Oz Bangla! We are a team of passionate e-learning experts
                            dedicated to providing a comprehensive and effective learning
                            experience to individuals and organizations. Our mission is to make
                            education accessible to everyone, regardless of location or background,
                            and to help our users achieve their full potential.
                        </p>
                        <p className="fst-italic">
                            Our LMS is designed to meet the diverse needs of learners and trainers,
                            offering a wide range of features and tools to support online learning,
                            assessment, and collaboration. Our platform is easy to use, flexible,
                            and scalable, allowing for customized learning journeys tailored to
                            each individual user.
                        </p>
                        <p className="fst-italic">
                            We believe that technology has the power to transform education and we are
                            committed to delivering innovative and effective solutions to support the
                            ongoing learning and development of our users. Thank you for choosing our
                            LMS and we look forward to supporting you on your learning journey.
                        </p>
                        {/*<ul>*/}
                        {/*    <li>*/}
                        {/*        /!*<i className="bi bi-check-circle" />*!/*/}
                        {/*         Delivering our students with premium grade learning solutions using*/}
                        {/*        cutting edge technologies complemented by inspiring and engaging contents.*/}
                        {/*    </li>*/}
                        {/*    <li>*/}
                        {/*        /!*<i className="bi bi-check-circle" />*!/*/}
                        {/*         Becoming a benchmark in the global learning industry in providing high*/}
                        {/*        performance premium grade training, courses and workshops to elevate students*/}
                        {/*        satisfaction and experience.*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default About;