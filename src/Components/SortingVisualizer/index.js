import { connect } from 'react-redux';

import NewArrayContainer from '../Containers/NewArrayContainer';
import UpdateSizeContainer from '../Containers/UpdateSizeContainer';
import Column from '../Column/Column';
import SortContainer from '../Containers/SortContainer';

function SortingVisualizer(props) {

    return (
        <>
            <h1>Sorting Algorithm Visualizer</h1>
            <NewArrayContainer />
            <UpdateSizeContainer />
            <SortContainer />
            <div className='column-container'>
                {props.array.map(element => <Column height={element} />)}
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        array: state.array
    }
}

export default connect(mapStateToProps)(SortingVisualizer);