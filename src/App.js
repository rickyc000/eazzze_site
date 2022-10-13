import React from 'react'

import { useRef, useEffect } from 'react'

import './styles/main.scss'

import mixData from './mixes.json'

import Nav from './components/Nav.js'
import Mix from './components/Mix.js'
// import Tracklist from './components/Tracklist.js'

import mix1Artwork from './assets/images/headroom_IMG_1817.png'
import mix2Artwork from './assets/images/mix2-iphone.JPG'
import mix3Artwork from './assets/images/mix3-test.jpg'
import mix4Artwork from './assets/images/z11.2.jpg'

const artwork = {
  mix1: mix1Artwork,
  mix2: mix2Artwork,
  mix3: mix3Artwork,
  mix4: mix4Artwork
}

function App() {

  const cursor = useRef(null)
  // cursor.current.style.display = 'none'

  useEffect(() => {
    cursor.current.style.display = 'none'
  }, [])

  const changePosition = (e) => {
    cursor.current.style.display = 'block'
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  }

  const toggleCursorView = (e) => {
    if (e.type === 'mouseenter') {
      cursor.current.style.display = 'none'
    } else {
      cursor.current.style.display = 'block'
    }
  }

  return (
    <main className="App" onMouseMove={changePosition} >
      <div className="cursor-style" ref={cursor} ></div>
      <Nav />

      <div className='mix-section'>
        <div className='mix-wrapper'>
          <Mix
            toggleCursorView={toggleCursorView}
            mix={mixData['z11.1']}
            artwork={artwork.mix1} />
        </div>


        <div className='mix-wrapper'>
          <Mix
            toggleCursorView={toggleCursorView}
            mix={mixData['E00']}
            artwork={artwork.mix2} />
        </div>

        {/* <div className='mix-wrapper'>
          <Mix
            mix={mixData['z11.1']}
            artwork={artwork.mix3} />
        </div>

        <div className='mix-wrapper'>
          <Mix
            mix={mixData['E00']}
            artwork={artwork.mix4} />
        </div> */}

      </div>


      <footer className='footer'>
        <a href="mailto:eazzze.info@gmail.com">email</a>
        {/* <a href="https://www.instagram.com/_rickycato/" target="_blank" rel="noreferrer">instagram</a> */}
        <a href="https://soundcloud.com/eazzze" target="_blank" rel="noreferrer">soundcloud</a>
      </footer>

    </main >
  )
}

export default App;
