import * as ActionTypes from "../constants/ActionTypes";

const defaultState = {
  librariesInfo: [],
};

export default (state = defaultState, action) => {
  const { type, librariesInfo } = action;

  switch (type) {
    case ActionTypes.SET_LIBRARIES_INFO:
      return {
        librariesInfo,
      };

    default:
      return state;
  }
};
