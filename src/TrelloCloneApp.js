import React, { Component } from 'react';
import TrelloList from './components/TrelloList';
import TrelloActionButton from './components/TrelloActionButton'
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

class TrelloCloneApp extends Component {
  onDragEnd = () => {
    // TODO: reordering logic
  }
  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={}>
        <div className="App">
          <h2>Hello Trello</h2>
          <div style={styles.listsContainer}>
            { lists.map(list => 
              <TrelloList 
                listID={list.id}
                key={list.id}
                title={list.title} 
                cards={list.cards}
              />
            )}
            <TrelloActionButton list />
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: 8
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists
})

export default connect(mapStateToProps)(TrelloCloneApp);
