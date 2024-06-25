import React from 'react';
import Home from './Home';
import {Routes,Route} from 'react-router-dom'
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Resume from './Resume';
import Contact from './Contact';
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path = '/' element = {<Home/>}/>        
        <Route exact path = '/about' element = {<About/>}/>
        <Route exact path = '/projects' element = {<Projects/>}/>
        <Route exact path = '/skills' element = {<Skills/>}/>
        <Route exact path = '/resume' element = {<Resume/>}/>
        <Route exact path = '/contact' element = {<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
