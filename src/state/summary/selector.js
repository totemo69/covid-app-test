import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSummaryDomain = (state) => state.summary || initialState;

const makeSelectSummary = () =>
  createSelector(selectSummaryDomain, (substate) => substate);

const makeSelectSummaryDetails = () =>
  createSelector(selectSummaryDomain, (substate) => substate.summary);

export default makeSelectSummary;
export { makeSelectSummaryDetails };
