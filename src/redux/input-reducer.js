import  {addUserInput}  from './input.utils.js'
import './input.type.js'
import inputType from './input.type.js'

const initial_State ={
    userInput : [],
}

const inputReducer =(state=initial_State, action)=>{
    switch(action.type){
        case inputType.ADD_USER: 
            return {
                ...state,
                userInput : addUserInput(state.userInput,action.payload)
            }
        default:
            return state
    }
}

export default inputReducer