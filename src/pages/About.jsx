import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function About()  {
    return (
        <>
         <div className="background" 
            style={{ backgroundImage: `url('https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150063081.jpg?size=626&ext=jpg&ga=GA1.1.1274431862.1697766654&semt=sph')`,
            backgroundSize: "100%",
            color:"white",
            minHeight: "100vh",
   

     }}>
        <h1> About </h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchYwXOq7D9cfT1OBYAeceshV-HRM0UO9wRL0upcFa3A&s" alt="businessman"align="right" width="400px" height="200px"></img>
        <br></br>
        <h3>I'm Cody, a passionate junior web developer eager on contributing to the digital age. 
            Currently, I have 3 years experience working with a small company completing front and back end developing. 
            I gained knowledge and experience through the Eagle Corps Full-Stack Bootcamp.
            Such as learning the ways of: JavaScript, HTML, CSS, React, Python, and C++
            My goal is to continue learning and growing as a developer, taking on new challenges, and collaborating 
            with others to create meaningful and impactful web applications.</h3>
     </div>
   
        </>
    )
}

export default About;