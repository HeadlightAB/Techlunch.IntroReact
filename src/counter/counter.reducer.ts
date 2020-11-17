import { Action } from "redux";

export interface ICounterState {
  value: number;
}

const initialState: ICounterState = {
  value: 0,
};

const counterReducer = (state = initialState, action: Action<string>) => {
  switch (action.type) {
    case "COUNTER/INCREMENT":
      return {
        ...state,
        value: state.value + 1,
      };
    case "COUNTER/DECREMENT":
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
