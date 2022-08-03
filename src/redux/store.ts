import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import RootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
