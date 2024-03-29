import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useDentistStates } from '../Context'


const Home = () => {

  const {state} = useDentistStates()

  return (
    <div>
        {state.map((dentista) => <Card key={dentista.id} item={dentista}/>)}
    </div>
  )
}

export default Home