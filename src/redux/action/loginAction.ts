import { Dispatch } from "redux";
import { axios } from "../../api/axios";
import { userLoginDispatchTypes } from "../types/actionTypes";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from "../types/actionTypes";

export const userLogin =
  (obj: { email: string; password: string }) =>
  async (dispatch: Dispatch<userLoginDispatchTypes>) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const response = await axios.post("/login/", obj);
      switch (response.status) {
        case 200: {
          localStorage.setItem("userInfo", JSON.stringify(response.data));
          dispatch({ type: LOGIN_SUCCESS, payload: response.data });
        }
      }
    } catch (error: any) {
      const message = error.response.data.error;
      dispatch({ type: LOGIN_FAIL, payload: message });
    }
  };
