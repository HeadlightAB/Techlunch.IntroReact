import counterReducer, { ICounterState } from "../counter/counter.reducer";

export interface IApplicationState {
  counter: ICounterState;
}

export const reducers = {
  counter: counterReducer,
};
