import { SET_SUMMARY, GET_SUMMARY } from './types';

export const getSummary = () => ({
  type: GET_SUMMARY,
});

export const setSummary = (payload) => ({
  type: SET_SUMMARY,
  payload,
});
