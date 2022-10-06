import React from 'react'

import close from '../assets/icons/close-svgrepo-com.svg'

function Tracklist({ tracklist, toggleTracklistView }) {

  const trackArtist = Object.entries(tracklist)

  return (
    <div className='tracklist-modal'>
      <div className='tracklist-wrapper'>
        <ul>
          {
            trackArtist.map((track, i) => (
              <li key={i} className="product-card">
                {track[0]} - {track[1]}
              </li>
            ))
          }
        </ul>
      </div>
      <img
        className='close-mix-window'
        onClick={toggleTracklistView}
        src={close}
        alt="close-tracklist"
        width="20px" />
    </div>
  )
}


export default Tracklist