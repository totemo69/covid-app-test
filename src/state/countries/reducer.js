import produce from 'immer';
import { SET_DAY_ONE } from './types';

export const initialState = {
  dayone: [],
};

/* eslint-disable default-case, no-param-reassign */
const countries = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case SET_DAY_ONE: {
        draft.dayone = payload;
        break;
      }
    }
  });

export default countries;
