import React, { Component } from "react";

export default class PostComponent extends Component {
  render() {
    const post = this.props.post;
    return (
      <div className="post-item" style={{ padding: 16, margin: 16 }}>
        {post.text && <h3>{post.text}</h3>}
        {post.author && (
          <a href={post.author.profileUrl} target="_blank">
            {post.author.name}
          </a>
        )}
        <img src={post.image} />

        <button>LIKE</button>
        <span className="likes-count">{post.likes}</span>
        <hr />
        <div className="tags">
          <h6>Tags</h6>
          {post.tags.map((tag,index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    );
  }
}
