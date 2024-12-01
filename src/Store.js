import StudentReducer from "./redux/reducer/StudentReducer";
import cartReducer from "./redux/reducer/CartReducer";
import {combineReducers,legacy_createStore} from "redux";
const reducers=combineReducers({
    cart:cartReducer,
    student:StudentReducer
})

const store=legacy_createStore(reducers)
export default store