import * as ACTIONS from "./iceCreamActionTypes";

export const buyIceCream = () => ({ type: ACTIONS.BUY_ICE_CREAM });

export const restockIceCream = (quantity) => ({
  type: ACTIONS.RESTOCK_ICE_CREAM,
  payload: quantity,
});
