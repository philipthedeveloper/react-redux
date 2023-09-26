import * as ACTIONS from "./cakeActionTypes";

// Defining the action creators
export const buyCake = () => {
  return {
    type: ACTIONS.BUY_CAKE,
  };
};

export const restockCake = (quantity) => {
  return {
    type: ACTIONS.RESTOCK_CAKE,
    payload: quantity,
  };
};
