import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [product, setProduct] = useState({})
    const params = useParams()
    console.log(params)
    
    useEffect(() => {
        axios('https://fakestoreapi.com/products/'+params.id)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }, [])
    
  return (
    <div>
        <img src={product.image} alt="" width={200}/>
        <h3>{product.title}</h3>
        <h4>${product.price}</h4>
        <p>{product.description}</p>
    </div>
  )
}

export default Detail