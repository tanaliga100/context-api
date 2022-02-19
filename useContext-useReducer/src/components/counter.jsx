import React, { useReducer, useState } from "react";

const initialState = {
  count: 0,
};

const functionReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
      break;
    case "init-input":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
      break;
  }
};

const counter = () => {
  const [input, setInput] = useState(undefined);
  const [state, dispatch] = useReducer(functionReducer, initialState);

  return (
    <div className="App">
      <header>
        <h1 className="title">React Hooks useContext-useReducer</h1>
      </header>
      <section>
        <div className="initializer">
          <input
            type="number"
            onChange={(e) => setInput(parseInt(e.target.value))}
            value={input}
          />
          <button
            onClick={(e) => dispatch({ type: "init-input", payload: input })}
          >
            Initialize Counter
          </button>
        </div>
        <h2>Counter : {state.count}</h2>
        <div>
          <button onClick={() => dispatch({ type: "increment" })}>
            increment
          </button>
          <button onClick={() => dispatch({ type: "decrement" })}>
            decrement
          </button>
        </div>
      </section>
    </div>
  );
};

export default counter;
