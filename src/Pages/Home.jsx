import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { useProductStates } from '../Context'

const Home = () => {

  const {state} = useProductStates()

  return (
    <div>
        {state.list.map((producto) => <Card key={producto.id} item={producto}/>)}
    </div>
  )
}

export default Home