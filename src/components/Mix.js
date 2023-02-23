import React from 'react'

import Tracklist from '../components/Tracklist.js'

import close from '../assets/icons/close-svgrepo-com (3).svg'
import tracklist from '../assets/icons/lines-svgrepo-com.svg'

function Mix({ mix, artwork, toggleCursorView }) {

  const [mixOpen, setMixOpen] = React.useState(false)
  const [mixOpening, setMixOpening] = React.useState(false)
  const [tracklistVisible, setTracklistVisible] = React.useState(false)

  const toggleTracklistView = () => {
    setTracklistVisible(!tracklistVisible)
  }

  const openTheMix = () => {

    setMixOpening(true)

    //* Delays the opening of the mix:
    setTimeout(() => {
      setMixOpen(true)
    }, 300)
  }

  const closeTheMix = () => {

    setMixOpening(false)

    //* Delays the closing of the mix:
    setTimeout(() => {
      setMixOpen(false)
    }, 400)
  }


  return (
    <div>
      {
        mixOpen ?
          <div>
            <div className='open-mix'>
              <div className='soundcloud-embed-wrap'>
                <iframe
                  onMouseEnter={toggleCursorView}
                  onMouseLeave={toggleCursorView}
                  title='mix1'
                  width="305"
                  height="305"
                  frameborder="no"
                  allow="autoplay"
                  src={mix.src}>
                </iframe>
              </div>
              <div
                className='open-mix-options'
              >
                <img
                  className='close-mix-window'
                  onClick={() =>
                    closeTheMix()
                  }
                  src={close}
                  alt="close-mix"
                  width="18px" />
                <img
                  className='open-tracklist-modal'
                  onClick={toggleTracklistView}
                  src={tracklist}
                  alt="close-mix"
                  width="18px" />
              </div>
            </div>
          </div>
          :
          <div className='closed-mix'>
            <div className='closed-mix-overlay'>
              <img
                src={artwork}
                alt='mix1'
                className={`mix-artwork ${mixOpening ? `open` : `closed`}`}
                onClick={() => setMixOpen(openTheMix)} />
            </div>
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
          <div className='tracklist-closed'>
          </div>
      }
    </div>
  )
}

export default Mix