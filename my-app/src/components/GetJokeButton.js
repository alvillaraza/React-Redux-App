import React from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../actions';

const GetFactButton = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getFacts();
    };

    return (
        <>
            {props.isFetchingData ? (
                <div>Grabbing Data</div>
            ) : (
                    <button onClick={handleGetData}>Make Me Laugh</button>
                )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(mapStateToProps, { getFacts: getJokes })(GetFactButton);