import React, { useEffect,useState } from 'react';
import axios from 'axios';
import PopularFilm from './PopularFilm';
export default function PopularFilms(props) {
    const appState = props.data;
    console.log(appState);
  return (
    <>
    <h1 style={{marginRight:'1240px',fontFamily:'cursive',fontVariant:'historical-ligatures',marginBottom:'20px'}}>Популярное</h1>
          <div className='popcards'>
                  {appState.map((el) => {
                      return <PopularFilm key={el.id} img={el.poster_path} title={el.original_title} populary={el.vote_average} />
                  })}
          </div>
    </>
    

  )
}