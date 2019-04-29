import React from 'react'
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Draggable, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: #ccc;
  border-radius: 3px;
  margin-right: 8px;
  padding: 8px;
  height: 100%;
  width: 300px;
`;

const TrelloList = ({ title , cards, listID, index }) => {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <ListContainer 
          {...provided.draggableProps} 
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listID)}>
            {provided => (
              <div {...provided.droppablePropsstyle} ref={provided.innerRef}>
                <h4>{title}</h4>
                {cards.map((card, index) => 
                  <TrelloCard 
                    id={card.id} 
                    index={index} 
                    key={card.id} 
                    text={card.text} 
                  />
                )}
                {provided.placeholder}
                <TrelloActionButton listID={listID} />
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
      
    </Draggable>
    
  )
}

export default TrelloList;
