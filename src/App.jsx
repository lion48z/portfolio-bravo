import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import React from 'react';
import Navbar from './Navbar';
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import ContactMe from "./pages/ContactMe";
import NotFoundComponent from "./pages/NotFoundComponent";
import Home from "./pages/Home";

function App() {
  let Component;

  switch (window.location.pathname) {
    case "/":
      Component = Home; // Assuming you want the About component for the "/" path
      break;
    case "/aboutMe":
      Component = About;
      break;
    case "/contactMe":
      Component = ContactMe;
      break;
    case "/education":
      Component = Education;
      break;
    case "/experience":
      Component = Experience;
      break;
    default:
      Component = NotFoundComponent;
  }

  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}

export default App;