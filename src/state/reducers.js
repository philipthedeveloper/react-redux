import * as ACTIONS from "./actionTypes";
import { produce } from "immer";
import { combineReducers } from "redux";

let lastId = 0;

const taskReducer = (tasks = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return produce(tasks, (tasksCopy) => {
        let newTask = {
          id: ++lastId,
          description: action.payload.description,
          completed: false,
        };
        return [...tasksCopy, newTask];
      });
    case ACTIONS.REMOVE_TASK:
      return produce(tasks, (tasksCopy) => {
        return tasksCopy.filter((task) => task.id !== action.payload.id);
      });
    case ACTIONS.COMPLETE_TASK:
      return produce(tasks, (tasksCopy) => {
        let updatedTasks = tasksCopy.map((task) => {
          if (task.id === action.payload.id)
            return { ...task, completed: true };
          return task;
        });
        return updatedTasks;
      });
    default:
      return tasks;
  }
};

const userReducer = (
  user = { isLoggedIn: false, playlists: [], accountType: "Regular" },
  action
) => {
  switch (action.type) {
    case ACTIONS.UPDATE_ACCOUNT_TYPE:
      return produce(user, (userCopy) => {
        userCopy.accountType = action.payload.accountType;
        return userCopy;
      });
    case ACTIONS.UPDATE_ACTIVE_STATUS:
      return produce(user, (userCopy) => {
        userCopy.isLoggedIn = !userCopy.isLoggedIn;
        return userCopy;
      });
    case ACTIONS.UPDATE_PLAYLIST:
      return produce(user, (userCopy) => {
        let newSong = { id: userCopy.playlists.length, ...action.payload };
        return { ...userCopy, playlists: [...userCopy.playlists, newSong] };
      });
    default:
      return user;
  }
};
const reducer = combineReducers({ tasks: taskReducer, user: userReducer });
export default reducer;
