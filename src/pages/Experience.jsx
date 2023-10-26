import React from 'react';
import ProjectCard from './ProjectCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

function Experience() {
    const projects = [
        {
            title:"Nature Page",
            description: "Design & Development",
            imgUrl: "https://img.freepik.com/free-vector/business-landing-page-template-with-photo_52683-19466.jpg?w=740&t=st=1698165752~exp=1698166352~hmac=9a116b8d0b53f9ce82c000c2c0fb39ef5bdc9dead0e85ced1dfe0bb488ab4e70"
    
        },
        {
            title: "Business Page",
            description: "Design & Development",
            imgUrl: "https://img.freepik.com/free-vector/landing-page-business-with-photo_23-2148237399.jpg?size=626&ext=jpg&ga=GA1.1.1274431862.1697766654&semt=ais"
        },
        {
            title: "Travel",
            descripton: "Design & Development",
            imgUrl: "https://img.freepik.com/free-vector/template-explore-world-landing-page_23-2148300727.jpg?size=626&ext=jpg&ga=GA1.1.1274431862.1697766654&semt=ais"
        
        }
    ]
    return (
        <section className="project" id="project"
        style={{
            backgroundImage: `url("https://img.freepik.com/free-vector/vibrant-halftone-black-background-vector_53876-67522.jpg?size=626&ext=jpg&ga=GA1.1.1274431862.1697766654&semt=sph")`,
            backgroundSize: "100%",
            color:"white",
            minHeight: "100vh",
        }}
        >
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p></p>
                    </Col>
                </Row>
                <Row>
                <Carousel>
                        {projects.map((project, index) => (
                            <Carousel.Item key={index}>
                                <ProjectCard {...project} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Row>
            </Container>
           
        </section>
        
        )
}

export default Experience;