import React from 'react'
import Nav from './components/Nav'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Nav/>
      <div className='home-align'>
      <div>
      <h1 className='home-greeting'>Hello________________________</h1>
      <h1 className='home-greeting typed-out'>I'm Niharika Kasthuri</h1>
      <p className='home-para'>I am a MERN Stack Developer.<br/> I Will Create a Design and Development <br/> that can give value to your product.</p>
      <Link to = 'https://www.linkedin.com/in/niharika-kasthuri-2b6a97284?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXO2EqlIlR7uqvvM41NrH9Q%3D%3D' className='home-link'>
      <FaLinkedin className='home-icons'/>
      </Link>
      <Link to = 'https://github.com/Niharikakasthuri' className='home-link'>
      <FaSquareGithub className='home-icons' />
      </Link>
      </div>
        <img className='home-img' src = "https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-girl-working-with-computer-icons-workplace-professional-manager-vector-png-image_47034622.jpg" alt = 'girl'/>
        </div>
    </div>
  )
}

export default Home
