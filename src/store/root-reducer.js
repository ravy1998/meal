import {combineReducers} from "@reduxjs/toolkit";
import productReducer from "./screens/product";

const rootReducer = combineReducers({
  products: productReducer
})


export default rootReducer;