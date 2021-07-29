import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobalDomain = (state) => state.global || initialState;

const makeSelectGlobal = () =>
  createSelector(selectGlobalDomain, (substate) => substate);

const makeSelectError = () =>
  createSelector(selectGlobalDomain, (globalState) =>
    globalState != null ? globalState.error : false,
  );

const makeSelectLoading = (loadingKey) =>
  createSelector(selectGlobalDomain, (globalState) =>
    globalState != null ? globalState.loading[loadingKey] : false,
  );

const makeSelectLoadingStatus = (key) =>
  createSelector(selectGlobalDomain, (globalState) =>
    globalState != null ? globalState.loadStatus[key] : false,
  );
export default makeSelectGlobal;
export { makeSelectError, makeSelectLoading, makeSelectLoadingStatus };
