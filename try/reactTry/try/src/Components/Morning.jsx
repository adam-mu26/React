import React from "react";

export default function Morning(props) {
  console.log(props);
  return (
    <div>
      <h1>Morning My name is : {props.name} I'm {props.age}</h1>
      <button onClick={props.change}>Click</button>
    </div>
  );
}
