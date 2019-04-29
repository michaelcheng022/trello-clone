import { ACTIONS } from "../actions";

export const addCard = (listID, text) => {
  return { 
      type: ACTIONS.ADD_CARD,
      payload: { text, listID }
  }
}
