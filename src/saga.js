import { call, put, takeEvery } from 'redux-saga/effects';

import { updateImage, updateData } from './actions';
import { fetchData } from './api';

function* watchDataRequest() {
  yield takeEvery('IMAGE_REQUEST', handleImageRequest);
}

function* handleImageRequest(action){
  const {data} = action;
  const response = yield call(fetchData, data);

  yield put(updateImage(response.data.avatar));

  yield put(updateData(data));
}

export default watchDataRequest;