import React from "react";
import { connect } from "react-redux";
import { getJokes } from "../actions";

const GetFactButton = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.getFacts();
  };

  return (
    <>
      {props.isFetchingData ? (
        <div>Wait For It...</div>
      ) : (
        <button className='button' onClick={handleGetData}>Oh...Hey, pun doggo!</button>
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
