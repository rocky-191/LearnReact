import React, { Component } from 'react'
import CommentInput from './CommentInput';
import Comment from './Comment';

class CommentApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList:[]
        }
        this.submitComment=this.submitComment.bind(this);
    }

    submitComment(commentObj){
        if (!commentObj) return
        if (!commentObj.userName) return alert('请输入用户名');
        if (!commentObj.commentValue) return alert('请输入评论内容');
        this.state.commentList.push(commentObj);
        this.setState({
            commentList:this.state.commentList
        });
    }

    render() {
        return (
            <div>
                <h3>简单的评论组件</h3>
                <CommentInput onSubmit={this.submitComment} />
                <Comment commentList={this.state.commentList} />
            </div>
        );
    }
}

export default CommentApp;