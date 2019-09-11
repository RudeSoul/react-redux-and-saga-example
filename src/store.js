import {createStore, applyMiddleware} from 'redux';
import {myReducer} from './reducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(myReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export default store;