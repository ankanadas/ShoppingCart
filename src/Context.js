import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const Context = ({children}) => {
  const [cart, setCart] = useState([]);
  console.log(children)
  return (
    <CartContext.Provider 
        value={{cart, setCart}}
    >
        {children}
    </CartContext.Provider>
  )
}

export default Context
