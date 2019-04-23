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
  handleButtonClick = () => {
    if (this.state.input !== '') {
      this.props.addTaskItem(this.state.input, this.props.id);
    }
    
  }
  handleDeleteClick = (item) => {
    this.props.removeTaskItem(item, this.props.id)
  }
  handleNextClick = (item) => {
    this.props.moveNext(item, this.props.id);
  }
  handleBackClick = (item) => {
    this.props.moveBack(item, this.props.id);
  }
  render() {
    const length = this.props.task.taskItems.length; 
    return (
      <div>
        <div>
          <h3>{this.props.task.taskName}</h3>
        </div>
        {this.props.task.taskItems.map((item, i) => {
          return <li key={i}>
          {this.props.id > 1  ? <button onClick={() => this.handleBackClick(item)}>
          back
          </button> : null}
            {item}
            {this.props.id < 3 ? <button onClick={() => this.handleNextClick(item)}>
            forward
            </button> : null}
            <button onClick={() => this.handleDeleteClick(item)}>
              delete
            </button>
          </li>
        })}
        <div>
          <input 
            type="text" 
            placeholder="add another task"
            onChange={this.inputChange}
          />
          <button 
            onClick={this.handleButtonClick}
          >
          +</button>
        </div>
      </div>
    )
  }
}
