import React from 'react'


function Tracklist({ tracklist }) {

  const trackArtist = Object.entries(tracklist)

  return (
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
  )
}


export default Tracklist