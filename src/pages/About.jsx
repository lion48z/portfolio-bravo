import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  const [typedText, setTypedText] = useState(''); // Initialize the state for typed text
  const fullText =
    "I'm Cody, a passionate junior web developer eager on contributing to the digital age. Currently, I have 3 years of experience working with a small company, completing front and back-end development. I gained knowledge and experience through the Eagle Corps Full-Stack Bootcamp. Such as learning the ways of: JavaScript, HTML, CSS, React, Python, and C++. My goal is to continue learning and growing as a developer, taking on new challenges, and collaborating with others to create meaningful and impactful web applications.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prevText) => prevText + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval); // Stop the typing effect
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(interval); //clear 
  }, []);

  return (
    <Container>
      <Row>
        <Col className="background" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/abstract-glowing-flame-drops-electric-illumination-generative-ai_188544-8092.jpg?size=626&ext=jpg&ga=GA1.1.1274431862.1697766654&semt=sph')`, backgroundSize: "100%", color: "white", minHeight: "100vh" }}>
          <h1> About </h1>
          <img src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?size=626&ext=jpg&ga=GA1.1.1274431862.1697766654&semt=ais" alt="businessman" align="right" width="400px" height="200px"></img>
          <br></br>
          <h3>{typedText}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

