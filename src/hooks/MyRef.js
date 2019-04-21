import React, {useRef, useReducer} from 'react';

function MyRef () {
  const inputRef = useRef ();
  const [items, dispatch] = useReducer ((state, action) => {
    switch (action.type) {
      case 'add':
        return [
          ...state,
          {
            id: state.length,
            name: action.name,
          },
        ];
      case 'remove':
        return state.filter ((_, index) => index !== action.index);
      case 'clear':
        return [];
      default:
        return state;
    }
  }, []);
  function handleSubmit (event) {
    event.preventDefault ();
    dispatch ({
      type: 'add',
      name: inputRef.current.value,
    });
    inputRef.current.value = '';
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <button onClick={() => dispatch ({type: 'clear'})}>clear</button>
      <ul>
        {items.map ((item, index) => {
          return (
            <li key={item.id}>
              {item.name}
              <button onClick={() => dispatch ({type: 'remove', index})}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MyRef;
