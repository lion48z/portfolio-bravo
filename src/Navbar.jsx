//have sections for about me, experience, education, contact me that jump to the section when clicked, have it designed so that 
//more sections can be added in easily if updating information. 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
//Nav component 
function Navigation() {
  //render Navbar with react-bootstrap library

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">North Mountain Dev LLC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/*Navbar toggle responsive to use of small screens*/}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <CustomLink href="/aboutMe">About Me</CustomLink>
            <CustomLink href="/education">Education</CustomLink>
            <CustomLink href="/experience">Experience</CustomLink>
            <CustomLink href="/contactMe">Contact Me</CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
//custom link component to use for rendering custom links 
//determines whether it is the active window or not 

function CustomLink({ href, children }) {
  return (
    <Nav.Link href={href} className={window.location.pathname === href ? "active" : ""}>
      {children}
    </Nav.Link>
  );
}

export default Navigation;




