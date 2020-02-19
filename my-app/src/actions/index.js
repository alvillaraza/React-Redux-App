import axios from 'axios';

export const getData = () => dispatch => {
    dispatch({ type: GET_FACTS });
    axios.get('https://cat-fact.herokuapp.com/facts')
        .then(res => {
            console.log(res);
            dispatch({ type: UPDATE_FACTS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: SET_ERROR, payload: 'error' });
        });
        
}