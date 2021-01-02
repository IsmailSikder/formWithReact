import './input.type.js'
import inputType from './input.type.js'

const initial_State ={
    userinput : [],
}

export const InputReducer =(state=initial_State, action)=>{
    switch(inputType.ADD_USER){
        case 'ADD_USER':
            return {
                ...state,
                userInput : [...state.userInput, action.payload]
            }
    }
}