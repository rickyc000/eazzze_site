import React from 'react'


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
      <div
        onClick={toggleTracklistView}>
        close tracklist
      </div>
    </div>
  )
}


export default Tracklist