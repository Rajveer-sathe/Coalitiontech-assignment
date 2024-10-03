import axios from "axios";
import {
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
} from "../store/action/action";

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());

    const url = "https://fedskillstest.coalitiontechnologies.workers.dev";
    const username = "coalition";
    const password = "skills-test";

    try {
      const response = await axios.get(url, {
        auth: {
          username: username,
          password: password,
        },
      });
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};
