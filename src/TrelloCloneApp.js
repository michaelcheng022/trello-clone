import React, { Component } from 'react';
import TrelloList from './components/TrelloList';
import TrelloActionButton from './components/TrelloActionButton'
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from './actions';
import styled from 'styled-components';

const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 8;
`;


class TrelloCloneApp extends Component {
  onDragEnd = (result) => {
    // TODO: reordering logic
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    ))
  }
  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h2>Hello Trello</h2>
          <ListContainer>
            { lists.map(list => 
              <TrelloList 
                listID={list.id}
                key={list.id}
                title={list.title} 
                cards={list.cards}
              />
            )}
            <TrelloActionButton list />
          </ListContainer>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists
})

export default connect(mapStateToProps)(TrelloCloneApp);
