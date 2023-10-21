import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';

const ContactForm= () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_joyi3ga','template_1oaa4ij',e.target,'DR7tNYPj44gvKtW2z')
        .then(function(response){
            console.log('Success!', response.status, response.text);
        }, function(error) {
            console.log('Failed...', error);
        })
        e.target.reset();
    }
    return (
        <form className="row" style={{ margin: " 25px 85px 75px 100px"}}>
        
            <label>Name
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control"></input>
            </label> 
                               
          
            <label>Phone
            <input type="text" name="phone"  value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control"></input>
            </label> 
                 
          
            <label>Email
            <input type="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"></input>
            </label> 
               
   
            <label>Comments
            <textarea name="comment" rows="4" value={comment} onChange={(e) => setComment(e.target.value)} className="form-control"></textarea>
            </label>
                        
            <input 
            type="submit"
            value="Send"
            className="form-control btn btn-primary"/> 

        {submitted && <p>Thank you, your information has been sent!</p>} //
            
    </form>
    );
}
/*will need a name, setName useState for the name
phone, setPhone 
email, setEmail
comment, setComment

return form, input, button (onclick handleSubmit() setSubmit???)
how to get it to send to an email onclick submit button 
when successful says Thank you 
if fails some sort of error message invalid entry

*/
