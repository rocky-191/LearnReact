import React, { Component } from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux"
import reducers from "./reducers"
import App from "./components/App"

let store=createStore(reducers)
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
 
export default Todo;