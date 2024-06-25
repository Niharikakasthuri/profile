import React from 'react'
import Nav from './components/Nav'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { IoCloseCircle } from "react-icons/io5";

const Projects = () => {
  return (
    <div>
        <Nav/>
      <div>
        <h1 className='project-heading'>HTML & CSS</h1>
        <div className='project-align'>
          <div>
          <Popup
          modal
          trigger = {
          <img className='project-image' src = 'https://img.freepik.com/free-vector/people-ordering-food-cafe-online_74855-5913.jpg' alt = "restaurant"/>
          }>
            {close =>(
              <>
              <div>
                <button className='popup-button' onClick = {() => close()}>
                  <IoCloseCircle className='popup-buttonicon'/>
                </button>
              <h1 className='popup-heading'>Project</h1>   
        <div className='popup-align'> 
            <h1 className='popup-sideheading'>Demo: </h1>
            <a href = 'https://kitchen-order.netlify.app/' target = '_blank' className='popup-link'>Restaurant</a>  
          </div> 
          <div className='popup-align'>
            <h1 className='popup-sideheading'>Github: </h1>
            <a href = 'https://github.com/Niharikakasthuri/kitchen-order.git' target = '_blank' className='popup-link'>Git Link</a>
          </div>
          <div className='popup-align'>
            <h1 className='popup-sideheading'>Description: </h1>
            <p className='popup-link'>
              A simple HTML restaurant application to order the food. It is done by using HTML, CSS and CSS Animation.</p>
          </div>
             </div>
              </>
            )}
            </Popup>
            <Popup
            modal 
            trigger = {
          <img className='project-image' src = 'https://img.freepik.com/free-vector/digital-currency-abstract-concept-illustration_335657-3834.jpg?t=st=1716613970~exp=1716617570~hmac=6be50b998c5044ecc39fa50147b012e615012bdb225b2774d2eecfdec7643322&w=740' alt = "bitcoin"/>
            }>
              {close =>(
              <>
              <div>
              <button className='popup-button' onClick = {() => close()}>
                  <IoCloseCircle className='popup-buttonicon'/>
                </button>
              <h1 className='popup-heading'>Project</h1>   
        <div className='popup-align'> 
            <h1 className='popup-sideheading'>Demo: </h1>
            <a href = 'https://bitcoin-sample.netlify.app/' target = '_blank' className='popup-link'>Bitcoin</a>  
          </div> 
          <div className='popup-align'>
            <h1 className='popup-sideheading'>Github: </h1>
            <a href = 'https://github.com/Niharikakasthuri/bitcoin-sample.git' target='_blank' className='popup-link'>Git Link</a>
          </div>
          <div className='popup-align'>
            <h1 className='popup-sideheading'>Description: </h1>
            <p className='popup-link'>
              A simple HTML Bitcoin website. It is done by using HTML, CSS and CSS animation.</p>
          </div>
              </div>
              </>
            )}
            </Popup>
            <Popup
            modal 
            trigger = {
          <img className='project-image' src = 'https://img.freepik.com/free-vector/gradient-sales-representative-illustration_52683-82971.jpg?t=st=1716614247~exp=1716617847~hmac=2cec6a71f66a26ea8a338d18c1f84c6bc84760f5d165562830a09853c1945ee1&w=996' alt = "e-commerce"/>
            }>
             {close =>(
              <>
              <div>
              <button className='popup-button' onClick = {() => close()}>
                  <IoCloseCircle className='popup-buttonicon'/>
                </button>
              <h1 className='popup-heading'>Project</h1>   
        <div className='popup-align'> 
            <h1 className='popup-sideheading'>Demo: </h1>
            <a href = 'https://html-e-commerce.netlify.app/' target='_blank' className='popup-link'>E-commerce</a>  
          </div> 
          <div className='popup-align'>
            <h1 className='popup-sideheading'>Github: </h1>
            <a href = 'https://github.com/Niharikakasthuri/sample-ecommerce.git' target='_blank' className='popup-link'>Git Link</a>
          </div>
          <div className='popup-align'>
            <h1 className='popup-sideheading'>Description: </h1>
            <p className='popup-link'>
              A simple HTML e-commerence website to order home applications or any other items. It is done by using HTML, CSS and CSS Animation.</p>
          </div>
              </div>
              </>
            )}
            </Popup>
        </div>
      </div>
      <h1 className='project-heading'>ReactJS</h1>
      <div className='project-align'>
        <div>
          <Popup
          modal 
          trigger={
          <img className='project-image' src = 'https://img.freepik.com/free-vector/online-games-addiction_23-2148534527.jpg?t=st=1716615292~exp=1716618892~hmac=7a5e5defa513a0825e6107b23dd91bc1e2e4ea39249844d0144fda9b76b5b63f&w=740' alt = 'minigames'/>
          }>
            {close =>(
              <>
              <div>
              <button className='popup-button' onClick = {() => close()}>
                  <IoCloseCircle className='popup-buttonicon'/>
                </button>
              <h1 className='popup-heading'>Project</h1>   
        <div className='popup-align'> 
            <h1 className='popup-sideheading'>Demo: </h1>
            <a href = 'https://gregarious-torte-97efb4.netlify.app/' target='_blank'  className='popup-link'>Mini-Games</a>  
          </div> 
          <div className='popup-align'>
            <h1 className='popup-sideheading'>Github: </h1>
             <a className='popup-link' href = 'https://github.com/Niharikakasthuri/mini-games.git' target='_blank'>Git Link</a>
          </div>
          <div className='popup-align'>
            <h1 className='popup-sideheading'>Description: </h1>
            <p className='popup-link'>
              I did a project on mini-games It is done by using HTML, CSS, Javascript and Routers. In this project you play four mini-games. The mini games are Emoji Game, Rock Paper Scissors Game, Memory Matrix Game, Card-Flip Memory Game. In this there is a Home Page from this Home Page you can navigate to the four games. And in this games there are scores by the result of the game you can get scores for each game.</p>
          </div>
              </div>
              </>
            )}
            </Popup>
            <Popup
            modal 
            trigger={
          <img className='project-image' src = 'https://img.freepik.com/free-vector/calculator-concept-illustration_114360-2686.jpg?t=st=1716615441~exp=1716619041~hmac=6ad64863f043244077d7b039912c41b3bbeef8acd6422f612cd1eb35bc1dcc94&w=740' alt = 'calculator'/>
            }>
              {close =>(
              <>
              <div>
              <button className='popup-button' onClick = {() => close()}>
                  <IoCloseCircle className='popup-buttonicon'/>
                </button>
              <h1 className='popup-heading'>Project</h1>   
        <div className='popup-align'> 
            <h1 className='popup-sideheading'>Demo: </h1>
            <a href = 'https://app-calculator-app.netlify.app/' target='_blank' className='popup-link'>Calculator</a>  
          </div> 
          <div className='popup-align'>
            <h1 className='popup-sideheading'>Github: </h1>
            <a href = 'https://github.com/Niharikakasthuri/calculator.git' target='_blank' className='popup-link'>Git Link</a>
          </div>
          <div className='popup-align'>
            <h1 className='popup-sideheading'>Description: </h1>
            <p className='popup-link'>
              I did a simple Calculator application in this application you can use mathematical operations. There is also a clear button and backspace button.</p>
          </div>
              </div>
              </>
            )}
            </Popup>
            <Popup
            modal 
            trigger={
          <img className='project-image' src = 'https://img.freepik.com/premium-vector/list-time-management-woman-is-standing-near-large-list-with-pencil-plan-fulfilled_503161-627.jpg?w=900' alt = 'todo'/>
            }>
              {close =>(
              <>
              <div>
              <button className='popup-button' onClick = {() => close()}>
                  <IoCloseCircle className='popup-buttonicon'/>
                </button>
              <h1 className='popup-heading'>Project</h1>   
        <div className='popup-align'> 
            <h1 className='popup-sideheading'>Demo: </h1>
            <a href = 'https://frolicking-biscotti-aa4979.netlify.app/' target='_blank' className='popup-link'>Todos</a>  
          </div> 
          <div className='popup-align'>
            <h1 className='popup-sideheading'>Github: </h1>
            <a href = 'https://github.com/Niharikakasthuri/EnchanmentTodos.git' target='_blank' className='popup-link'>Git Link</a>
          </div>
          <div className='popup-align'>
            <h1 className='popup-sideheading'>Description: </h1>
            <p className='popup-link'>
              I did a Todo List project. In this project you can add todo list and save it and after saving the todo list if you want you can also edit the text and there is also a delete button.</p>
          </div>
              </div>
              </>
            )}
            </Popup>
        </div>
      </div>
      </div>
      </div>
    
  )
}

export default Projects
