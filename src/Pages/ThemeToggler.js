import React,{useContext} from 'react'
import { ThemeContext } from './ThemeContext'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ThemeToggler() {
    const {toggleTheme}=useContext(ThemeContext)
    
  return (
    <div>
      <button onClick={toggleTheme} className='btn btn-success'>Change theme</button>
    </div>
  )
}
