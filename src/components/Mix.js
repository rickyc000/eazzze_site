import React from 'react'



function Mix({ mix }) {

  return (
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
  )
}


export default Mix