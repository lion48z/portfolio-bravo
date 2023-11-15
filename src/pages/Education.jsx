import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Education() {
  const cardStyle = {
    marginTop: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Set the background color with opacity
  };

  const paragraphStyle = {
    fontWeight: 'bold', // Make the text bold
    fontSize: '16px', // Set the font size
  };
  const rickRollLink = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

  return (
    <Container fluid>
      <div
        className="background"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150063081.jpg?size=626&ext=jpg&ga=GA1.1.1274431862.1697766654&semt=sph')",
          backgroundSize: '100%',
          color: 'white',
          minHeight: '100vh',
        }}
      >
        <h1>Education</h1>
        <Row>
          <Col>
            <Card className="banner" style={cardStyle}>
              <Card.Body>
                <h2>Bachelors of Business Administration</h2>
                <h3>Weber State University</h3>
                <p style={paragraphStyle}>
                  Course work in Accounting, Management, Finance, Human Resources.
                </p>
                <img
                  src="https://www.weber.edu/wsuimages/academics/images/colleges.jpg"
                  alt="Colleges"
                  align="right"
                  width="500"
                  height="250"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="banner" style={cardStyle}>
              <Card.Body>
                <h2>Eagle Corps Full Stack Boot Camp 2023</h2>
                <p style={paragraphStyle}>
                  "The first coding program designed by veterans so veterans can successfully transition into a civilian career. Together, we lead the way." Gained knowledge from the Boot camp utilizing and running software such as: JavaScript, HTML, CSS, and React to create meaningful projects.
                  {' '}<a href={rickRollLink} target="_blank" rel="noopener noreferrer">Learn more</a>
                </p>
                <img
                  src="https://lh3.googleusercontent.com/ANBcbCyPfRh1hJ7fe8RoYDs1gfyuLWBJZ1uc_3CN-0eKx8VLKftlRDa-gQRTReFba63ZfFFS19OvvrfOH1gnEi8ukgwxjvgkjLdn=s0"
                  alt="none"
                  align="left"
                  width="500"
                  height="200"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Education;

