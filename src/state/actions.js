import * as ACTIONS from "./actionTypes";

export const addTask = (description) => {
  return {
    type: ACTIONS.ADD_TASK,
    payload: {
      description,
    },
  };
};

export const removeTask = (id) => {
  return {
    type: ACTIONS.REMOVE_TASK,
    payload: {
      id,
    },
  };
};

export const completeTask = (id) => {
  return {
    type: ACTIONS.COMPLETE_TASK,
    payload: {
      id,
    },
  };
};

export const updateAccountType = (accountType) => {
  return {
    type: ACTIONS.UPDATE_ACCOUNT_TYPE,
    payload: {
      accountType,
    },
  };
};

export const updateActiveStatus = () => {
  return {
    type: ACTIONS.UPDATE_ACTIVE_STATUS,
    payload: {},
  };
};

export const updatePlaylist = ({ title, author }) => {
  return {
    type: ACTIONS.UPDATE_PLAYLIST,
    payload: {
      title,
      author,
    },
  };
};
