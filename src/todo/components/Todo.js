import React from 'react';
import propTypes from "prop-types"

const Todo=(props)=>{
    const {onClick,completed,text}=props;
    return (
        <li onClick={onClick} style={{textDecoration:completed?'line-through':'none'}}>
            {text}
        </li>
    )
}

Todo.propTypes={
    onClick:propTypes.func.isRequired,
    completed:propTypes.bool.isRequired,
    text:propTypes.string.isRequired
}

export default Todo;