import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCountryDomain = (state) => state.countries || initialState;

const makeSelectCountry = () =>
  createSelector(selectCountryDomain, (substate) => substate);

const makeSelectDayOne = () =>
  createSelector(selectCountryDomain, (substate) => substate.dayone);

export default makeSelectCountry;
export { makeSelectDayOne };
