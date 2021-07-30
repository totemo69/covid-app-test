import { all } from 'redux-saga/effects';
import summarySaga from './summary/saga';
import countrySaga from './countries/saga';

function* rootSaga() {
  yield all([
    summarySaga(),
    countrySaga(),
  ]);
}

export default rootSaga;
