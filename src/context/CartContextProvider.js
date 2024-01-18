import React, { createContext, useReducer } from 'react';


export const CartContext = createContext()
const initialState = {
    selectedItems:[],
    itemsCounter:0,
    total:0,
    checkout:false
}
const sumItem = items =>{
    const itemsCounter = items.reduce((total,product)=> total+product.quantity,0)
    const total = items.reduce((total,product)=>total+product.sell_price*product.quantity,0)
    return{total,itemsCounter}
}
const cartReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_ITEM':
        if(!state.selectedItems.find(item=>item.id ===action.payload.id)){
            state.selectedItems.push({
                ...action.payload,
                quantity:1
            })
        }
        return{
            ...state,
            selectedItems:[...state.selectedItems],
            ...sumItem(state.selectedItems),
            checkout:false
        }
        case 'REMOVE_ITEM':
        const newSelected = state.selectedItems.filter(item=>item.id!==action.payload.id)
        return{
            ...state,
            selectedItems:[...newSelected],
            ...sumItem(newSelected)
        }
        case 'INCREASE':
            const indexI = state.selectedItems.findIndex(item=>item.id=== action.payload.id)
            state.selectedItems[indexI].quantity++
            return{
                ...state,
                ...sumItem(state.selectedItems)
            }
            case 'DECREASE':
            const indexD = state.selectedItems.findIndex(item=>item.id=== action.payload.id)
            state.selectedItems[indexD].quantity--
            return{
                ...state,
                ...sumItem(state.selectedItems)
            }
            case 'CHECKOUT':
                return{
                    selectedItems:[],
                    itemsCounter:0,
                    total:0,
                    checkout:true
                }
                case 'CLEAR':
                    return{
                        selectedItems:[],
                        itemsCounter:0,
                        total:0,
                        checkout:false
                    }
        default:
            return state
    }
}

const CartContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(cartReducer,initialState)
    return (
       <CartContext.Provider value={{state:state,dispatch}}>
        {children}
       </CartContext.Provider>
    );
};

export default CartContextProvider;