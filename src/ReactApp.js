import React, { Component } from 'react';
import MainNav from './MainNav/index';
import MyRouter from './MyRouter/index';

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
            <div>
                {/* <TodoList />
                <Layout />
                <PostList />
                <CommentApp />
                <Index />
                <Tab />
                <Hook /> */}
                <MainNav />
                <MyRouter />
            </div>
        )
    }
}

export default ReactApp;