import React from "react";
import { connect } from "react-redux";
import { buyCake, restockCake } from "../redux";

function CakeComponent(props) {
  const restocker = () => {
    const quantity = Math.floor(Math.random() * 10 + 1);
    props.restockCake(quantity);
  };

  return (
    <>
      <h1>Num of cakes - {props.numOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Cake</button>
      <br />
      <br />
      <button onClick={restocker}>Restock cakes</button>
    </>
  );
}

const matchStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const matchDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    restockCake: (quantity) => dispatch(restockCake(quantity)),
  };
};

export default connect(matchStateToProps, matchDispatchToProps)(CakeComponent);
