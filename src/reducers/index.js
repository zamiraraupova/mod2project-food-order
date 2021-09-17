import { addToCartReducer } from "./reducer1"
import { removeFromCartReducer } from './reducer2'
import { combineReducers } from "redux"

const reducer = combineReducers({addToCartReducer, removeFromCartReducer})


export default reducer