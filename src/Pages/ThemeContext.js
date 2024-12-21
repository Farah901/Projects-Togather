import React, {createContext, useState} from 'react'
import './theme.css'


export const ThemeContext=createContext();
export default function ThemeProvider({children}) {
    let [theme, setTheme]=useState('light')
    let toggleTheme=()=>{
      setTheme((prev)=>(prev==='light'?'dark':'light'))
    }
  return (
    <div className={theme==='light'?'light':'dark'}>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}
