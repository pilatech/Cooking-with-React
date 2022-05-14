import { useState, createContext } from 'react'
import Counter from './Counter'
import CounterHook from './CounterHook'

export const ThemeContext = createContext()

export default function App(){

 const [theme, setTheme] = useState('green')

 function toggleTheme(){
 setTheme(prevTheme => {
  return prevTheme === "green" ? "purple" : "green"
 })
 console.log(theme)
 }

 return (
  <ThemeContext.Provider value={{backgroundColor: theme}}>
   <Counter initialCounter={1}/>
   <CounterHook initialCounter={0}/>
   <button onClick={toggleTheme}>Toggle Theme</button>
  </ThemeContext.Provider>
 )
}