import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
}

const Courses = () => {
    return (
        <section id="popular-courses" className="courses">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Courses</h2>
                    <p>Crash Course Program</p>
                </div>

                <div className="row" data-aos="zoom-in" data-aos-delay={100}>
                    <Slider {...settings}>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="card" style={{ width: "95%" }}>
                                <img src="assets/img/courses/cp.jpg" className="card-img-top" alt="..." />
                                {/*<img src="..." className="card-img-top" alt="..." />*/}
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Web Development</h4>
                                        <p className="price">$169</p>
                                    </div>
                                    <h3>
                                        <a href="course-details.html">Website Design</a>
                                    </h3>
                                    <p>
                                        Et architecto provident deleniti facere repellat nobis iste. Id
                                        facere quia quae dolores dolorem tempore.
                                    </p>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img
                                                src="assets/img/trainers/trainer-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span>Antonio</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-user" />
                                            &nbsp;50 &nbsp;&nbsp;
                                            <i className="bx bx-heart" />
                                            &nbsp;65
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="card" style={{ width: "95%" }}>
                                <img src="assets/img/course-1.jpg" className="card-img-top" alt="..." />
                                {/*<img src="..." className="card-img-top" alt="..." />*/}
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Web Development</h4>
                                        <p className="price">$169</p>
                                    </div>
                                    <h3>
                                        <a href="course-details.html">Website Design</a>
                                    </h3>
                                    <p>
                                        Et architecto provident deleniti facere repellat nobis iste. Id
                                        facere quia quae dolores dolorem tempore.
                                    </p>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img
                                                src="assets/img/trainers/trainer-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span>Antonio</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-user" />
                                            &nbsp;50 &nbsp;&nbsp;
                                            <i className="bx bx-heart" />
                                            &nbsp;65
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="card" style={{ width: "95%" }}>
                                <img src="assets/img/course-1.jpg" className="card-img-top" alt="..." />
                                {/*<img src="..." className="card-img-top" alt="..." />*/}
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Web Development</h4>
                                        <p className="price">$169</p>
                                    </div>
                                    <h3>
                                        <a href="course-details.html">Website Design</a>
                                    </h3>
                                    <p>
                                        Et architecto provident deleniti facere repellat nobis iste. Id
                                        facere quia quae dolores dolorem tempore.
                                    </p>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img
                                                src="assets/img/trainers/trainer-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span>Antonio</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-user" />
                                            &nbsp;50 &nbsp;&nbsp;
                                            <i className="bx bx-heart" />
                                            &nbsp;65
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="card" style={{ width: "95%" }}>
                                <img src="assets/img/course-1.jpg" className="card-img-top" alt="..." />
                                {/*<img src="..." className="card-img-top" alt="..." />*/}
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Web Development</h4>
                                        <p className="price">$169</p>
                                    </div>
                                    <h3>
                                        <a href="course-details.html">Website Design</a>
                                    </h3>
                                    <p>
                                        Et architecto provident deleniti facere repellat nobis iste. Id
                                        facere quia quae dolores dolorem tempore.
                                    </p>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img
                                                src="assets/img/trainers/trainer-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span>Antonio</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-user" />
                                            &nbsp;50 &nbsp;&nbsp;
                                            <i className="bx bx-heart" />
                                            &nbsp;65
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="card" style={{ width: "95%" }}>
                                <img src="assets/img/course-1.jpg" className="card-img-top" alt="..." />
                                {/*<img src="..." className="card-img-top" alt="..." />*/}
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Web Development</h4>
                                        <p className="price">$169</p>
                                    </div>
                                    <h3>
                                        <a href="course-details.html">Website Design</a>
                                    </h3>
                                    <p>
                                        Et architecto provident deleniti facere repellat nobis iste. Id
                                        facere quia quae dolores dolorem tempore.
                                    </p>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img
                                                src="assets/img/trainers/trainer-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span>Antonio</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-user" />
                                            &nbsp;50 &nbsp;&nbsp;
                                            <i className="bx bx-heart" />
                                            &nbsp;65
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="card" style={{ width: "95%" }}>
                                <img src="assets/img/course-1.jpg" className="card-img-top" alt="..." />
                                {/*<img src="..." className="card-img-top" alt="..." />*/}
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Web Development</h4>
                                        <p className="price">$169</p>
                                    </div>
                                    <h3>
                                        <a href="course-details.html">Website Design</a>
                                    </h3>
                                    <p>
                                        Et architecto provident deleniti facere repellat nobis iste. Id
                                        facere quia quae dolores dolorem tempore.
                                    </p>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img
                                                src="assets/img/trainers/trainer-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span>Antonio</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-user" />
                                            &nbsp;50 &nbsp;&nbsp;
                                            <i className="bx bx-heart" />
                                            &nbsp;65
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};
export default Courses;
