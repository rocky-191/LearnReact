import React, { Component } from 'react';
import CommentList from './CommentList';
// import CommentList from './CommentList';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const commentList=this.props.commentList;
        return (
            <div>
                {
                    commentList.map((item,index)=>{
                       return <CommentList key={index} userName={item.userName} commentValue={item.commentValue} />
                    })
                }
            </div>
        );
    }
}

export default Comment;