import { SORT, UPDATE_SIZE, GENERATE_NEW_ARRAY } from './actions';

const reducer = (state, action) => {
    if (action.type === GENERATE_NEW_ARRAY) {
        let newArray = [];
        for (let i = 0; i < state.size; i++) {
            const rand = Math.floor(Math.random() * 100);
            newArray.push(rand);
        }
        console.log(newArray);
        return {
            ...state,
            array: newArray
        }
    } else if (action.type === UPDATE_SIZE) {
        let newArray = [];
        for (let i = 0; i < action.payload.size; i++) {
            const rand = Math.floor(Math.random() * 100);
            newArray.push(rand);
        }
        console.log(newArray);
        return {
            ...state,
            array: newArray,
            size: action.payload.size
        }
    } else if (action.type === SORT) {
        if (action.payload.algorithm === 'QUICK_SORT') {
            return state;
        } else if (action.payload.algorithm === 'MERGE_SORT') {
            let arr = [...state.array];
            let sortedArray = mergeSort(arr);
            return {
                ...state,
                array: sortedArray
            }
        } else if (action.payload.algorithm === 'BUBBLE_SORT') {
            let array = [...state.array];
            let steps = [];
            let colorSteps = [];
            let len = array.length;
            let colors = new Array(len).fill("#A5E5D9");
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len - i - 1; j++) {
                    if (array[j] > array[j + 1]) {
                        let temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp
                    }
                    colors[j] = "gray";
                    colors[j + 1] = "gray";
                    steps.push([...array]);
                    colorSteps.push([...colors]);
                    colors[j] = "#A5E5D9";
                    colors[j + 1] = "#A5E5D9";
                }
                colors[len - i - 1] = "green";
            }
            colorSteps[colorSteps.length - 1] = new Array(len).fill("green");
            
            console.log(steps)
            console.log(colorSteps)

            return {
                ...state,
                array: array
            }
        } else {
            return state;
        }
    } else {
        return state;
    }
}

const merge = (left, right) => {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    return [...arr, ...left, ...right]
}

const mergeSort = (array) => {
    const half = array.length / 2

    if (array.length < 2) {
        return array
    }

    const left = array.splice(0, half)
    return merge(mergeSort(left), mergeSort(array))
}

export default reducer;