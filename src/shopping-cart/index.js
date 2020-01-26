import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from "./store"
import App from "./container/App"

class ShoppingCart extends Component {
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
 
export default ShoppingCart;