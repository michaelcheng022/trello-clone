import { ACTIONS } from "../actions";

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
let listID = 2;
let cardID = 2;

const listsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTIONS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID
      }
      listID += 1;
      return [...state, newList];
    case ACTIONS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardID
      };
      cardID += 1;
      
      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        } else {
          return list;
        }
      });

      return newState;
    default: 
      return state;
  }
};

export default listsReducer;