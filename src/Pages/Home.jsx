import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'

const Home = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        axios('https://fakestoreapi.com/products')
        .then(res => setList(res.data))
    }, [])


  return (
    <div>
        {list.map((producto) => <Card key={producto.id} item={producto}/>)}
    </div>
  )
}

export default Home