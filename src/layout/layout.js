import React,{Component} from 'react'
import './style.css'

class Layout extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'九宫格布局',
            list:[1,2,3,4,5,6,7,8,9],
            text:'X'
        }
        //this.handleClick=this.handleClick.bind(this);
    }

    handleClick(index){
        console.log(index);
        const myList=[...this.state.list];
        myList[index]=this.state.text;
        this.setState({
            list:myList
        })
    }

    getList(){
        return (
            this.state.list.map((item,index)=>{
                return (
                    <li key={index} onClick={this.handleClick.bind(this,index)}>{item}</li>
                )
            })
        )
    }

    render(){
        return (
            <div className='layout'>
                <h3>{this.state.title}</h3>
                <ul className='layoutSy'>
                    {this.getList()}
                </ul>
            </div>
        )
    }
}

export default Layout;