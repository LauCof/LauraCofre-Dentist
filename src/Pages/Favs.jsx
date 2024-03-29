import React from 'react'
import { useDentistStates } from '../Context'
import Card from '../Components/Card'

const Favs = () => {
  const {state} = useDentistStates()
  return (
    <div>
      {state.favs.map((dentista) => <Card key={dentista.id} item={dentista}/>)}
    </div>
  )
}

export default Favs