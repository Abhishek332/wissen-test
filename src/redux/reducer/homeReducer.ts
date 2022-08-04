import { Reducer } from "redux";
import { homeDataDispatchTypes } from "../types/actionTypes";
import { homeData } from "../types/storeType";
import { HOMEDATA_REQUEST, HOMEDATA_SUCCESS } from "../types/actionTypes";

const IntialState: homeData = {
  loading: false,
  data: null,
};

export const homeDataReducer: Reducer<homeData, homeDataDispatchTypes> = (
  state = IntialState,
  action
): homeData => {
  switch (action.type) {
    case HOMEDATA_REQUEST:
      return { loading: true, data: null };
    case HOMEDATA_SUCCESS:
      return { loading: false, data: action.payload };
    default:
      return state;
  }
};
