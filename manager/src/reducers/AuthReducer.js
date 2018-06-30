import { EMAIL_CHANGED } from "../actions/types";

//This a basic reducer, that always has an action and a state
//Usually is a switch statement.

const INITIAL_STATE = {
    email: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case EMAIL_CHANGED:
        
        default:
            return state;
    }
}