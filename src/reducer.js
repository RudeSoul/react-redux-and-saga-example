import * as types from './actionTypes';

const defaultState = {
    score: 1
}

export const myReducer = (state = defaultState, action) => {
    console.log({state, action})
    switch(action.type) {
        case types.SCORE_ADD: {
            const {addScoreBy} = action;
            
            const currentScore = state.score;
            return {...state, score: currentScore + addScoreBy}
        }
        case types.SCORE_SUB: {
            const {subScoreBy} = action;
            
            const currentScore = state.score;
            return {...state, score: currentScore - subScoreBy}
        }
        default:
            return state;
    }
}