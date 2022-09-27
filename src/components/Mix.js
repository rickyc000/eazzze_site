import React from 'react'

// import mix1Artwork from '../assets/headroom_IMG_1817.png'
// import mix2Artwork from '../assets/CCL-Mix-Art.jpeg'

import Tracklist from '../components/Tracklist.js'

import close from '../assets/icons/icons8-close-window-96.png'



function Mix({ mix, artwork }) {

  const [mixOpen, setMixOpen] = React.useState(false)
  const [tracklistVisible, setTracklistVisible] = React.useState(false)

  const toggleTracklistView = () => {
    setTracklistVisible(!tracklistVisible)
  }

  return (
    <div>

      {
        mixOpen ?
          <div>
            <div className='open-mix'>
              <div className='soundcloud-embed-wrap'>
                <iframe
                  title='mix1'
                  width="300"
                  height="300"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src={mix.src}>
                </iframe>

              </div >
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
              className='tracklist-toggle'
              onClick={toggleTracklistView}
            >
              tracklist
            </div>
          </div>
          :
          <div className='closed-mix'>
            <img
              src={artwork}
              alt='mix1'
              className='mix-artwork'
              onClick={() => setMixOpen(!mixOpen)} />
          </div>
      }


      {
        tracklistVisible ?
          <div>
            <Tracklist
              tracklist={mix['tracklist']} />
            <div className='close-button' onClick={toggleTracklistView}>
              close
            </div>
          </div>
          :
          <div>
          </div>
      }


    </div>
  )
}


export default Mix