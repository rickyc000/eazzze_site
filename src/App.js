import React from 'react';
import './styles/main.scss';

import mixData from './mixes.json'

import Nav from './components/Nav.js'
import Mix from './components/Mix.js'
import Tracklist from './components/Tracklist.js'

import mix1Artwork from './assets/headroom_IMG_1817.png'

const mix1 = {
  src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1337514391&color=%230b0c0c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
  art: mix1Artwork
}


function App() {

  const [mixOpen, setMixOpen] = React.useState(false)
  const [tracklistVisible, setTracklistVisible] = React.useState(false)

  const openTracklist = () => {
    setTracklistVisible(!tracklistVisible)
  }


  return (
    <main className="App">
      <Nav />
      <div className='mix-wrapper'>
        {
          mixOpen ?
            <>
              <Mix
                mix={mixData['z11.1']} />
              <div
                onClick={openTracklist}
                >
                tracklist
              </div>
            </>
            :
            <img
              src={mix1.art}
              alt='mix1'
              className='mix-artwork'
              onClick={() => setMixOpen(!mixOpen)} />
        }
      </div>


      {
        tracklistVisible ? 
        <Tracklist
        tracklist={mixData['z11.1']['tracklist']} />
        :
        <div>
          closed
        </div>
      }
    </main >
  )
}

export default App;
