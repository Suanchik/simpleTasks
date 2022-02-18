import { combineReducers, createStore } from "redux";
import penal from "./penal";

const redusers = combineReducers({
    penal
})

const store = createStore(redusers);

export default store;