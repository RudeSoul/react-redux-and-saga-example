import * as types from './actionTypes';

export const scoreAdd = (addScoreBy = 1) => {
    return ({
        type : types.SCORE_ADD,
        addScoreBy
    })
}

export const scoreSub = (subScoreBy = 1) => {
    return ({
        type : types.SCORE_SUB,
        subScoreBy
    })
}