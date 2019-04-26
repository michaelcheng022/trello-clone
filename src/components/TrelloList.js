import React from 'react'
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';

const TrelloList = ({ title , cards}) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      {cards.map((card) => 
        <TrelloCard key={card.id} text={card.text} />
      )}
      <TrelloActionButton />
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
