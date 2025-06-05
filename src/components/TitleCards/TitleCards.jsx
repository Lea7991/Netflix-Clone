import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'



const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = useState ([]);
  const cardsRef = useRef(); 

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWZkODQwNTlmNGY3YmQ3NTk4MjM0N2Q4NTM0YjU3MSIsIm5iZiI6MTc0OTA3NTA5Ni45NTYsInN1YiI6IjY4NDBjNDk4MTQyNjhmNjgyMDI4OWVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HdfqobKqJJiiMUD1g8ru4n7Bp2rPS7QX3ltYuL172aI'
  }
};

const handleWheel = (event) => {
  event.preventDefault; 
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=> {

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWZkODQwNTlmNGY3YmQ3NTk4MjM0N2Q4NTM0YjU3MSIsIm5iZiI6MTc0OTA3NTA5Ni45NTYsInN1YiI6IjY4NDBjNDk4MTQyNjhmNjgyMDI4OWVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HdfqobKqJJiiMUD1g8ru4n7Bp2rPS7QX3ltYuL172aI'
  }
};

fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel)
},[])

  return (
    <div className='title__cards'>
      <h2>{title ? title: "Popular on Netflix"}</h2>
      <div className="card__list" ref={cardsRef}>
        {
          apiData.map((card, index) => {
            return <Link to={`/player/${card.id}`} className='card' key={index}>
              <img src={`https://image.tmdb.org/t/p/w500` +card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default TitleCards