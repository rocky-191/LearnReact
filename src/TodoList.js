import React, { Component,Fragment } from 'react';
import TodoItem from './TodoItem';
// import Layout from './layout'
// import PostList from './bbs/PostList'
import './style.css'

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state={
      list:[],
      inputValue:''
    }
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleBtnClick=this.handleBtnClick.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
  }

  handleBtnClick(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    });
  }

  handleInputChange (e){
    //console.log(e.target.value);
    this.setState({
      inputValue:e.target.value
    })
  }

  handleItemClick(index){
    const list=[...this.state.list];
    list.splice(index,1);
    this.setState({
      list:list
    })
  }

  handleDelete(index){
    // const list=[...this.state.list];
    // list.splice(index,1);
    // this.setState({
    //   list:list
    // })
    this.handleItemClick(index);
  }

  getTodoItems(){
    return (
      this.state.list.map((item,index) => {
        return (
          <TodoItem 
            key={index}
            delete={this.handleDelete} 
            content={item}
            index={index} 
          />
        )
        //return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
      })
    )
  }

  render() {
    return (
      <Fragment>
        <h3>todoList实例</h3>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
          <button className='red-btn' onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    );
  }
}

export default TodoList;
