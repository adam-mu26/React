import React from 'react'

import './Card.css'

export default 

function card(props) {
  return (
    <div className='container'>
      <img src={props.imgSrc}  alt=''></img>
      <h2>{props.cardTitle}</h2>
      <p>{props.cardDescription}</p>
      <a href={props.cardLink1}>SHARE</a>
      <a href={props.cardLink2}>EXPLORE</a>
    </div>
  )
}

