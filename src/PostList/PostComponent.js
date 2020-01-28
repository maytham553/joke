import React, { Component } from "react";

export default class PostComponent extends Component {
  render() {
    const post = this.props.post;
    return (
      <div className="m-5 shadow-inner rounded flex flex-col items-center mt-4  ">
        {post.text && <h3>{post.text}</h3>}

        <img className=" rounded max-h-screen w-full " src={post.image} />

        <hr />
        <div className="tags">
          <h6>Tags</h6>
          {post.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className=" flex justify-around ">
          <div>
            {post.author && (
              <a href={post.author.profileUrl} target="_blank">
                {post.author.name}
              </a>
            )}
          </div>
          <div>
            <button>LIKE</button>
            <span className="pl-3">{post.likes}</span>
          </div>
        </div>
      </div>
    );
  }
}
