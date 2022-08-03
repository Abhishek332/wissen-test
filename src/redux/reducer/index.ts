import { combineReducers } from "redux";
import { userLoginReducer } from "./loginReducer";

const RootReducer = combineReducers({
  userLogin: userLoginReducer,
});

export default RootReducer;
