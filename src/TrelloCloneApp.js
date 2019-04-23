import React, { Component } from 'react';
import Card from './components/Card';
import Header from './components/Header';

class TrelloCloneApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      tasks: [{
        taskName: 'Test',
        id: 1,
        taskItems: ['item1', 'item2', 'item3']
      },
      {
        taskName: 'Test2',
        id: 2,
        taskItems: ['item1', 'item2', 'item3']
      },
      {
        taskName: 'Test3',
        id: 3,
        taskItems: ['item1', 'item2', 'item3']
      }]
    }
  }
  
  addTaskItem = (item, id) => {
    const index = this.state.tasks.findIndex(task => task.id === id);
    console.log(index);
    console.table(this.state.tasks[index])
    this.setState(prevState => {
      //copy states task array
      const tasks = [...prevState.tasks] 
      //update copy array at index
      tasks[index] = {...tasks[index], taskItems: [...tasks[index].taskItems, item]} 
      return { tasks }
    })
  }
  removeTaskItem = (item, id) => {
    const index = this.state.tasks.findIndex(task => task.id === id);
    this.setState(prevState => {
      const tasks = [...prevState.tasks]
      tasks[index] = {
        ...tasks[index], 
        taskItems: tasks[index].taskItems.filter(taskItem => taskItem !== item)
      }
      return { tasks }
    })
  }
  moveNext = (item, id) => {
    const index = this.state.tasks.findIndex(task => task.id === id);
    if(index < this.state.tasks.length - 1) {
      this.addTaskItem(item, id + 1);
      this.removeTaskItem(item, id);
    }
  }
  moveBack = (item, id) => {
    const index = this.state.tasks.findIndex(task => task.id === id);
    if(index > 0) {
      this.addTaskItem(item, id - 1);
      this.removeTaskItem(item, id);
    }
  }
  render() {
    return (
      <div>
        <Header />
        {this.state.tasks.map(task => {
          return <Card 
            task={task} 
            addTaskItem={this.addTaskItem}
            removeTaskItem={this.removeTaskItem}
            moveNext={this.moveNext}
            moveBack={this.moveBack}
            id={task.id}
          />
        })}
      </div>
    );
  }
}

export default TrelloCloneApp;
