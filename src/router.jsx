import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home.jsx"
import About from "./pages/about.jsx"
import Contact from "./pages/contact.jsx"
import Service from "./pages/service.jsx"

import Navigator from "./components/navigator.jsx";

function ProjectRoute(){
return(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      {/* <Route path="/navigator" element={<Navigator/>}/> */}
    </Routes>
  </Router>
);
}

export default ProjectRoute