import * as ActionTypes from "../constants/ActionTypes";

function getData() {
  return fetch(
    "opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json"
  ).then((response) => response.json());
}

const getLibrariesInfo = async (dispatch) => {
  try {
    const response = await getData();

    const librariesInfo = response;

    dispatch({
      librariesInfo,
      type: ActionTypes.SET_LIBRARIES_INFO,
    });
  } catch (message) {
    throw message;
  }
};

export default getLibrariesInfo;
