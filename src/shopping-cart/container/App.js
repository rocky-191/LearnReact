import React, { Component } from 'react';
import CartContainer from './CartContainer';
import ProductsContainer from "./ProductsContainer"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div>
                <CartContainer />
                <hr />
                <ProductsContainer />
            </div>
        );
    }
}
 
export default App;