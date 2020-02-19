import { GET_JOKES, UPDATE_JOKES, SET_ERROR } from '../actions';

const initialState = {
    jokes: [],
    isFetchingData: false,
    error: ''
};

export const factReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOKES:
            return {
                ...state,
                isFetchingData: true,
                jokes: []
            };
        case UPDATE_JOKES:
            return {
                ...state,
                jokes: action.payload,
                isFetchingData: false
            };
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        default:
            return state;
    }
}