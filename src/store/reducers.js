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
        switch(action.payload.algorithm) {
            case 'QUICK_SORT':
                return state;
            case 'MERGE_SORT':
                return state;
            case 'BUBBLE_SORT':
                let arr = [...state.array];
                let steps = [];
                let i, j;
                let len = arr.length;
                    
                let isSwapped = false;
                    
                for(i =0; i < len; i++){
                    
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
                    
                return {
                    ...state,
                    array: arr
                }
            default:
                return state;
        }
    } else {
        return state;
    }
}

export default reducer;