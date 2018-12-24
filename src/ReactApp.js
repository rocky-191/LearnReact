import React, { Component,Fragment } from 'react';
import TodoList from './todoList/TodoList';
import Layout from './layout/layout'
import PostList from './bbs/PostList'
import CommentApp from './commentApp/CommontApp'
import Index from './clock/Index'

class ReactApp extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        document.title='React实例应用'
    }

    render(){
        return (
            <Fragment>
                <TodoList />
                <Layout />
                <h3>BBS论坛实例</h3>
                <PostList />
                <CommentApp />
                <Index />
            </Fragment>
        )
    }
}

export default ReactApp;