import { useState, useContext } from 'react'
import { AppContext } from './App'

export default function CounterFunc({count}){


 const [ counter, setCounter ] = useState(count)
 const styles = useContext(AppContext)


 function handleClick(amt){
  setCounter(prevCount => prevCount + amt)
 }

 return (
<div>
    <p>Counter Function</p>
    <button style={styles} onClick={() => handleClick(-1)}>-</button>
    {counter}
    <button style={styles} onClick={() => handleClick(1)}>+</button>
  </div>
 )
}
