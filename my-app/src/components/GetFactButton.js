import React from 'react';
import { connect } from 'react-redux';

const GetFactButton = props => {

    return (
        <>
            {props.isFetchingData ? (
                <div>Grabbing Data</div>
            ) : (
                    <button onClick={handleGetData}>Meow</button>
                )}
        </>
    )
};

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    };
};

export default connect(mapStateToProps, { getFacts })(GetFactButton);