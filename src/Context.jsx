import {createContext, useContext, useState} from 'react'

const ProductStates = createContext()

const Context = ({children}) => {
    const [cart, setCart] = useState([])

    return(
        <ProductStates.Provider value={{cart, setCart}}>
            {children}
        </ProductStates.Provider>
    )
}

export default Context

export const useProductStates = () => useContext(ProductStates)