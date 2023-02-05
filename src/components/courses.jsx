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
        <section id="courses" className="courses">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Programs</h2>
                    <p>Our Courses</p>
                </div>

                <div className="row" data-aos="zoom-in" data-aos-delay={100}>
                    <Slider {...settings}>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="card" style={{ width: "95%" }}>
                                <img src="assets/img/courses/office.jpg" className="card-img-top" alt="..." />
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Office Program</h4>
                                        <p className="price">৳ 999 | ৳ 1999</p>
                                    </div>
                                    <h3>
                                        <a href="#">MS Office Application with Basic Computer Skill</a>
                                    </h3>
                                    <CollapsibleText collapsedLength={130}>
                                        <p>
                                            Basic Microsoft Office skills are being able to create, open, modify, save,
                                            and send documents using Microsoft Word, Excel, and Outlook. These are generally
                                            considered the basics of Microsoft Office.
                                        </p>
                                    </CollapsibleText>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img
                                                src="assets/img/trainers/trainer-3.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span>Md. Parvez</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-book" />
                                            &nbsp;2 &nbsp;&nbsp;
                                            {/*<i className="bx bx-heart" />*/}
                                            {/*&nbsp;65*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="card" style={{ width: "95%" }}>
                                <img src="assets/img/courses/graphics.jpg" className="card-img-top" alt="..." />
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Graphics Design</h4>
                                        <p className="price">৳ 4999 | ৳ 9999</p>
                                    </div>
                                    <h3>
                                        <a href="#">Graphic Design Masterclass with Practical Projects</a>
                                    </h3>
                                    <CollapsibleText collapsedLength={130}>
                                        <p>
                                            This course covers the fundamental principles and techniques of graphic design. It provides
                                            hands-on training and experience working on real-world projects, allowing students to develop
                                            their design skills and portfolio. The course curriculum includes topics such as color theory,
                                            typography, composition, digital illustration, branding, and more.
                                        </p>
                                        <p>
                                            The practical projects give students an opportunity to apply their learning and showcase their
                                            work to potential employers or clients.
                                        </p>
                                    </CollapsibleText>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img
                                                src="assets/img/trainers/trainer-3.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span>Md. Parvez</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-book" />
                                            &nbsp;2 &nbsp;&nbsp;
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
                                        <h4>Ecommerce</h4>
                                        <p className="price">৳ 5000 | ৳ 15000</p>
                                    </div>
                                    <h3>
                                        <a href="#">
                                            Up & Running Ecommerce Project with React & Laravel
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
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="card" style={{ width: "95%" }}>
                                <img src="assets/img/courses/web.jpg" className="card-img-top" alt="..." />
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>Web Bootcamp</h4>
                                        <p className="price">৳ 18000 | ৳ 55000</p>
                                    </div>
                                    <h3>
                                        <a href="#">
                                            The Complete Web Development Bootcamp
                                        </a>
                                    </h3>
                                    <CollapsibleText collapsedLength={130}>
                                        <p>
                                            This comprehensive course covers the fundamentals of web development and its various technologies.
                                            It teaches students how to build and design dynamic, responsive websites from scratch using
                                            HTML, CSS, JavaScript, and various web development frameworks. The course curriculum also includes
                                            topics such as database management, server-side programming, and front-end development frameworks.
                                        </p>
                                        <p>
                                            The goal of the bootcamp is to provide students with a comprehensive understanding of web development
                                            and the skills needed to build and launch their own websites. It is ideal for individuals looking to
                                            start a career in web development or for those who want to build their own websites for personal or
                                            business use.
                                        </p>
                                    </CollapsibleText>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img
                                                src="assets/img/trainers/trainer-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span>Arifur Rahman</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-book" />
                                            &nbsp;3 &nbsp;&nbsp;
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
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>WordPress</h4>
                                        <p className="price">৳ 4999 | ৳ 7999</p>
                                    </div>
                                    <h3>
                                        <a href="#">
                                            WordPress Development: Unlocking Power with Code
                                        </a>
                                    </h3>
                                    <CollapsibleText collapsedLength={130}>
                                        <p>
                                            This course teaches the process of customizing and extending the functionality of WordPress websites using code.
                                            The course focuses on the basics of WordPress development, including HTML, CSS, PHP, and JavaScript, and how these
                                            technologies can be used to create custom plugins, themes, and other add-ons for WordPress sites. It is intended
                                            for those who want to expand their web development skills and build custom WordPress sites or enhance existing ones.
                                            The course is designed to give students a solid understanding of the WordPress platform and the ability to code
                                            custom solutions to meet the needs of their clients or projects.
                                        </p>
                                    </CollapsibleText>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img
                                                src="assets/img/trainers/trainer-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span>Arifur Rahman</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-book" />
                                            &nbsp;3 &nbsp;&nbsp;
                                            {/*<i className="bx bx-heart" />*/}
                                            {/*&nbsp;65*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="card" style={{ width: "95%" }}>
                                <img src="assets/img/courses/smm.jpg" className="card-img-top" alt="..." />
                                {/*<img src="..." className="card-img-top" alt="..." />*/}
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>SMM</h4>
                                        <p className="price">৳ 4999 | ৳ 7999</p>
                                    </div>
                                    <h3>
                                        <a href="course-details.html">
                                            The Ultimate Digital Marketing Mastery
                                        </a>
                                    </h3>
                                    <CollapsibleText collapsedLength={130}>
                                        <p>
                                            Digital Marketing Mastery will give you the skills, strategy, and resources that will allow
                                            you to confidently create marketing that drives results and the ability to grow ANY business.
                                            You'll discover the proven principles that all great marketing campaigns are built on and learn
                                            how to create killer campaigns of your very own. Learn how to tap into a neverending supply of
                                            content ideas and create high converting content that makes sales without sounding "salesy" and
                                            the secret to overcoming objections in advance. Identify and target your perfect market online
                                            and create the most effective social media marketing campaigns using today's most popular platforms.
                                        </p>
                                        <p>
                                            Design and build your own automatic customer-generating marketing funnel and discover the simple
                                            strategy that guarantees profitability right from the very first click. Email marketing is one of
                                            the most effective and profitable tools available to today's modern digital marketer. This will
                                            show you exactly how to make email your email list your most valuable asset. Ever. Data is what
                                            separates the amateurs from the pros. Discover the most important digital marketing metrics to track
                                            and create your very own digital marketing metrics tracking sheet.
                                        </p>
                                        <p>
                                            Above all else, Digital Marketing Mastery will give you the skills, strategy, and resources that
                                            will allow you to confidently create marketing that drives results and the ability to grow ANY business.
                                        </p>
                                    </CollapsibleText>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img
                                                src="assets/img/trainers/trainer-2.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span>Rajib Hossain</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-book" />
                                            &nbsp;2 &nbsp;&nbsp;
                                            {/*<i className="bx bx-heart" />*/}
                                            {/*&nbsp;65*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                            <div className="card" style={{ width: "95%" }}>
                                <img src="assets/img/courses/seo.jpg" className="card-img-top" alt="..." />
                                <div className="course-content">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4>SEO</h4>
                                        <p className="price">৳ 4999 | ৳ 9999</p>
                                    </div>
                                    <h3>
                                        <a href="course-details.html">
                                            A Beginner To Advanced SEO Masterclass 2023
                                        </a>
                                    </h3>
                                    <CollapsibleText collapsedLength={130}>
                                        <p>
                                            This course is designed to help you master the essential disciplines in digital marketing,
                                            including search engine optimization (SEO), social media, pay-per-click (PPC), conversion
                                            optimization, web analytics, content marketing, email and mobile marketing. Digital
                                            marketing is one of the world’s fastest growing disciplines, and this certification will
                                            raise your value in the marketplace and prepare you for a career in digital marketing.

                                        </p>
                                        <p>
                                            Best of all, you’ll be able to apply your training immediately to your own website and
                                            work to rank higher on Google. You’ll understand what it is you need to do to begin
                                            getting traffic from organic search month after month.
                                        </p>
                                    </CollapsibleText>
                                    <div className="trainer d-flex justify-content-between align-items-center">
                                        <div className="trainer-profile d-flex align-items-center">
                                            <img
                                                src="assets/img/trainers/trainer-2.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <span>Rajib Hossain</span>
                                        </div>
                                        <div className="trainer-rank d-flex align-items-center">
                                            <i className="bx bx-book" />
                                            &nbsp;2 &nbsp;&nbsp;
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
