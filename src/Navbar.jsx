//have sections for about me, experience, education, contact me that jump to the section when clicked, have it designed so that 
//more sections can be added in easily if updating information. 


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