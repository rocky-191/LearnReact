import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navData:[
                {
                    path:'todolist',
                    text:'todolist实例'
                },
                {
                    path:'layout',
                    text:'布局实例'
                },
                {
                    path:'postList',
                    text:'bbs论坛'
                },
                {
                    path:'commentApp',
                    text:'评价列表实例'
                },
                {
                    path:'clock',
                    text:'钟表实例'
                },
                {
                    path:'tab',
                    text:'tab切换实例'
                },
                {
                    path:'hook',
                    text:'hook应用实例'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.navData.map(item=>{
                        return <li key={item.path}>
                            <NavLink to={`/${item.path}`}>{item.text}</NavLink>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default MainNav;