import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer({ item, buyItem }) {
  return (
    <>
      <h1>ItemContainer - {item}</h1>
      <button onClick={buyItem}>Buy Item</button>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    item: ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buyItem: ownProps.cake
      ? () => dispatch(buyCake())
      : () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
