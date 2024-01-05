import React from 'react'
import logo from '../assets/logo.jpg'
import Button from './UI/Button'

function Header() {
  return (
   <header id='main-header'>
    <div id='title'>
        <img src={logo} alt="app" />
        <p>Ziggy</p>
    </div>
    <nav>
        <Button textOnly={true}>Cart (0)</Button>
    </nav>
   </header> 
  )
}

export default Header