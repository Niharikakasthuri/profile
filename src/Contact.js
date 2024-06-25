import React from 'react';
import Nav from './components/Nav';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";


const Contact = () => {
  return (
    <div>
        <Nav/>
      <div className='contact-align'>
         <img className='contact-img' src = 'https://img.freepik.com/premium-vector/young-girl-with-modern-smartphone-online-communication-social-networks-vector-illustration_638425-405.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708214400&semt=ais' alt ='girl'/>
         <div className='contact-item-align'>
        <div> 
            <FaPhoneAlt className='contact-icon'/>
            <h1 className='contact-item'>9133974232</h1>  
          </div> 
          <div>
             <MdEmail className='contact-icon'/>
             <h1 className='contact-item'>kasthuriniharika32@gmail.com</h1>
          </div>
          <div>
              <AiOutlineLinkedin className='contact-icon'/>
              <h1 className='contact-item'>linkedin.com/in/niharika-kasthuri-2b6a97284</h1>
          </div>
        </div>
       </div> 
       </div>
  );
}

export default Contact;
