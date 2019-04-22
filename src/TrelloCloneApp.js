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
  addTaskItem = (item) => {
    this.setState({
      taskItems: [...this.props.tasks.taskItems, item]
    })
  }
  render() {
    return (
      <div>
        <Header />
        {this.state.tasks.map(task => {
          return <Card 
            task={task} 
            addTaskItem={this.addTaskItem}
            id={task.id}
          />
        })}
      </div>
    );
  }
}

export default TrelloCloneApp;
