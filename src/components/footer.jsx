import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3 className="footer-col1">OZ BANGLA</h3>
                            <p><i className="fas fa-home mr-3 footer-col1-row2"></i> 25/2 Green Road, Dhaka</p>
                            <p><i className="fas fa-envelope mr-3 footer-col1-row2"></i> info@ozbangla.com</p>
                            <p><i className="fas fa-phone mr-3 footer-col1-row2"></i> + 880 15 7574 6004</p>
                        </div>
                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" /> <a href="#">About us</a>
                                </li>
                                {/*<li>*/}
                                {/*    <i className="bx bx-chevron-right" /> <a href="#">Services</a>*/}
                                {/*</li>*/}
                                <li>
                                    <i className="bx bx-chevron-right" />{" "}
                                    <a href="#">Terms of service</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />{" "}
                                    <a href="#">Privacy policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <a href="#">Web Design</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />{" "}
                                    <a href="#">Web Development</a>
                                </li>
                                {/*<li>*/}
                                {/*    <i className="bx bx-chevron-right" />{" "}*/}
                                {/*    <a href="#">Product Management</a>*/}
                                {/*</li>*/}
                                <li>
                                    <i className="bx bx-chevron-right" />
                                    <a href="#">Digital Marketing</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />{" "}
                                    <a href="#">Graphic Design</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Join Our Newsletter</h4>
                            <p>
                                We will never share your data. Trusted by SMBs and Fortune 500s across the globe.
                            </p>
                            <form action="" method="post">
                                <input type="email" name="email" />
                                <input type="submit" defaultValue="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-md-flex py-4">
                <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                        © Copyright{" "}
                        <strong>
                            <span>OZ BANGLA LTD</span>
                        </strong>
                        . All Rights Reserved
                    </div>
                    <div className="credits">
                        {/* All the links in the footer should remain intact. */}
                        {/* You can delete the links only if you purchased the pro version. */}
                        {/* Licensing information: https://bootstrapmade.com/license/ */}
                        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/ */}
                        Developed by <a href="https://bootstrapmade.com/">Mohammad Arifur Rahman</a>
                    </div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    {/*<a href="#" className="twitter">*/}
                    {/*    <i className="bx bxl-twitter" />*/}
                    {/*</a>*/}
                    <a href="https://www.facebook.com/ozbanglaa" className="facebook">
                        <i className="bx bxl-facebook" />
                    </a>
                    <a href="https://www.instagram.com/ozbanglaa/" className="instagram">
                        <i className="bx bxl-instagram" />
                    </a>
                    {/*<a href="#" className="google-plus">*/}
                    {/*    <i className="bx bxl-skype" />*/}
                    {/*</a>*/}
                    <a href="https://www.linkedin.com/company/oz-bangla/" className="linkedin">
                        <i className="bx bxl-linkedin" />
                    </a>
                </div>
            </div>
        </footer>

    );
};

export default Footer;