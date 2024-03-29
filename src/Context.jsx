import axios from 'axios'
import {createContext, useContext, useEffect, useReducer} from 'react'
import { reducer } from './reducer/reducer'

const DentistStates = createContext()

const lsFavs = JSON.parse(localStorage.getItem('favs'))
console.log(lsFavs)
const initialState = {
    cart: lsFavs || [], 
    list: [],
    theme: {
        value: true, 
        toggleTheme: ()=> {
            dispatch({type: 'CHANGE_THEME'})
        }
} 
}

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data)
            dispatch({type: 'GET_LIST', payload: res.data})
        })
        .catch((error) => {
            console.error('Error fetching users:', error);
          });
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])

   return(
        <DentistStates.Provider value={{state, dispatch}}>
            {children}
        </DentistStates.Provider>
    )
}

export default Context

export const useDentistStates = () => useContext(DentistStates)