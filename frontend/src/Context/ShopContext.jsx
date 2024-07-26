import React, {createContext, useState} from "react";
import all_knifes from '../Components/Assets/all_knifes'

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_knifes.length+1; index++)
    {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider =(props)=>{

    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removeFromCart = (id) => {
        setCartItems((prevItems) => { 
           const updatedItems ={ ...prevItems}
           if(updatedItems[id] > 1){
            updatedItems[id] -= 1
           } else{
            delete updatedItems[id]
           }
           return updatedItems
        })
    }
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                let itemInfo = all_knifes.find((product)=> product.id===Number(item))
                totalAmount += itemInfo.knife_price * cartItems[item];
            }
            return totalAmount;
        }
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartItems, getTotalCartAmount, all_knifes,cartItems,addToCart,removeFromCart}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;