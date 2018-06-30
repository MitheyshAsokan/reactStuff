import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer'

//This entity holds onto your ever updating state 
//The state is linked to various reducers
//The combineReducers methods binds various reducers together
export default combineReducers({
    auth: AuthReducer 
});