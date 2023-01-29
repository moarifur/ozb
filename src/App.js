import './App.css';
import React from "react";
import Index from "./pages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/about";

function App() {
  return (
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="about" element={<About />} />
                {/*<Route path='movies/:id' element={<EditMovie />} />*/}
                {/*<Route path="not-found" element={<NotFound />} />*/}
                {/*<Route path="/" element={<Navigate replace to="movies" />} />*/}
                {/*<Route path="*" element={<Navigate replace to="not-found" />} />*/}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
