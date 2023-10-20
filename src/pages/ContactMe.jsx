import React from 'react';

function ContactMe() {
    
    return (
    <>
    <h1>Contact Me</h1>
    <form>
        <div className="row">
            <div className="column"> 
            <label>Name
            <input></input>
            </label> 
           
            
            </div>
      
    
            <div className="column">
            <label>Phone
            <input></input>
            </label> 
        
            </div>

            <div className="column">
            <label>Email
            <input></input>
            </label> 
   
            </div>
    
            <div className="column">
            <label>Comments
            <textarea></textarea>
            </label> 
            </div>
        </div>
    <button className="submit">submit</button>
        
    </form>
    </>)
}

export default ContactMe;