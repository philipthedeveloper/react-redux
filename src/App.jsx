import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
// import * as actions from "./state/actions";
import { buyCake, restockCake } from "./redux";
import CakeComponent from "./components/CakeComponent";
import HookCakeComponent from "./components/HookCakeComponent";
import IceCreamComponent from "./components/IceCreamComponent";
import ItemContainer from "./components/ItemContainer";
import UserComponent from "./components/UserComponent";
import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/icecream/IceCreamView";
import UserView from "./features/user/UserView";

function App() {
  // const tasks = useSelector((state) => state.tasks);
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  return (
    <>
      {/* <ItemContainer cake />
      <ItemContainer />
      <UserComponent /> */}
      {/* <IceCreamComponent />
      <HookCakeComponent />
      <CakeComponent /> */}
      <CakeView />
      <IceCreamView />
      <UserView />
    </>
  );
}

const TasksContainer = styled.div`
  padding: 1rem 1.2rem;
  border-radius: 0.4rem;
  border: 1px solid transparent;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const TaskText = styled.p`
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  color: ${(props) => (props.completed ? "gray" : "white")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  text-align: left;
  margin: 0;
`;
export default App;
