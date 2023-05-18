import React from 'react';
import StarRatings from 'react-star-ratings';
export default function PopularFilm(props) {
  const img = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2"+props.img
  return (
    <div class="cardsPopular">
      <div class="cardPopularInside">
        <span></span>
        <img className='posterPop' src={img} alt='Картинка отсутствует'></img>
        <div style={{display:'flex',justifyContent:'space-between',gap:'10px',marginLeft:'20px',marginRight:'20px'}}>
        <StarRatings
          starRatedColor="orange"
          rating={props.populary}
          starDimension="15px"
          starSpacing="2px"
          numberOfStars={10}
        />
        <p>{props.populary}</p>
        </div>
        <h1 style={{fontSize:'20px'}}>{props.title}</h1>
      </div>
    </div>
    
  )
}