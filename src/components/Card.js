import React from 'react';
import StarRatings from 'react-star-ratings';
export default function Card(props) {
  const img = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"+props.img
  return (
    <div className="cardKino">
      <img className='poster' src={img} alt='Картинка отсутствует'></img>
      
      <StarRatings
        starRatedColor="orange"
        rating={props.populary}
        starDimension="15px"
        starSpacing="5px"
        numberOfStars={10}
      />
      <h1>{props.title}</h1>
      <h5>Дата выхода: {props.release}</h5>
      <p>{props.desc}</p>
      </div>
  )
}