import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Card from './Card';
export default function Cards(props) {
    // const [appState, setAppState] = useState([]);
    // setAppState(props.data());
    const appState = props.data;
    console.log(appState);
  return (
    <div className='cards'>
     {appState.map((el)=>{
         return <Card key={el.id} img={el.poster_path} title={el.original_title} populary={el.vote_average} release={el.release_date} desc={el.overview}/>
    })}
    </div>

  )
}