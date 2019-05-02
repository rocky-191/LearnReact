import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const Loading=()=>{
            return (
                <div>loading...</div>
            )
        }
        // React 16.6 or higher
        // 使用Suspense做Code-Splitting
        const withSuspense = (Component) => {
            return (props) => (
                <Suspense fallback={<Loading />}>
                    <Component {...props} />
                </Suspense>
            )
        }
        // import TodoList from './todoList/TodoList';
// import Layout from './layout/layout'
// import PostList from './bbs/PostList'
// import CommentApp from './commentApp/CommontApp'
// import Index from './clock/Index'
// import Tab from './tabs/tab';
// import Hook from './hooks/index';
        const TodoList = withSuspense(lazy(() => import("../todoList/TodoList")))
        const Layout = withSuspense(lazy(() => import("../layout/layout")))
        const PostList = withSuspense(lazy(() => import("../bbs/PostList")))
        const CommentApp=withSuspense(lazy(()=>import("../commentApp/CommontApp")))
        const Index=withSuspense(lazy(()=>import("../clock/Index")))
        const Tab=withSuspense(lazy(()=>import("../tabs/tab")))
        const Hook = withSuspense(lazy(()=>import("../hooks/index")))

        return (
            <Switch>
                <Route exact path='/' component={TodoList}/>
                <Route path='/todolist' component={TodoList}/>
                <Route path='/layout' component={Layout}/>
                <Route path='/postList' component={PostList}/>
                <Route path='/commentApp' component={CommentApp}/>
                <Route path='/clock' component={Index}/>
                <Route path='/tab' component={Tab}/>
                <Route path='/hook' component={Hook}/>
            </Switch>
        );
    }
}

export default Main;