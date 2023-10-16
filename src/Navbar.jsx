//have sections for about me, experience, education, contact me that jump to the section when clicked, have it designed so that 
//more sections can be added in easily if updating information. 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const path = window.location.pathname
function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">McCoding Dev LLC</a>
      <ul>
        <CustomLink href="/aboutMe">About Me</CustomLink>
        <CustomLink href="/education">Education</CustomLink>
        <CustomLink href="/experience">Experience</CustomLink>
        <CustomLink href="/contactMe">Contact Me</CustomLink>
        
      </ul>
    </nav>
  )
}
function CustomLink({ href, children, ...props }) {
  return (
  <li className={path === href ? "active" : ""}>
  <a href={href} {...props} >{children}</a>
  </li>
  )
}


export default Navbar;



