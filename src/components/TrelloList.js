import React from 'react'
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Droppable } from 'react-beautiful-dnd'

const TrelloList = ({ title , cards, listID }) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map((card) => 
        <TrelloCard key={card.id} text={card.text} />
      )}
      <TrelloActionButton listID={listID} />
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: "#ccc",
    borderRadius: 3,
    marginRight: 8,
    padding: 8,
    height: "100%",
    width: 300
  }
}
export default TrelloList;
