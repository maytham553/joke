import React, { Component } from "react";

export default class PostComponent extends Component {
  render() {
    const post = this.props.post;
    return (
      <div className="post-item">
        <div className="above_section">
          <div className="post_text">{post.text && <h3>{post.text}</h3>}</div>
          <div className="author_name">
            {post.author && (
              <a href={post.author.profileUrl} target="_blank">
                {post.author.name}
              </a>
            )}
          </div>
        </div>

        <img className="post_img" src={post.image} />
        <div className="under_section">
          <div className="tags">
            {post.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <div className="like_continuer">
            <span className="likes-count">{post.likes}</span>
            <input className="toggle-heart" id="toggle-heart" type="checkbox" />
            <label htmlFor="toggle-heart">❤</label>
          </div>
        </div>
      </div>
    );
  }
}
