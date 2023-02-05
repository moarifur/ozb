import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';
import Index from "./pages";
import WhyUs from "./components/why_us";
import Courses from "./components/courses";
import Trainers from "./components/trainers";
import About from "./components/about";
import Footer from "./components/footer";
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Job_grnty from "./pages/job_grnty";

function App() {
  return (
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/why-us" element={<WhyUs />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/trainers" element={<Trainers />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Footer />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/job" element={<Job_grnty />} />
            </Routes>

            {/*<Routes>*/}
            {/*    <Route path="/" element={<Index />} />*/}
            {/*    <Route path="about" element={<About />} />*/}
            {/*    /!*<Route path='movies/:id' element={<EditMovie />} />*!/*/}
            {/*    /!*<Route path="not-found" element={<NotFound />} />*!/*/}
            {/*    /!*<Route path="/" element={<Navigate replace to="movies" />} />*!/*/}
            {/*    /!*<Route path="*" element={<Navigate replace to="not-found" />} />*!/*/}
            {/*</Routes>*/}

        </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
