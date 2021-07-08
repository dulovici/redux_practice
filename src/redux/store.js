import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
import rootReducer from "./rootReducer";



export const store = createStore(rootReducer)
