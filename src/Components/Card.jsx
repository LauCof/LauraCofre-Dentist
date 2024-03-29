import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistStates } from '../Context'

const Card = ({item}) => {
    const {user, username, id} = item
    const {dispatch} = useDentistStates()

    const addFavs = () => {
      dispatch({type: 'ADD_FAVS', payload: item})
    }
    return (
    <div>
        <img src= "./images/doctor.jpg" alt="dentista" width={200}/>
        <h3>{user}</h3>
        <h4>{username}</h4>
        <h4>{id}</h4>
        <Link to={'/detail/' + item.id}>Ver dentista</Link>
        <button onClick={addFavs}>⭐</button>
    </div>
  )
}

export default Card