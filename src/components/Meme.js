import React from 'react'

const Meme = () => {

  const [meme, setMeme] = React.useState({
    topText: "", 
    bottomText: "", 
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
}, [])

  function getMemeImage(e){
    e.preventDefault();

    const randomNumber = Math.floor(Math.random() * allMemes.length)   
    const url = allMemes[randomNumber].url 
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(e){
    const {name, value} = e.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <form className='form'>
        <input 
          type="text" 
          id="topText" 
          name="topText" 
          placeholder='Type top text'
          className='form-input'
          value={meme.topText}
          onChange={handleChange}
        >
        </input>
        <input 
          type="text" 
          id="bottomText"
          name="bottomText" 
          placeholder='Type bottom text'
          className='form-input'
          value={meme.bottomText}
          onChange={handleChange}
        >
        </input>
        <button onClick={getMemeImage} className='form-button'>Get a new meme image 🖼</button>
      </form>

      <div className="meme">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme