//have sections for about me, experience, education, contact me that jump to the section when clicked, have it designed so that 
//more sections can be added in easily if updating information. 

import 'bootstrap/dist/css/bootstrap.min.css';
import  './styles.css';

function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">McCoding Dev LLC</a>
      <ul>
        <li className="active">
          <a href="/aboutMe">About Me</a>
        </li>
        <li className="active">
          <a href="/education">Education</a>
        </li>
        <li className="active">
          <a href="/experience">Experience</a>
        </li>
        <li className="active">
          <a href="/contactMe">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;



