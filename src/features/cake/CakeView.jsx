import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const { numOfCakes } = useSelector((state) => state.cake);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Num of cakes - {numOfCakes}</h1>
      <button onClick={() => dispatch(ordered())}>Buy Cake</button>
      <br />
      <br />
      <button onClick={() => dispatch(restocked(2))}>Restock cakes</button>
    </>
  );
};

export default CakeView;
