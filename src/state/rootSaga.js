import { all } from 'redux-saga/effects';
import summarySaga from './summary/saga';

function* rootSaga() {
  yield all([
    summarySaga(),
  ]);
}

export default rootSaga;
