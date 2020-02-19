import React, { useState } from 'react';
import { connect } from 'react-redux';

const Jokes = props => {
    const [delivery, setDelivery] = useState(false);
    // console.log(props);
    return (
        <>
                
            {props.error === false ? 
                <div>{props.error}</div> : <>
                    <div className='half setup'>
                    {props.jokes.setup}
                    
                    {props.jokes.setup ? <p><button className='button' onClick={() => { setDelivery(!delivery) }}>huh?</button></p> : ''}

                </div>
                    <div className={`${delivery ? 'delivery-show' : ''} half delivery`}>{props.jokes.delivery}</div></>}
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