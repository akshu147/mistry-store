import React, { createContext} from 'react'
export const mycontext = createContext();

const Context = ({children}) => {

  return (
    <>
    <mycontext.Provider value={{}}>
      {children}
    </mycontext.Provider>
      
    </>
  )
}

export default Context
