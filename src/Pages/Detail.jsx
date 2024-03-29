import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [dentist, setDentist] = useState({})
    const params = useParams()
    console.log(params)
    
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users/'+params.id)
        .then(res => setDentist(res.data))
        .catch(err => console.log(err))
    }, [])
    
  return (
    <>
    <h1>Detail Dentist id </h1>

    <div>
        <h3>{dentist.name}</h3>
        <h4>{dentist.email}</h4>
        <h4>{dentist.phone}</h4>
        <h4>{dentist.website}</h4>
    </div>
    </>
    
  )
}

export default Detail