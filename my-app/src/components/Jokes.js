import React from 'react';
import { connect } from 'react-redux';

const Jokes = props => {
    console.log(props);
    return (
        <>
            {props.error === false ? 
                <div>{props.error}</div> : <div>{props.jokes.setup}<p>{props.jokes.delivery}</p></div>                }
        </>
    )
};

const mapStateToProps = state => {
    return {
        jokes: state.jokes,
        error: state.error
    };
};

export default connect(mapStateToProps, {})(Jokes);