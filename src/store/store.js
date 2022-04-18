import { createStore } from 'redux';
import reducer from './reducers';

let newArray = [];
for (let i = 0; i < 25; i++) {
    const rand = Math.floor(Math.random() * 100);
    newArray.push(rand);
}

let arr = [...newArray];
let steps = [];
let i, j;
let len = arr.length;
    
let isSwapped = false;
    
for(i =0; i < len; i++) {
    
    isSwapped = false;
    
    for(j = 0; j < len; j++){
        if(arr[j] > arr[j + 1]){
            let temp = arr[j]
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            isSwapped = true;
        }
        steps.push(arr);
    }
                        
    if(!isSwapped){
        break;
    }
}
        
const initialState = {
    array: newArray,
    size: 25,
    steps: steps,
    algorithm: 'BUBBLE_SORT'
}

export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
