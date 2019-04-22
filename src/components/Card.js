import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }
  }
  inputChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  addTaskItem = (e) => {
    this.setState({
      taskItems: [...this.props.task.taskItems, this.state.input]
    })
  }
  render() {
    return (
      <div>
        <div>
          <h3>{this.props.task.taskName}</h3>
        </div>
        {this.props.task.taskItems.map((item => {
          return <li>{item}</li>
        }))}
        <div>
          <input 
            type="text" 
            placeholder="add another task"
            onChange={this.inputChange}
          />
          <button 
            onClick={this.addTaskItem}
          >
          +</button>
        </div>
      </div>
    )
  }
}
