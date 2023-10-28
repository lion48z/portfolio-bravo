import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './ContactForm';
function ContactMe() {
    
    return (
    <div className="container border"
        style={{
        marginTop:"50px",
        width: '50%',
        backgroundImage:`url('https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?size=626&ext=jpg&ga=GA1.1.1274431862.1697766654&semt=ais')`,
        backgroundPosition: "center",
        color:'teal',
        backgroundSize: "cover",
    }}>
    <h1>Contact Me</h1>
    <ContactForm /> 
    </div>)
}

export default ContactMe;