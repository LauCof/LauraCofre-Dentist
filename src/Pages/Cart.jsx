import React from 'react'
import { useProductStates } from '../Context'
import Card from '../Components/Card'

const Cart = () => {
  const {state} = useProductStates()
  return (
    <div>
      {state.cart.map((producto) => <Card key={producto.id} item={producto}/>)}
    </div>
  )
}

export default Cart