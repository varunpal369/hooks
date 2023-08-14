import React, { useReducer } from 'react';

const initialState = 
{ 
  name: "",
  count: 0
};
function reducer(state, action){
  console.log(state, action);
  if(action.type === "INCREMENT"){
      return state + 1;
  }
  if(action.type === "DECREMENT"){
    return state - 1;
    }
  if(action.type === "CHANGED_NAME"){
    return action.targetName;
  }
  
  throw Error('Unknown action: ' + action.type);
}


function Counter() {

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e){
    dispatch({
      type: "CHANGED_NAME",
      targetName: e.target.value
    })
  }

  return ( 
    <>
    <input value={state.name} onChange={handleChange}></input>
    <h1>{state.name}</h1>
    <p>{state.count}</p>
    <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
    <button onClick={() => dispatch({type: "INCREMENT"}) }>Increment</button>
    </>
  )
}

export default Counter;