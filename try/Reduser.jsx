import React, {useReducer, useState} from "react";

function reducer(state, action) {
  const {type} = action;
  switch (type) {
    case "add-todo":
      return [...state, {id: Math.random(), text: action.payload, done: false}];
  }
}

function Reducer() {
  const [inputVal, setInputVal] = useState("");
  const [todos, dispatch] = useReducer(Reducer, []);

  const addToDo = () => {
    dispatch({type: "add-todo", payload:inputVal})
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={addToDo}>Add</button>
      <ul>{todos.map((todo) => {
        <div key={todo.id}/>
      })}</ul>
    </div>
  );
}

export default Reducer;

// function counter(state, action) {
//     switch (action.type) {
//         case "increment":
//         return state + 1
//         case "decrement" :
//             return state - 1
//     }
// }

// function Reducer() {
//     const [state,dispatch ] = Reducer(counter,)
// }
