import * as types from './actionTypes';

export const updateData = (data) => (
    {
        type : types.UPDATE_DATA,
        data
    }
)

export const requestImage = data => (
    {
        type: types.IMAGE_REQUEST,
        data
    }
)

export const updateImage = image => (
    {
        type: types.UPDATE_IMAGE,
        image
    }
)

