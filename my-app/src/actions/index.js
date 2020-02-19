import axios from 'axios';

export const GET_JOKES = 'GET_JOKES';
export const UPDATE_JOKES = 'UPDATE_JOKES';
export const SET_ERROR = 'SET_ERROR';

export const getJokes = () => dispatch => {
    dispatch({ type: GET_JOKES });
    axios.get('https://sv443.net/jokeapi/category/miscellaneous')
        .then(res => {
            console.log('res', res);
            dispatch({ type: UPDATE_JOKES, payload: res.data });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: SET_ERROR, payload: 'error' });
        });
        
}