import React from 'react';
import { useReducer } from 'react';


const initialState = 0;

function reducer(count, action){
    switch(action.type){
        case 'increment': {
            return count + 1;  
        }
        case 'decrement':{
            return count -1;
        }
        default :{
            return count;
        }
        
    }
}


function ComponatReducer() {
  const [count, dispatch] =  useReducer(reducer, initialState);

  if(count < 0){
    
    alert('counter is decresing below zero');
  }
  return (
    <>
     <button onClick={() => {dispatch({type: 'increment'}) }}>Increment</button> 
     <h1>{count}</h1>
     <button onClick={() => {dispatch({type: 'decrement'})}}>Decrement</button>  
    </>
  )
}

export default ComponatReducer;