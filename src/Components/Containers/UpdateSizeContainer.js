import React from 'react';
import { connect } from 'react-redux';
import { actionUpdateSize } from '../../store/actions';

const updateSize = props => {
    return (
        <>
            <button onClick={() => props.handleClick(25)}>25</button>
            <button onClick={() => props.handleClick(50)}>50</button>
            <button onClick={() => props.handleClick(75)}>75</button>
        </>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (size) => {
            dispatch(actionUpdateSize(size));
        }
    }
}

export default connect(null, mapDispatchToProps)(updateSize);