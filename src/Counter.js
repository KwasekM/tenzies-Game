import React from "react";

export default function Counter(props) {
  return (
    <div className="counter">
      <h1 className="counter__rolls">
        Number of rolls: {props.counterOfRolls}
      </h1>
    </div>
  );
}
