import React, { useEffect,useState } from 'react';
import axios from 'axios';
import VideoTrailer from './VideoTrailer';
export default function VideoTrailers(props) {
    const appState = props.data;
    console.log(appState);
  return (
    <>
    <h1 style={{marginTop:'20px', fontFamily:'cursive',fontVariant:'historical-ligatures',marginBottom:'20px'}}>Сейчас в прокате</h1>
          <div>
                  {appState.map((el) => {
                      return <VideoTrailer key={el.id} vid={el.key} title={el.name}/>
                  })}
          </div>
    </>
    

  )
}