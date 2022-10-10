import React from 'react';
import './styles/main.scss';

import mixData from './mixes.json'

import Nav from './components/Nav.js'
import Mix from './components/Mix.js'
// import Tracklist from './components/Tracklist.js'

import mix1Artwork from './assets/headroom_IMG_1817.png'
import mix2Artwork from './assets/mix2-iphone.JPG'
// import mix3Artwork from './assets/130-Mix.png'

// import close from './assets/icons/icons8-close-window-96.png'

const artwork = {
  mix1: mix1Artwork,
  mix2: mix2Artwork,
  // mix3: mix3Artwork
}


function App() {

  console.log(artwork.mix3)

  return (
    <main className="App">
      <Nav />

      <div className='mix-section'>
        <div className='mix-wrapper'>
          <Mix
            mix={mixData['z11.1']}
            artwork={artwork.mix1} />
        </div>


        <div className='mix-wrapper testmix'>
          <Mix
            mix={mixData['E00']}
            artwork={artwork.mix2} />
        </div>

        <div className='mix-wrapper'>
          <Mix
            mix={mixData['z11.1']}
            artwork={artwork.mix1} />
        </div>


        <div className='mix-wrapper testmix'>
          <Mix
            mix={mixData['E00']}
            artwork={artwork.mix2} />
        </div>

      </div>


      <footer className='footer'>
        <a href="mailto:eazzze.info@gmail.com">email</a>
        <a href="https://soundcloud.com/eazzze" target="_blank" rel="noreferrer">soundcloud</a>
      </footer>


    </main >
  )
}

export default App;
