import React from 'react'
import memesData from '../memesData'

const Meme = () => {

  const [meme, setMeme] = React.useState({
    topText: "", 
    bottomText: "", 
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage(e){
    e.preventDefault();

    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)   
    const url = memesArray[randomNumber].url 
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
  }))
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

      <div className="meme">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme-text top">Top text</h2>
        <h2 className="meme-text bottom">Bottom text</h2>
      </div>
    </main>
  )
}

export default Meme