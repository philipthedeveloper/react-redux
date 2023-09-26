import React from "react";
import { connect } from "react-redux";
import { buyIceCream, restockIceCream } from "../redux";

function IceCreamComponent({ numOfIceCreams, buyIceCream, restockIceCream }) {
  return (
    <>
      <h1>Num of IceCreams - {numOfIceCreams}</h1>
      <button onClick={buyIceCream}>Buy IceCream</button>
      <br />
      <br />
      <button onClick={() => restockIceCream(5)}>Restock IceCream</button>
    </>
  );
}

const matchStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const matchDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
    restockIceCream: (quantity) => dispatch(restockIceCream(quantity)),
  };
};
export default connect(
  matchStateToProps,
  matchDispatchToProps
)(IceCreamComponent);
