import { createContext,useState } from 'react';
export const langContext=createContext();
export function LangProvider({children}){
  const[select,setSelect]=useState("PT");
  function alterLang(language){
    setSelect(language);
  }
  return(
    <langContext.Provider value={{select,alterLang}} >{children}</langContext.Provider>
  )
  
}