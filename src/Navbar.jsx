//have sections for about me, experience, education, contact me that jump to the section when clicked, have it designed so that 
//more sections can be added in easily if updating information. 
import Scroll from 'react-scroll';

const NavLink =Scroll.NavLink

const Navbar = () =>{

}
return (
<div className="row">
    <h4>About Me</h4>
    <h4>Education</h4>
    <h4>Experience</h4>
    <h4>Contact</h4>
</div>
)


export default Navbar;

/*import { useNavigate } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="font-weight-light display-1 text-center" onClick={() => navigate('/')}>
        The X app
      </h1>
    </div>
  );
};*/

{/*<nav>
  <ul>
    <li>
      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Section 1
      </Link>
    </li>
    <li>
      <Link
        activeClass="active"
        to="section2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Section 2
      </Link>
    </li>
    <li>
      <Link
        activeClass="active"
        to="section3"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Section 3
      </Link>
    </li>
  </ul>
</nav>*/}