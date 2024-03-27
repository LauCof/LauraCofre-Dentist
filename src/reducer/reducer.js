export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_LIST':
            return {...state, list: action.payload}
        case 'ADD_CART': 
            return {...state, cart: [...state.cart, action.payload]}
        case 'CHANGE_THEME':
            return {}
    }
}