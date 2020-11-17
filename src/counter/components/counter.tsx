import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IApplicationState } from "../../redux/root.reducer";
import { incrementAction, decrementAction } from "../counter.actions";

const Counter: React.FC = () => {
  const value = useSelector((state: IApplicationState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <span>{value}</span>
      </div>
      <div>
        <button onClick={() => dispatch(decrementAction)}> - </button>
        <button onClick={() => dispatch(incrementAction)}> + </button>
      </div>
    </div>
  );
};

export default Counter;
