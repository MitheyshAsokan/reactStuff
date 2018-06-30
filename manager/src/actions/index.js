import { EMAIL_CHANGED } from "./types";

//Just a basic const function that holds onto various action creators
//Each action creator returns a type, so the reducer can identify it
//and a payload so the reducers can use it to update the state.

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};