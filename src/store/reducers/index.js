import { combineReducers } from "redux";
import getPatientsReducer from "./getPatientsReducer";

const rootReducer = combineReducers({
   data:getPatientsReducer,
});

export default rootReducer;
