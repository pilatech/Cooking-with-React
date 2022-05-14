import React, { useState, useContext } from 'react'
import { ThemeContext } from './App'

export default function CounterHook({initialCounter}) {
 
 const [counter, setCounter] = useState(initialCounter)
 const style = useContext(ThemeContext)

 function handleCounter(amt){
   setCounter(prev => prev + amt)
 }

 return (
   <div>
    <p>Hooks</p>
   <button style={style}  onClick={() => handleCounter(-1)}>-</button><span>{counter}</span><button style={style}  onClick={() => handleCounter(1)}>+</button>
  </div>
  )
}
