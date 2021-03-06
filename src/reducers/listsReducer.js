import { ACTIONS } from "../actions";

const initialState = [
  {
    title: "Backlog",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "card 1"
      },
      {
        id: `card-${1}`,
        text: "card 2"
      }
    ]
  },
  {
    title: "Doing",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "card 1"
      },
      {
        id: `card-${3}`,
        text: "card 2"
      }
    ]
  },
  {
    title: "Done",
    id: `list-${2}`,
    cards: [
      {
        id: `card-${4}`,
        text: "card 1"
      },
      {
        id: `card-${5}`,
        text: "card 2"
      },
      {
        id: `card-${6}`,
        text: "card 3"
      }
    ]
  }
]
let listID = 3;
let cardID = 7;

const listsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTIONS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`
      }
      listID += 1;
      return [...state, newList];
    case ACTIONS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`
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
    }
    case ACTIONS.DRAG_HAPPENED: {
      const { 
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type 
      } = action.payload;
      const newState = [...state]
      // dragging lists around 
      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
        
      }

      // in different list
      else if (droppableIdStart !== droppableIdEnd) {
        // find list where drag happened
        const listStart = state.find(list => droppableIdStart === list.id);
        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        // find the list where the drag ends
        const listEnd = state.find(list => droppableIdEnd === list.id);
        // put card in new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return newState;
    }
    default: 
      return state;
  }
};

export default listsReducer;