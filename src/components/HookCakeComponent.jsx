import React from "react";
import { buyCake, restockCake } from "../redux";
import { useDispatch, useSelector } from "react-redux";

function HookCakeComponent() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  const restocker = () => {
    const quantity = Math.floor(Math.random() * 10 + 1);
    dispatch(restockCake(quantity));
  };

  return (
    <>
      <h1>Num of cakes - {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      <br />
      <br />
      <button onClick={restocker}>Restock cakes</button>
    </>
  );
}

export default HookCakeComponent;
