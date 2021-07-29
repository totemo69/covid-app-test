import produce from 'immer';
import { SET_SUMMARY } from './types';

export const initialState = {
  summary: {},
};

/* eslint-disable default-case, no-param-reassign */
const summary = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case SET_SUMMARY: {
        draft.summary = payload;
        break;
      }
    }
  });

export default summary;
