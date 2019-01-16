import React, { Component } from 'react'

class TabItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(){
        this.props.change(this.props.index)
    }
    render() {
        return (
            <li className={this.props.active?'activeLi':''} onClick={this.handleChange}>{this.props.text}</li>
        );
    }
}

export default TabItem;