import { combineReducers } from "redux"
import  inputReducer from "./input-reducer"

const rootReducer =()=>combineReducers({
    userInput: inputReducer
})

export default rootReducer