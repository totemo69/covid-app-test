import { takeEvery, call, put } from 'redux-saga/effects';
import { API_PATH, GET_REQUEST, LOADING_PREFIX } from '../../utils/constant';
import { request, RequestOptions } from '../../utils/request';
import { loading, loadErrors, loadSuccess } from '../global/actions';
import { GET_SUMMARY } from './types';
import { setSummary } from './actions';

function* getSummary() {
  try {
    // Set loading status to true
    yield put(loading(LOADING_PREFIX.SUMMARY));
    const data = yield call(
      request,
      API_PATH.SUMMARY,
      RequestOptions(GET_REQUEST, null, true),
    );
    console.log(data);
    yield put(setSummary(data));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.SUMMARY));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.SUMMARY, false));
    // Set the error
    yield put(loadErrors(error));
  } finally {
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.SUMMARY, false));
  }
}

export default function* summarySaga() {
  yield takeEvery(GET_SUMMARY, getSummary);
}
