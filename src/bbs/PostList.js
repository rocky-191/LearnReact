import React,{Component} from 'react'
import PostItem from './PostItem'

class PostList extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
        this.timer=null;
        this.handleVote=this.handleVote.bind(this);
        this.handleSave=this.handleSave.bind(this);
    }

    componentDidMount(){
        this.timer=setTimeout(()=>{
            this.setState({
                posts:[
                    { id: 1, title: "大家一起来讨论React吧", author: "张三", date: "2017-09-01 10:00", vote: 0 ,voted:false},
                    { id: 2, title: "大家一起来讨论rudux吧", author: "李四", date: "2017-09-01 10:00", vote: 0 ,voted:false},
                    { id: 3, title: "大家一起来讨论mobx吧", author: "王五", date: "2017-09-01 10:00", vote: 0 ,voted:false}
                ]
            });
        },1000);
    }

    componentWillMount(){
        if(this.timer){
            clearInterval(this.timer);
        }
    }

    //处理点赞逻辑
    handleVote(id){
        const posts = this.state.posts.map(item => {
            let voteNum;
            let newItem;
            if(item.id === id){
                if(!item.voted){
                    voteNum=++item.vote;
                }else{
                    voteNum=--item.vote;
                }
                newItem={...item, vote: voteNum,voted:!item.voted}
            }else{
                newItem=item;
            }
            return newItem;
        })
        this.setState({
            posts
        })
    }
    //保存帖子
    handleSave(post){
        // 根据post的id，过滤出当前要更新的post
        const posts = this.state.posts.map(item => {
            const newItem = item.id === post.id ? post : item;
            return newItem;
        })
        this.setState({
            posts
        })
    }

    render(){
        return (
            <div className='container'>
                <h3>帖子列表</h3>
                <ul>
                    {
                        this.state.posts.map(item=>
                            <PostItem
                                key={item.id}
                                post={item}
                                onVote={this.handleVote}
                                onSave={this.handleSave}
                            />
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default PostList;