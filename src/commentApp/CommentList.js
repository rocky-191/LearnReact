import React, { Component } from 'react';
import './comment.css';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div>
                <label className="commentName">{this.props.userName}:</label>
                <span>{this.props.commentValue}</span>
            </div>
        );
    }
}

export default CommentList;