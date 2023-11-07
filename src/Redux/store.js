import { createStore,applyMiddleware } from "redux";
import loremReducer from "./Reducer/loremReducer";
import thunk from "redux-thunk";

const store = createStore(loremReducer,applyMiddleware(thunk));

export default store;
