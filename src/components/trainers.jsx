import React from 'react';

const Trainers = () => {
    return (
        <section id="trainers" className="trainers">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Mentors</h2>
                    <p>Our Trainers</p>
                </div>
                <div className="row" data-aos="zoom-in" data-aos-delay={100}>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="member">
                            <img
                                src="assets/img/trainers/trainer-1.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="member-content">
                                <h4>Mohammad Arifur Rahman</h4>
                                <span>Development Team Lead</span>
                                <p>
                                    I believe that anyone can do programming if they have a mentor, vision, and persistence.
                                </p>
                                <div className="social">
                                    <a href="https://twitter.com/moarifur">
                                        <i className="bi bi-twitter" />
                                    </a>
                                    <a href="https://github.com/moarifur">
                                        <i className="bi bi-github" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/mohammad-arifur-rahman-7280781b9/">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="member">
                            <img
                                src="assets/img/trainers/trainer-2.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="member-content">
                                <h4>Rajib Hossain</h4>
                                <span>Marketing Analyst</span>
                                <p>
                                    Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus.
                                    In architecto rerum rerum temporibus
                                </p>
                                <div className="social">
                                    <a href="">
                                        <i className="bi bi-twitter" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-facebook" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-instagram" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="member">
                            <img
                                src="assets/img/trainers/trainer-3.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="member-content">
                                <h4>Mohammad Parvez</h4>
                                <span>Art Director</span>
                                <p>
                                    Voluptas necessitatibus occaecati quia. Earum totam consequuntur
                                    qui porro et laborum toro des clara
                                </p>
                                <div className="social">
                                    <a href="">
                                        <i className="bi bi-twitter" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-facebook" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-instagram" />
                                    </a>
                                    <a href="">
                                        <i className="bi bi-linkedin" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trainers;