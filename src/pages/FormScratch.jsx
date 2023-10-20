import { useState } from 'react';

const ContactForm= () => {
    const [submitted, setSubmitted] =useState(false);
    const handleSubmit = (e) => e.preventDefault();
}
/*will need a name, setName useState for the name
phone, setPhone 
email, setEmail
comment, setComment

return form, input, button (onclick handleSubmit() setSubmit???)
how to get it to send to an email onclick submit button 
when successful says Thank you 
if fails some sort of error message invalid entry
