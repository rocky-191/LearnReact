import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import ReactApp from './ReactApp';

// redux 实例 todo、shopping-cart
// import ShoppingCart from "./shopping-cart"
// import Todo from "./todo";


ReactDOM.render(
    <BrowserRouter>
        <ReactApp />
    </BrowserRouter>
    , document.getElementById('root'));

// ReactDOM.render(
//     <Todo />,document.getElementById("root")
// )