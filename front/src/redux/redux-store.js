import { combineReducers, createStore } from 'redux'
import registrationReducer from './registration-reducer'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    registration: registrationReducer,
    form: formReducer
})

let store = createStore(reducers)

export default store