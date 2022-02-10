import { HistoryActionTypes } from './consts';

type AddToHistoryAction = { type: HistoryActionTypes.ADD_TO_HISTORY; payload: { input: string; result: string } };

type SwitchHistoryAction = { type: HistoryActionTypes.SWITCH_HISTORY };

export type HistoryAction = AddToHistoryAction | SwitchHistoryAction;

export interface HistoryElement {
  id: number;
  input: string;
  result: string;
}

export interface HistoryState {
  history: HistoryElement[];
  latestId: number;
}
