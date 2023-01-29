import React from 'react';
import Header from "../components/header";
import WhyUs from "../components/why_us";
import Footer from "../components/footer";

const About = () => {
    return (
        <>
            <Header />
            <main id="main">
                <WhyUs />
            </main>
            <Footer />
        </>
    );
};

export default About;