import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
    const {image, title, price} = item
  return (
    <div>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <h4>${price}</h4>
        <Link to={'/detail/' + item.id}>Ver detalle</Link>
        <button>⭐</button>
    </div>
  )
}

export default Card