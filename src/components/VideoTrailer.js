import React from 'react';
import ReactPlayer from 'react-player'
export default function VideoTrailer(props) {
  const img = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"+props.img;
  const video = "https://www.youtube.com/watch?v="+props.vid;
  return (
    <div className='backForVideo'>
        <div style={{display:'flex',justifyContent:'center'}}>
            <ReactPlayer className="player" url={video} controls={true} />
        </div>
        <h1 className='trailerNow'>{props.title}</h1>
    </div> 
  )
}