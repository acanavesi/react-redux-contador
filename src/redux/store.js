import { createStore } from "redux";
import { reducers } from "./reducers";

const initialState = {
  contador: 0,
};

 const store = createStore(
    reducers,
    initialState
);




export default store

