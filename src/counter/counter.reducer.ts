import { Action } from "redux";

export interface ICounterState {
  value: number;
}

const initialState: ICounterState = {
  value: 0,
};

const counterReducer = (state = initialState, action: Action<string>) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default counterReducer;
