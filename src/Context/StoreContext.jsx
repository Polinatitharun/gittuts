// Context/StoreContext.js
import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
export const storeContext = createContext(null);

const StoreContextProvider = (props) => {
    const[cartitem,setCartitem]=useState({});
    const addToCart=(id)=>{
        if(!cartitem[id]){
            setCartitem((prev)=>({...prev,[id]:1}));
        }
        else{
            setCartitem((prev)=>({...prev,[id]:prev[id]+1}));
        }
    }
    const removeCartItem=(id)=>{
        setCartitem((prev)=>({...prev,[id]:prev[id]-1}));
    }
   
  const contextValue = {
    food_list,
    cartitem,
    setCartitem,
    addToCart,
    removeCartItem

  };

  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};

export default StoreContextProvider;
