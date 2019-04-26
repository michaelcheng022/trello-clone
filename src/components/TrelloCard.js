import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

const TrelloCard = ({ text }) => {
  return (
    <div>
      <Card style={styles.cardContainer}>
        <CardContent>
          <Typography gutterBottom>
            {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

const styles = {
  cardContainer: {
    marginBottom: 8
  }
};

export default TrelloCard;