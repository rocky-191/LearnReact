import React, { Component,Fragment } from 'react';
import TodoList from './TodoList';
import Layout from './layout'
import PostList from './bbs/PostList'

class ReactApp extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return (
            <Fragment>
                <TodoList />
                <Layout />
                <h3>BBS论坛实例</h3>
                <PostList />
            </Fragment>
        )
    }
}

export default ReactApp;