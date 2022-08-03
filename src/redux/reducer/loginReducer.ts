import { Reducer } from "redux";
import { userLoginDispatchTypes } from "../types/actionTypes";
import { userLogin } from "../types/storeType";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_NULL,
} from "../types/actionTypes";

const IntialState: userLogin = {
  loading: false,
  userInfo: null,
  error: null,
};

export const userLoginReducer: Reducer<userLogin, userLoginDispatchTypes> = (
  state = IntialState,
  action
): userLogin => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true, userInfo: null, error: null };
    case LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload, error: null };
    case LOGIN_FAIL:
      return { loading: false, userInfo: null, error: action.payload };
    case LOGIN_NULL:
      return IntialState;
    default:
      return state;
  }
};
