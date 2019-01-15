import React, { Component } from 'react'
import TabItem from './tabItem';
import './style.css';

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs:[{
                text:'tab1',
                active:true
            },{
                text:'tab2',
                active:false
            },{
                text:'tab3',
                active:false
            }]
        }
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(ind){
        let newTabs=[...this.state.tabs];
        newTabs.forEach((item,index)=>{
            if(index === ind){
                item.active=true;
            }else{
                item.active=false;
            }
        })
        this.setState({
            tabs:newTabs
        })
    }

    getItems(){
        return (
            this.state.tabs.map((item,index)=>{
                return (
                    <TabItem 
                        key={index}
                        text={item.text}
                        active={item.active}
                        change={this.handleChange}
                        index={index}
                    />
                )
            })
        )
    }
    render() {
        return (
            <div>
                <h3>tab实例</h3>
                <ul className="ui-tabs">
                    {this.getItems()}
                </ul>
            </div>
        );
    }
}

export default Tab;