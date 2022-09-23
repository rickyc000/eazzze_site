import React from 'react'

// const style1 = {
//   fontsize: '10px',
//   color: '#cccccc',
//   linebreak: 'anywhere',
//   wordbreak: 'normal',
//   overflow: 'hidden',
//   whitespace: 'nowrap',
//   textoverflow: 'ellipsis',
//   fontfamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100'
// }

function Mix({ mix }) {

  return (
    <div>
      <iframe
        title='mix1'
        width="100%"
        height="300"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={mix.src}>
      </iframe>
      {/* <div
        style={style1}
      >
      </div> */}

      <div>
        tracklist
      </div>
    </div >
  )
}


export default Mix