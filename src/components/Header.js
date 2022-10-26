import React from 'react'
import logo from '../images/troll-face.png'

const Header = () => {
  return (
    <header className='header'>
      <img 
        src={logo} 
        alt="meme logo" 
        className='header-image'
      />
      <h1 className='header-title'>Meme generator</h1>
    </header>
  )
}

export default Header