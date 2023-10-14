//have sections for about me, experience, education, contact me that jump to the section when clicked, have it designed so that 
//more sections can be added in easily if updating information. 


const Navbar = () =>{
import 'bootstrap/dist/css/bootstrap.min.css';
import  './styles.css';

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
}
export default Navbar;


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

