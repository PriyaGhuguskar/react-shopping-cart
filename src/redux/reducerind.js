import { combineReducers } from "redux";
import { productsReducer } from "./Reducer";

const reducer = combineReducers({
    allproducts:productsReducer,
})
export default reducer