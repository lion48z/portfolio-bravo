//have sections for about me, experience, education, contact me that jump to the section when clicked, have it designed so that 
//more sections can be added in easily if updating information. 
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function Navbar() {
  return (
    <nav className="row">
      <a href="/" className="site-title">Home</a>
      <ul>
        <li>
          <a href="/aboutMe">About Me</a>
        </li>
        <li>
          <a href="/education">Education</a>
        </li>
        <li>
          <a href="/experience">Experience</a>
        </li>
        <li>
          <a href="/contactMe">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;



