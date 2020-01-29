import React, { Component } from "react";

export default class PostComponent extends Component {
  render() {
    const post = this.props.post;
    return (
      <div className="m-5 shadow-inner rounded  mt-16  ">
         <div className="text-right">{post.text && <h3> {post.text}</h3>}</div> 
        <div className="text-right text-gray-500 text-xs" >
            {post.author && (
              <a href={post.author.profileUrl} target="_blank">
                {post.author.name}
              </a>
            )}
          </div>
          
          
        

        <img className=" rounded max-h-screen w-full " src={post.image} />

        <hr />
        <div className="tags text-center">
          <h6>هاشتاك#</h6>
          {post.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div >
          
          <div className="text-right ">
            <span >{post.likes}</span>
            <button className="pl-3" >LIKE</button>
          </div>
        </div>
      </div>
    );
  }
}
