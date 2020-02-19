import React from 'react';
import { connect } from 'react-redux';

const Facts = props => {
    return (
        <>
            {props.error ? (
                <div>{props.error}</div>) : (props.facts.map(fact => <div>{fact.text}</div>)
                )}
        </>
    )
};

const mapStatetoProps = state => {
    return {
        facts: state.facts,
        error: state.error
    };
};

export default connect(mapStatetoProps, {})(Facts);