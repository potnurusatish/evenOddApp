/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0, text: 'Even'}

  onIncrement = () => {
    const value = Math.ceil(Math.random() * 101)
    this.setState(prevState => ({
      number: prevState.number + value,
      text: (prevState.number + value) % 2 === 0 ? 'Even' : 'Odd',
    }))
  }

  render() {
    const {number, text} = this.state
    return (
      <div>
        <h1>Count {number}</h1>
        <p>Count is {text}</p>
        <button type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
