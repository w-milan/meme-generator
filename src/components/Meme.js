import React from 'react'
import memesData from '../memesData'

const Meme = () => {

  function getMemeImage(e){
    e.preventDefault();

    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)   
    const url = memesArray[randomNumber].url 
    console.log(url)  
  }

  return (
    <main>
      <form className='form'>
        <input 
          type="text" 
          id="toptext" 
          name="toptext" 
          placeholder='Type top text'
          className='form-input'
        >
        </input>
        <input 
          type="text" 
          id="bottomtext"
          name="bottomtext" 
          placeholder='Type bottom text'
          className='form-input'
        >
        </input>
        <button onClick={getMemeImage} className='form-button'>Get a new meme image 🖼</button>
      </form>
    </main>
  )
}

export default Meme