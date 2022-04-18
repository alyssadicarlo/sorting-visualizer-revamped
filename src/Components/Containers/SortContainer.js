import React from 'react';
import { connect } from 'react-redux';
import { actionSort } from '../../store/actions';

const Sort = props => {
    return (
        <>
            <button onClick={() => props.handleClick('BUBBLE_SORT')} >Bubble Sort</button>
            <button onClick={() => props.handleClick('MERGE_SORT')} >Merge Sort</button>
            <button onClick={() => props.handleClick('QUICK_SORT')} >Quick Sort</button>
        </>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick: (algo) => {
            dispatch(actionSort(algo));
        }
    }
}

export default connect(null, mapDispatchToProps)(Sort);