import React, { Component } from 'react'
import Clock from './Clock'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showClock:true
        }
        this.handleClock=this.handleClock.bind(this);
    }

    handleClock(){
        this.setState({
            showClock:!this.state.showClock
        })
    }
    render() {
        return (
            <div>
                <h3>自定义时钟，理解组件生命周期</h3>
                {this.state.showClock?<Clock />:null}
                <button onClick={this.handleClock}>{this.state.showClock?'隐藏':'显示'}时钟</button>
            </div>
        );
    }
}

export default Index;