import React, { useEffect,useState } from 'react';
import axios from 'axios';
import TrendFilm from './TrendFilm';
export default function TrendFilms(props) {
    const appState = props.data;
    console.log(appState);
  return (
    <>
    <div style={{display:'flex'}}>
    <h1 style={{marginLeft:'20px', fontFamily:'cursive',fontVariant:'historical-ligatures',marginBottom:'20px'}}>В тренде</h1>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{marginTop:'22px',marginLeft:'20px'}} onChange={(e)=>{
          if(e.target.checked) {
            props.isCheck('ok')
          }
          else{
            props.isCheck('neok')
          }
          }} />
        <label class="form-check-label" for="flexSwitchCheckDefault" style={{marginTop:'17px', marginLeft:'60px'}}>Day/Week</label>
      </div>
    </div>
          <div className='popcards'>
                  {appState.map((el) => {
                      return <TrendFilm key={el.id} img={el.poster_path} title={el.original_title} populary={el.vote_average} />
                  })}
          </div>
    </>
    

  )
}