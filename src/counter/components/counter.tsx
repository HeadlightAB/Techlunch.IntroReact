import * as React from "react";

const Counter: React.FC = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div>
      <div>
        <span>{value}</span>
      </div>
      <div>
        <button onClick={() => setValue(value - 1)}> - </button>
        <button onClick={() => setValue(value + 1)}> + </button>
      </div>
    </div>
  );
};

export default Counter;
