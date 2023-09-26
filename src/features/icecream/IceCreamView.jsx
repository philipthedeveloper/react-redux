import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IceCreamView = () => {
  const { numOfIceCreams } = useSelector((state) => state.iceCream);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Num of IceCreams - {numOfIceCreams}</h1>
      <button onClick={() => dispatch(ordered())}>Buy IceCream</button>
      <br />
      <br />
      <button onClick={() => dispatch(restocked(3))}>Restock IceCream</button>
    </>
  );
};

export default IceCreamView;
