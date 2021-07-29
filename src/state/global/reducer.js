import produce from 'immer';
import { LOAD_ERRORS, CLEAR_ERRORS, LOADING, LOAD_SUCCESS } from './types';

export const initialState = {
  error: false,
  loading: {},
  loadStatus: {},
};

/* eslint-disable default-case, no-param-reassign */
const globalReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_ERRORS:
        draft.error = action.error;
        break;
      case CLEAR_ERRORS:
        draft.error = false;
        break;
      case LOADING:
        draft.loading[action.key] = action.isLoading;
        break;
      case LOAD_SUCCESS:
        draft.loadStatus[action.key] = action.status;
        break;
    }
  });

export default globalReducer;
