import React from "react";
export default function Die(props) {
  const styles = {
    backgroundColor: props.isClicked ? "#59E391" : "white",
  };

  return (
    <div className="number" style={styles} onClick={props.changeIsClicked}>
      <h1 className="number__value">{props.value}</h1>
    </div>
  );
}
