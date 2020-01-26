import {ADD_TODO,TOGGLE_TODO} from "../constants/actionType"

const todos=(state=[],action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    id:action.id,
                    text:action.text,
                    completed:false
                }
            ];
        case TOGGLE_TODO:
            return state.map(todo=>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    :todo
            )
        default:
            return state
    }
}

export default todos;