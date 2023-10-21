//have sections for about me, experience, education, contact me that jump to the section when clicked, have it designed so that 
//more sections can be added in easily if updating information. 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
  

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">McCoding Dev LLC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
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

function CustomLink({ href, children }) {
  return (
    <Nav.Link href={href} className={window.location.pathname === href ? "active" : ""}>
      {children}
    </Nav.Link>
  );
}

export default Navigation;




