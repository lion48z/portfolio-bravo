import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        border: "solid white 1px" // will remove this once i get scrolling pictures/text in
      }}>
        
      </section>
    </div>
  );
}

export default Home;