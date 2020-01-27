import React from "react";
import PostComponent from "./PostComponent";
/*
 * post : id , image , likes , author {name , profileUrl} , text , tags : string[] , type , isTrend  
 * 
 */

export default class PostList extends React.Component {
    render() {
        const posts = this.props.posts;
        return <div className='post-list'>
            {
                posts.map(post => <PostComponent key={post.id} post={post} />)
            }
        </div>
    }
}
