import { combineReducers } from "redux";
import ConatctListReducer from "./components/ContactListSlice";

const rootReducer = combineReducers({
  contacts: ConatctListReducer,
});

export default rootReducer;
