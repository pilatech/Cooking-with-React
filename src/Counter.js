import { Component } from 'react'
import { ThemeContext } from './App'


export default class Counter extends Component {

 constructor(props){
  super(props)
  this.state = {
   counter: this.props.initialCounter
  }
 }

 render(){
  return(
   <ThemeContext>
    {
       (style) => (
        <div>
          <p>Class</p>
          <button style={style} onClick={() => this.handleCounter(-1)}>-</button><span>{this.state.counter}</span><button style={style}  onClick={() => this.handleCounter(1)}>+</button>b
        </div>
       )
    }
   </ThemeContext>
  )
 }

 handleCounter(amount){
  this.setState( prev => ({ counter: prev.counter + amount }))
 }

}