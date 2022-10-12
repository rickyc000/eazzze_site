import React from 'react'

import close from '../assets/icons/close-svgrepo-com (3).svg'

function Tracklist({ tracklist, toggleTracklistView }) {

  const trackArtist = Object.entries(tracklist)

  return (
    <div className='tracklist-modal'>
      <div className='tracklist-section'>
        <div className='tracklist-wrapper'>
          <ul>
            {
              trackArtist.map((track, i) => (
                <li key={i}>
                  {track[0]} - {track[1]}
                </li>
              ))
            }
          </ul>
        </div>
        <div className='close-tracklist-wrapper' onClick={toggleTracklistView}>
          <img
            className='close-tracklist'
            src={close}
            alt="close-tracklist"
            width="18px" />
        </div>
      </div>
    </div>
  )
}


export default Tracklist