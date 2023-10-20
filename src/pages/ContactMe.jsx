import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactMe() {
    
    return (
    <div className="container border"
        style={{
        marginTop:"50px",
        width: '50%',
        backgroundImage:`url('https://img.freepik.com/free-vector/network-mesh-wire-digital-technology-background_1017-27428.jpg?size=626&ext=jpg&ga=GA1.1.1274431862.1697766654&semt=ais')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
    }}>
    <h1>Contact Me</h1>
    <form className="row" style={{ margin: " 25px 85px 75px 100px"}}>
        
            <label>Name
            <input type="text" name="name" className="form-control"></input>
            </label> 
                               
          
            <label>Phone
            <input type="text" name="phone" className="form-control"></input>
            </label> 
                 
          
            <label>Email
            <input type="email" name="user_email" className="form-control"></input>
            </label> 
               
   
            <label>Comments
            <textarea name="message" rows="4" className="form-control"></textarea>
            </label>
                        
            <input 
            type="submit"
            value="Send"
            className="form-control btn btn-primary"/> 
                       
            
    </form>
    </div>)
}

export default ContactMe;