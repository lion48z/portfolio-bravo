import React from 'react';
import { useState }from 'react;'
function ContactMe() {
    const ContactForm= () => {
        const [submitted, setSubmitted] =useState(false);
        const handleSubmit = (e) => e.preventDefault();
    }
    return (
    <>
    <h1>Contact Me</h1>
    <form>
        <div className="row">
            <div className="column"> 
            <h5>Name</h5> 
            <input></input>
            
            </div>
      
    
            <div className="column">
            <h5>Phone</h5> 
            <input></input>
        
            </div>

            <div className="column">
            <h5>Email</h5> 
            <input></input>
   
            </div>
    
            <div className="column">
            <h5>Comments</h5> 
            <input></input>
            </div>
        </div>
    <button className="submit">submit</button>
        
    </form>
    </>)
}

export default ContactMe;