import React from 'react';
import Nav from './components/Nav';
const Resume = () => {
  return (
    <div>
        <Nav/>
        <div className='resume-align'> 
          <a href='niharika manyam.docx' target='_blank'><img className='resume-img' src = 'https://logowik.com/content/uploads/images/microsoft-word-new.jpg' alt = 'msword'/></a>
          <a href = 'niharika manyam.pdf' target='_blank'><img className='resume-img' src = 'https://logowik.com/content/uploads/images/adobe-pdf3324.jpg' alt = 'pdf'/></a>
          </div> 
    </div>
  );
}

export default Resume;
