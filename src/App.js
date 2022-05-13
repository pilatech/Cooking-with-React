import { createContext, useState } from 'react'
import Counter from './Counter'
import CounterFunc from './CounterFunc'

export const AppContext = createContext()

export default function App(){

 const [red, setRed] = useState(false)

 function toggleRed(){
  setRed(prevRed => !prevRed)
  console.log(red)
 }

 return(
  <AppContext.Provider value={{backgroundColor: red ? 'red' : 'blue'}}>
   <Counter counter={0}/>
   <CounterFunc count={0}/>
   <button onClick={toggleRed}>Toggle Red</button>
  </AppContext.Provider>
 )
}