import state from "./state";
import reducer from "./reducer";
import {createStore} from "redux";

let store =  createStore(reducer,state)
export default store;

