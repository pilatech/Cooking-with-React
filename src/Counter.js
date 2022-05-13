import { Component } from 'react'
import { AppContext } from './App'

export default class Counter extends Component {

 constructor(props){
  super(props)
  this.state = { counter: this.props.counter }
 }
 render(){
  return(
   <AppContext.Consumer>
     {(styles) => (
        <div>
        <p>Counter Class</p>
        <button style={styles} onClick={() => this.handleClick(-1)}>-</button>
        {this.state.counter}
        <button style={styles} onClick={() => this.handleClick(1)}>+</button>
      </div>
     )
     }
   </AppContext.Consumer>
  )
 }

 handleClick(amt){
  this.setState(prevState => ({ counter: prevState.counter + amt}))
 }
}