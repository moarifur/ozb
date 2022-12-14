import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CollapsibleText from "@paprika/collapsible-text";

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
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="card" style={{ width: "95%" }}>
                                <img src="assets/img/courses/wd.jpg" className="card-img-top" alt="..." />
                                {/*<img src="..." className="card-img-top" alt="..." />*/}
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Web Development</h4>
                                        <p className="price">Free</p>
                                    </div>
                                    <h3>
                                        <a href="course-details.html">Web Design for Beginners</a>
                                    </h3>
                                    <CollapsibleText collapsedLength={130}>
                                        <p>
                                            In terms of fundamentals, you’ll learn about color, typography, spacing, sizing, imagery,
                                            and responsive web design. We’ll discuss the theory, best practices, and some tools you
                                            can use to make your job easier.
                                        </p>
                                        <p>
                                            When it comes to common web design patterns, you’ll learn about the elements you can use
                                            to design a web page—things like headers, hero areas, buttons, image galleries, contact
                                            forms, and more.
                                        </p>
                                        <p>
                                            For each of these patterns, we’ll look at the definition and some use cases, and then
                                            we’ll apply that knowledge to a demo project: a three-page portfolio website designed
                                            specifically for this course.
                                        </p>
                                    </CollapsibleText>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img
                                                src="assets/img/trainers/trainer-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span>Md. Arifur Rahman</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-book" />
                                            &nbsp;5 &nbsp;&nbsp;
                                            {/*<i className="bx bx-heart" />*/}
                                            {/*&nbsp;65*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="card" style={{ width: "95%" }}>
                                <img src="assets/img/courses/py.jpg" className="card-img-top" alt="..." />
                                {/*<img src="..." className="card-img-top" alt="..." />*/}
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Python Crash Course</h4>
                                        <p className="price">৳ 2500</p>
                                    </div>
                                    <h3>
                                        <a href="course-details.html">
                                            A Hands-On, Project-Based Introduction to Programming
                                        </a>
                                    </h3>
                                    <CollapsibleText collapsedLength={100}>
                                        <p>
                                            The goal of this course is to bring you up to speed with Python as quickly as
                                            possible so you can build programs that work—games, data visualizations,
                                            and web applications—while developing a foundation in programming that
                                            will serve you well for the rest of your life.
                                        </p>
                                    </CollapsibleText>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img
                                                src="assets/img/trainers/trainer-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span>Md. Arifur Rahman</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-book" />
                                            &nbsp;5 &nbsp;&nbsp;
                                            {/*<i className="bx bx-heart" />*/}
                                            {/*&nbsp;65*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="card" style={{ width: "95%" }}>
                                <img src="assets/img/courses/cp1.jpg" className="card-img-top" alt="..." />
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Programming C</h4>
                                        <p className="price">৳ 2500</p>
                                    </div>
                                    <h3>
                                        <a href="course-details.html">40 Projects In 40 Days</a>
                                    </h3>
                                    <CollapsibleText collapsedLength={130}>
                                        <p>
                                            A challenge based learning module for programming C which brings a whole new level of
                                            experience, makes programmer from very beginner stage.
                                        </p>
                                    </CollapsibleText>

                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img
                                                src="assets/img/trainers/trainer-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span>Md. Arifur Rahman</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-book" />
                                            &nbsp;5 &nbsp;&nbsp;
                                            {/*<i className="bx bx-heart" />*/}
                                            {/*&nbsp;65*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="card" style={{ width: "95%" }}>
                                <img src="assets/img/courses/wp.jpg" className="card-img-top" alt="..." />
                                {/*<img src="..." className="card-img-top" alt="..." />*/}
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Wordpress</h4>
                                        <p className="price">৳ 1000</p>
                                    </div>
                                    <h3>
                                        <a href="course-details.html">Theme Development</a>
                                    </h3>
                                    <CollapsibleText collapsedLength={130}>
                                        <p>
                                            Learn to create a completely responsive website from scratch using WordPress,
                                            HTML, CSS, JavaScpript, and PHP. Also, learn to create a custom WordPress theme.
                                        </p>
                                    </CollapsibleText>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img
                                                src="assets/img/trainers/trainer-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span>Md. Arifur Rahman</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-book" />
                                            &nbsp;5 &nbsp;&nbsp;
                                            {/*<i className="bx bx-heart" />*/}
                                            {/*&nbsp;65*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="card" style={{ width: "95%" }}>
                                <img src="assets/img/courses/ecom.jpg" className="card-img-top" alt="..." />
                                {/*<img src="..." className="card-img-top" alt="..." />*/}
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>React JS In Action</h4>
                                        <p className="price">৳ 5000</p>
                                    </div>
                                    <h3>
                                        <a href="course-details.html">
                                            Ecommerce Development
                                        </a>
                                    </h3>
                                    <CollapsibleText collapsedLength={130}>
                                        <p>
                                            MECOM - A Multipurpose Ecommerce Application, help to
                                            grow your online startup journey. This is an advanced
                                            course; HTML, CSS and JS(ES6) knowledge is mandatory.
                                        </p>
                                    </CollapsibleText>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img
                                                src="assets/img/trainers/trainer-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span>Md. Arifur Rahman</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-book" />
                                            &nbsp;5 &nbsp;&nbsp;
                                            {/*<i className="bx bx-heart" />*/}
                                            {/*&nbsp;65*/}
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
