import React from 'react'

// import mix1Artwork from '../assets/headroom_IMG_1817.png'
// import mix2Artwork from '../assets/CCL-Mix-Art.jpeg'

import Tracklist from '../components/Tracklist.js'

// import close from '../assets/icons/icons8-close-window-96.png'
// import close from '../assets/icons/close-svgrepo-com.svg'
import close from '../assets/icons/close-svgrepo-com (3).svg'
import tracklist from '../assets/icons/lines-svgrepo-com.svg'



function Mix({ mix, artwork }) {

  const [mixOpen, setMixOpen] = React.useState(false)
  const [tracklistVisible, setTracklistVisible] = React.useState(false)

  const toggleTracklistView = () => {
    setTracklistVisible(!tracklistVisible)
  }

  console.log(mixOpen)

  return (
    <div>

      {
        mixOpen ?
          <div>
            <div className='open-mix'>
              <div className='soundcloud-embed-wrap'>
                <iframe
                  title='mix1'
                  width="320"
                  height="320"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src={mix.src}>
                </iframe>

              </div >
              <div
                className='open-mix-options'
                >
                <img
                  className='close-mix-window'
                  onClick={() => setMixOpen(false)}
                  src={close}
                  alt="close-mix"
                  width="20px" />
                <div className='tracklist-toggle' onClick={toggleTracklistView} >
                <img
                  className='close-mix-window'
                  onClick={() => setMixOpen(false)}
                  src={tracklist}
                  alt="close-mix"
                  width="20px" />
                </div>
              </div>
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
              tracklist={mix['tracklist']}
              toggleTracklistView={toggleTracklistView} />
          </div>
          :
          <div>
          </div>
      }


    </div>
  )
}


export default Mix