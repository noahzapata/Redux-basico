import { createStore } from 'redux';

const initialState = {
  numToCounter: '',
  counter: 0,
};
console.log(initialState.numToCounter);

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case '@counter/increment':
      return {
        ...state,
        counter: state.counter + payload,
      };
    case '@counter/decrement':
      return {
        ...state,
        counter: state.counter - payload,
      };
    case '@counter/multiply':
      return {
        ...state,
        counter: state.counter * payload,
      };
    case '@counter/divide':
      return {
        ...state,
        counter: state.counter / payload,
      };
    case '@input/number':
      return {
        ...state,
        numToCounter: payload,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
