import React, { useState, useContext, createContext } from "react";

const Context = createContext(null)

const ContextProvider = ({value, children}) => {
  const [currentValue,setCurrentValue] = useState(value);

  return (
    <Context.Provider
        value={{currentValue,setCurrentValue}} >
      {children}
    </Context.Provider>
   )
}
export default ContextProvider
export const useValue = () => useContext(Context)
