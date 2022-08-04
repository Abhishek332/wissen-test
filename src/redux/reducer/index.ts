import { combineReducers } from "redux";
import { userLoginReducer } from "./loginReducer";
import { homeDataReducer } from "./homeReducer";

const RootReducer = combineReducers({
  userLogin: userLoginReducer,
  homeData: homeDataReducer,
});

export default RootReducer;
