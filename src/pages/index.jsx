import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import About from "../components/about";
import Count from "../components/count";
import WhyUs from "../components/why_us";
import Courses from "../components/courses";
import Trainers from "../components/trainers";

const Index = () => {
    return (
        <>
            <Header />
            <Hero />
            <main id="main">
                <WhyUs />
                {/*<Count />*/}
                <Courses />
                <Trainers />
                <About />
            </main>
            <Footer />
        </>
    );
};

export default Index;