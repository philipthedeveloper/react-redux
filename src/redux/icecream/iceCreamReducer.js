import * as ACTIONS from "./iceCreamActionTypes";

const initialState = {
  numOfIceCreams: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.BUY_ICE_CREAM:
      return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
    case ACTIONS.RESTOCK_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
