import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <nav className='nav-bg'>
        <Link to = '/' className='link'>
        <h1 className='nav-initials'>N<span className = 'nav-span'>K</span></h1>
        </Link>
        <ul>
            <Link to = '/' className="effect">
            <li className='nav-list'>Home</li>
            </Link>
            <Link to = '/about' className='effect'>
            <li className='nav-list'>About</li>
            </Link>
            <Link to = '/projects' className='effect'>
            <li className='nav-list'>Projects</li>
            </Link>
            <Link to = '/skills' className='effect'>
            <li className='nav-list'>Skills</li>
            </Link>
            <Link to = '/resume' className='effect'>
            <li className='nav-list'>Resume</li>
            </Link>
            <Link to = '/contact' className='effect'>
            <li className='nav-list'>Contact</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Nav