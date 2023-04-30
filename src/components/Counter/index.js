import {Component} from 'react'
import './index.css'

class Counter extends Component {
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }
  state = {count: 0}
  render() {
    const {count} = this.state
    return (
      <div class="container">
        <h1 class="heading">Counter</h1>
        <p class="Count">{count}</p>

        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
