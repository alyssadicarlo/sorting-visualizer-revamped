export const SORT = 'sort';
export const UPDATE_SIZE = 'update_size';
export const GENERATE_NEW_ARRAY = 'generate_new_array';

export function actionSort(algorithm) {
    return {
        type: SORT,
        payload: {
            algorithm: algorithm
        }
    }
}

export function actionUpdateSize(size) {
    return {
        type: UPDATE_SIZE,
        payload: {
            size: size
        }
    }
}

export function actionGenerateNewArray() {
    return {
        type: GENERATE_NEW_ARRAY
    }
}