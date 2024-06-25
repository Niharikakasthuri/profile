import React from 'react'
import Nav from './components/Nav'
const Skills = () => {
  return (
    <div className='skills-bg'>
        <Nav/>
      <div className='skills-card'>
        <img className='skills-img' src = 'https://logowik.com/content/uploads/images/492_html5.jpg' alt = "html"/>
        <img className='skills-img' src = 'https://logowik.com/content/uploads/images/123_css3.jpg' alt = "css"/>
        <img className='skills-img' src = 'https://logowik.com/content/uploads/images/mysql.jpg' alt = "sql"/>
        <img className='skills-img' src = 'https://logowik.com/content/uploads/images/javascript.jpg' alt = "javascript"/>
        <img className='skills-img' src = 'https://logowik.com/content/uploads/images/python.jpg' alt = "python"/>
      </div>
      <div className='skills-card-2'>
        <h1 className='skills-card-heading'>Frameworks</h1>
        <div>
          <img className='skills-logo' src = 'https://logowik.com/content/uploads/images/mongodb9740.logowik.com.webp' alt = "mongodb"/>
          <img className='skills-logo' src ='https://logowik.com/content/uploads/images/nodejs.jpg' alt = "nodejs"/>
          <img className='skills-logo' src = 'https://logowik.com/content/uploads/images/react.jpg' alt = "reactjs"/>
        </div>
      </div>
      <div className='skills-card-3'>
        <h1 className='skills-card-heading'>Tools</h1>
        <div>
          <img className='skills-logo' src = 'https://logowik.com/content/uploads/images/github9775.jpg' alt = 'github'/>
          <img className='skills-logo' src = 'https://logowik.com/content/uploads/images/visual-studio-code7642.jpg' alt = 'vscode'/>
          <img className='skills-logo' src = 'https://logowik.com/content/uploads/images/cloudinary6366.logowik.com.webp' alt = 'cloudinary'/>
        </div>
      </div>
    </div>
  )
}

export default Skills
