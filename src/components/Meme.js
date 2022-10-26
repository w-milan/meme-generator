import React from 'react'

const Meme = () => {
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
        <button className='form-button'>Get a new meme image 🖼</button>
      </form>
    </main>
  )
}

export default Meme