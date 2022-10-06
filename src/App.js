import React from 'react';
import './styles/main.scss';

import mixData from './mixes.json'

import Nav from './components/Nav.js'
import Mix from './components/Mix.js'
// import Tracklist from './components/Tracklist.js'

import mix1Artwork from './assets/headroom_IMG_1817.png'
import mix2Artwork from './assets/mix2-iphone.JPG'

// import close from './assets/icons/icons8-close-window-96.png'

const artwork = {
  mix1: mix1Artwork,
  mix2: mix2Artwork
}


function App() {


  return (
    <main className="App">
      <Nav />
      
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


      <footer>
        {/* <a href="mailto:eazzze.info@gmail.com">eazzze.info@gmail.com</a> */}
        <a href="https://soundcloud.com/eazzze" target="_blank" rel="noreferrer">soundcloud</a>
      </footer>


    </main >
  )
}

export default App;
