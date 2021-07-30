import { GET_DAY_ONE, SET_DAY_ONE } from './types';

export const getDayOne = (payload) => ({
  type: GET_DAY_ONE,
  payload,
});

export const setDayOne = (payload) => ({
  type: SET_DAY_ONE,
  payload,
});
