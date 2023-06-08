import React, { useState } from 'react'

export const ContextAPI=React.createContext();
const CtxProvider= (props)=>{
    const [cartItem,setCartItem]=useState([]);


    const addToCartHandler=(item)=>{
        const existingItem=cartItem.find((itm)=>itm.id === item.id);
        if(existingItem)
        {
            existingItem.quantity++;
        }
        else{
            setCartItem([item,...cartItem])
        }
    }

    const removeFromHandler=(id)=>{
        const dltItem=cartItem.find((itm)=>itm.id === id)
        if(dltItem)
        {
            dltItem.quantity--;
            alert('Quantity Reduced')
        }
        else{
            const updated =cartItem.filter((itm)=>itm.id !== id)
            setCartItem(updated);
        }
    }
    const ctxData={
        items:cartItem,
         addtoCartItem:addToCartHandler,
        removeFromCart:removeFromHandler

    }
 return(
   <ContextAPI.Provider value={ctxData}>
    {props.children}
   </ContextAPI.Provider> 
 )
}
export default CtxProvider;
