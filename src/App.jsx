import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles.css';
import React from 'react';
import Navbar from './Navbar';
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import ContactMe from "./pages/ContactMe";
import NotFoundComponent from "./pages/NotFoundComponent";
import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom';

function App() {
 
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<About/>} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contactMe" element={<ContactMe />} />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </div>
    </>
  );
}

export default App;