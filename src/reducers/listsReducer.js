const initialState = [
  {
    title: "Backlog",
    id: 0,
    cards: [
      {
        id: 0,
        text: "card 1"
      },
      {
        id: 1,
        text: "card 2"
      }
    ]
  },
  {
    title: "Doing",
    id: 1,
    cards: [
      {
        id: 0,
        text: "card 1"
      },
      {
        id: 1,
        text: "card 2"
      }
    ]
  },
  {
    title: "Done",
    id: 2,
    cards: [
      {
        id: 0,
        text: "card 1"
      },
      {
        id: 1,
        text: "card 2"
      },
      {
        id: 2,
        text: "card 3"
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch(action.type) {
    default: 
    return state;
  }
};

export default listsReducer;