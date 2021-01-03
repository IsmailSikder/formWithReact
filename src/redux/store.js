
import rootReducer from './root-reducer'
import {applyMiddleware,createStore} from 'redux'

import logger from 'redux-logger'
import inputReducer from './input-reducer'



const middleware =[logger]
const store = createStore(inputReducer, applyMiddleware(...middleware))

export default store