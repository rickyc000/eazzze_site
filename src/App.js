import React from 'react'

import { useRef } from 'react'

import './styles/main.scss'

import mixData from './mixes.json'
// import mixData from './mixes-copy.json'

import Nav from './components/Nav.js'
import Mix from './components/Mix.js'
// import Tracklist from './components/Tracklist.js'

import mix1Artwork from './assets/images/mix1-image.png'
import mix2Artwork from './assets/images/mix2-image.jpg'
import mix3Artwork from './assets/images/mix3-image.jpg'
import mix4Artwork from './assets/images/mix4-image.jpg'
import mix5Artwork from './assets/images/mix5-image.png'
import mix6Artwork from './assets/images/mix6-image.png'

import SoundcloudIcon from './assets/icons/icons8-soundcloud-100.png'

const artwork = {
  mix1: mix1Artwork,
  mix2: mix2Artwork,
  mix3: mix3Artwork,
  mix4: mix4Artwork,
  mix5: mix5Artwork,
  mix6: mix6Artwork,
}

function App() {

  const cursor = useRef(null)

  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  }

  // const toggleCursorView = (e) => {
  //   if (e.type === 'mouseenter') {
  //     cursor.current.style.display = 'none'
  //   } else {
  //     cursor.current.style.display = 'block'
  //   }
  // }

  return (
    <main className="App" onMouseMove={changePosition} >
      {/* <main className="App" > */}
      <div className="cursor-style" ref={cursor} style={{ top: '-20px' }}></div>
      {/* <div className="top-layer"></div> */}
      <Nav />

      <div className='mix-section'>

      {/* <div className='mix-wrapper'>
          <Mix
            // toggleCursorView={toggleCursorView}
            mix={mixData['inc']}
            artwork={artwork.mix6} />
        </div> */}

      <div className='mix-wrapper'>
          <Mix
            // toggleCursorView={toggleCursorView}
            mix={mixData['exstp']}
            artwork={artwork.mix5} />
        </div>

        <div className='mix-wrapper'>
          <Mix
            // toggleCursorView={toggleCursorView}
            mix={mixData['inc']}
            artwork={artwork.mix4} />
        </div>

        <div className='mix-wrapper'>
          <Mix
            // toggleCursorView={toggleCursorView}
            mix={mixData['LX']}
            artwork={artwork.mix3} />
        </div>

        <div className='mix-wrapper'>
          <Mix
            // toggleCursorView={toggleCursorView}
            mix={mixData['E00']}
            artwork={artwork.mix2} />
        </div>

        <div className='mix-wrapper'>
          <Mix
            // toggleCursorView={toggleCursorView}
            mix={mixData['z11.1']}
            artwork={artwork.mix1} />
        </div>


      </div>


      <footer className='footer'>
        <a href="https://soundcloud.com/eazzze" target="_blank" rel="noreferrer">
          <img src={SoundcloudIcon} alt='Soundcloud' className='soundcloudIcon'/>
        </a>
        {/* <a href="mailto:eazzze.info@gmail.com">email</a> */}
        {/* <a href="https://www.instagram.com/_rickycato/" target="_blank" rel="noreferrer">instagram</a> */}
      </footer>

    </main >
  )
}

export default App;
