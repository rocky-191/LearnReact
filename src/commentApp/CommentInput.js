import React, { Component } from 'react';
import './comment.css';

class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            commentValue:''
        }
        this.handleInput=this.handleInput.bind(this);
        this.handleCommentInput=this.handleCommentInput.bind(this);
        this.submitComment=this.submitComment.bind(this);
    }

    handleInput(e){
        this.setState({
            userName:e.target.value
        });
    }

    handleCommentInput(e){
        this.setState({
            commentValue:e.target.value
        });
    }

    submitComment(){
        console.log(`用户名：${this.state.userName},内容：${this.state.commentValue}`);
        let commentObj={
            userName:this.state.userName,
            commentValue:this.state.commentValue
        }
        this.props.onSubmit(commentObj)
        this.setState({
            userName:'',
            commentValue:''
        })
    }

    render() {
        return (
            <div>
                <div>
                    <label>姓名：</label>
                    <input type="text" className="userName" onChange={this.handleInput} value={this.state.userName}></input>
                </div>
                <div>
                    <label>评论内容：</label>
                    <textarea className="commentText" onChange={this.handleCommentInput} value={this.state.commentValue}></textarea>
                </div>
                <div>
                    <button className="submitBtn" onClick={this.submitComment}>发布</button>
                </div>
            </div>
        );
    }
}

export default CommentInput;