import { takeEvery, call, put } from 'redux-saga/effects';
import { API_PATH, GET_REQUEST, LOADING_PREFIX } from '../../utils/constant';
import { request, RequestOptions } from '../../utils/request';
import { loading, loadErrors, loadSuccess } from '../global/actions';
import { GET_DAY_ONE } from './types';
import { setDayOne } from './actions';

function* getDayOne({ payload }) {
  try {
    const {status, slug} = payload
    // Set loading status to true
    yield put(loading(LOADING_PREFIX.DAYONE));
    const data = yield call(
      request,
      `${API_PATH.DAYONE}/${slug}/status/${status}`,
      RequestOptions(GET_REQUEST, null, true),
    );

    yield put(setDayOne(data));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.DAYONE));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.DAYONE, false));
    // Set the error
    yield put(loadErrors(error));
  } finally {
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.DAYONE, false));
  }
}

export default function* countriesSaga() {
  yield takeEvery(GET_DAY_ONE, getDayOne);
}
