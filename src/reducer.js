import * as types from './actionTypes';

const defaultState = {
    data: 1,
    image: 'https://bodiez.com/wp-content/uploads/2015/09/medium-default-avatar.png'
}

export const myReducer = (state = defaultState, action) => {
    switch(action.type) {
        case types.UPDATE_DATA: {
            const {data} = action;
            
            return {...state, data}
        }
        case types.UPDATE_IMAGE: {
            const {image} = action;
            return {...state, image}
        }
        default:
            return state;
    }
}