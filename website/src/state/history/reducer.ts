import { HistoryAction, HistoryState } from './type';
import { HistoryActionTypes } from './consts';

const initialState: HistoryState = {
  input: [],
  result: [],
};

const defaultAction: HistoryAction = {
  type: HistoryActionTypes.ADD_TO_RESULT_HISTORY,
  payload: { text: 'error' },
};

export const HistoryReducer = (
  state: HistoryState = initialState,
  action: HistoryAction = defaultAction,
): HistoryState => {
  switch (action.type) {
    case HistoryActionTypes.ADD_TO_INPUT_HISTORY: {
      return { ...state, input: [...state.input, action.payload.text] };
    }
    case HistoryActionTypes.ADD_TO_RESULT_HISTORY: {
      return { ...state, result: [...state.result, action.payload.text] };
    }
    default:
      return state;
  }
};
