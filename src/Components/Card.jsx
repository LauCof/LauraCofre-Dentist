import React from 'react'
import { Link } from 'react-router-dom'
import { useProductStates } from '../Context'

const Card = ({item}) => {
    const {image, title, price} = item
    const {dispatch} = useProductStates()

    const addCart = () => {
      //Esto es extra
      // if(ya existe dicho producto){
      //   dispatch('DELETE_CART', payload: item.id)
      // } else {
        dispatch({type: 'ADD_CART', payload: item})
    }
    return (
    <div>
        <img src={image} alt="" width={200}/>
        <h3>{title}</h3>
        <h4>${price}</h4>
        <Link to={'/detail/' + item.id}>Ver detalle</Link>
        <button onClick={addCart}>🛒</button>
    </div>
  )
}

export default Card