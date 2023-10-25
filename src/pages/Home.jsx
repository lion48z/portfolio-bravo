import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import jsicon from '../images/jsicon.jpg';
import html from '../images/html.jpg';
import react from '../images/react.jpg';
import python from '../images/python.jpg';


function Home() {
  return (
    <div className="background" 
    style={{ backgroundImage: `url('https://img.freepik.com/free-vector/circuits-blue-red-gradient-digital-background_23-2148821701.jpg?size=626&ext=jpg&ga=GA1.1.1274431862.1697766654&semt=ais')`,
    backgroundSize: "100%",
    color:"white",
    minHeight: "100vh",
   

     }}>
      <h1>Home</h1>
      <section className="banner" style={{
       marginTop: "10px",
        minHeight: "50vh",
        backgroundColor: "rgba(0, 0, 0, 0)",
        
      }}>
        <Carousel interval={2000} prevIcon={<span>&lsaquo;</span>} nextIcon={<span>&rsaquo;</span>}>
          <Carousel.Item>
            <img
              className="d-block w-25"
              src={jsicon}
              alt="JavaScript"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-25"
              src={html}
              alt="html"
              />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-25"
              src={python}
              alt="Python 3"/>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-25"
              src={react}
              alt="React"/>
          </Carousel.Item>
        </Carousel>
        
      </section>
    </div>
  );
}

export default Home;