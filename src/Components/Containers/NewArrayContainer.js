import React from 'react';
import { connect } from 'react-redux';
import { actionGenerateNewArray } from '../../store/actions';

const generateNewArray = props => (
    <button onClick={props.handleClick} >Generate New Array</button>
);

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {
            dispatch(actionGenerateNewArray());
        }
    }
}

export default connect(null, mapDispatchToProps)(generateNewArray);