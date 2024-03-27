import axios from 'axios'
import {createContext, useContext, useEffect, useReducer} from 'react'
import { reducer } from './reducer/reducer'

const ProductStates = createContext()

const lsCart = JSON.parse(localStorage.getItem('cart'))
console.log(lsCart)
const initialState = {
    cart: lsCart || [], 
    list: [],
    // theme: "" o "dark"
    // theme: true o false
} 
const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios('https://fakestoreapi.com/products')
        .then(res => {
            console.log(res.data)
            dispatch({type: 'GET_LIST', payload: res.data})
        })
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart])

    return(
        <ProductStates.Provider value={{state, dispatch}}>
            {children}
        </ProductStates.Provider>
    )
}

export default Context

export const useProductStates = () => useContext(ProductStates)