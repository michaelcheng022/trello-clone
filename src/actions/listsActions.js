import { ACTIONS } from '../actions';

export const addList = (title) => {
  return {
    type: ACTIONS.ADD_LIST,
    payload: title
  };
};