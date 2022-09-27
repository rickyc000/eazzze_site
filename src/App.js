import React from 'react';
import './styles/main.scss';

import mixData from './mixes.json'

import Nav from './components/Nav.js'
import Mix from './components/Mix.js'
import Tracklist from './components/Tracklist.js'

import mix1Artwork from './assets/headroom_IMG_1817.png'
import close from './assets/icons/icons8-close-window-96.png'

const artwork = {
  mix1: mix1Artwork
}


function App() {

  const [mixOpen, setMixOpen] = React.useState(false)
  const [tracklistVisible, setTracklistVisible] = React.useState(false)

  const toggleTracklistView = () => {
    setTracklistVisible(!tracklistVisible)
  }

  console.log(mixData)


  return (
    <main className="App">
      <Nav />
      <div className='mix-wrapper'>
        {
          mixOpen ?
            <div>
              <div className='open-mix'>
                <Mix
                  mix={mixData['z11.1']} />
                <div
                  className='close-mix-window-wrapper'
                  onClick={() => setMixOpen(false)}>
                  <img
                    className='close-mix-window'
                    src={close}
                    alt="close-mix"
                    width="26px" />
                </div>
              </div>
              <div
                onClick={toggleTracklistView}
              >
                view tracklist
              </div>
            </div>
            :
            <div className='closed-mix'>
              <img
                src={artwork.mix1}
                alt='mix1'
                className='mix-artwork'
                onClick={() => setMixOpen(!mixOpen)} />
            </div>
        }
      </div>


      {
        tracklistVisible ?
          <div>
            <Tracklist
              tracklist={mixData['z11.1']['tracklist']} />
            <div className='close-button' onClick={toggleTracklistView}>
              close
            </div>
          </div>
          :
          <div>
          </div>
      }
    </main >
  )
}

export default App;
