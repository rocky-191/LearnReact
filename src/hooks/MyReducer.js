import React, { useReducer } from 'react'

function MyReducer(){
    const [count,dispatch]=useReducer((state,action)=>{
        switch(action){
            case 'Increment':
                return state+1;
            case 'Decrement':
                return state-1;
            default:
                return state;
        }
    },0)
    const style={
        padding: '0 10px',
        height:30,
    }
    return (
        <div>
            {count}
            <button style={style} onClick={()=>dispatch('Increment')}>Increment</button>
            <button style={style} onClick={()=>dispatch('Decrement')}>Decrement</button>
        </div>
    )
}

export default MyReducer;