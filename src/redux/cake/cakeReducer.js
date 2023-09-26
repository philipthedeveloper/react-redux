import * as ACTIONS from "./cakeActionTypes";

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    case ACTIONS.RESTOCK_CAKE:
      return { ...state, numOfCakes: state.numOfCakes + action.payload };
    default:
      return state;
  }
};

export default cakeReducer;
