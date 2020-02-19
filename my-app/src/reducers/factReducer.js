import { GET_FACTS, UPDATE_FACTS, SET_ERROR } from '../actions';

const initialState = {
    facts: [],
    isFetchingData: false,
    error: ''
};

export const factReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FACTS:
            return {
                ...state,
                isFetchingData: true,
                facts: []
            };
        case UPDATE_FACTS:
            return {
                ...state,
                facts: action.payload,
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