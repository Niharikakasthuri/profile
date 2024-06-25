import React from 'react';
import Nav from './components/Nav';
const About = () => {
  return (
    <div>
        <Nav/>
        <div className='about-align'>
      <div>
      <p className='about-para'> 
        &emsp;&emsp;My name is Niharika Kasthuri. I am from Kakinada, Andra Pradesh.<br/> I have completed BSC
        in Computer Science from Mohan Degree College, Kakinada in 2022. I am currently pursuing MBA in HR & Marketing.
        </p>
        <p className='about-para'>
          &emsp;&emsp;After graduation I took a year to prepare for competitive exams. However after 
        seeing the opportunities in the IT filed, I decided to shift my career. I began 
        exploring courses where I could learn the necessary skills.
        </p>
        <p className='about-para'>&emsp;&emsp;I came across a program at Nxtwave and joined. Where I have been learning the <br/> necessary 
        technologies continuously and upskilling myself to succeed in this field.
        </p>
        <p className='about-para'>&emsp;&emsp;I have learnt HTML, CSS, JavaScript, NodeJs, ReactJs, MongoDB. I've developed <br/> a Todo list using 
        ReactJs and also developed some other projects. I'm eager to build a strong career in the IT industry and continue to learn and grow.    
       </p>
      </div>
        <img className='about-image' src = "https://media.istockphoto.com/id/1267110920/vector/modern-young-dark-skin-businesswoman-is-waving-hand.jpg?s=612x612&w=0&k=20&c=zPmL47vpX-UOi0lmVyg4-TFMzEGOQPguHevB9LyUdL0=" alt = 'girl'/>
        </div>
    </div>
  );
}

export default About;
