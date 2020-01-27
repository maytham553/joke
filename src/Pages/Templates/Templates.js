import React from "react";
import FakeRepository from "../../Repository/FakeRepository";
import PostList from "../../PostList/PostList";

export default class TemplatesPage extends React.Component {
  state = {
    loading: true,
    error: false,
    posts: []
  };

  async componentDidMount() {
    const repo = new FakeRepository();
    try {
      const posts = await repo.getTemplates();
      this.setState({ error: false, loading: false, posts: posts });
    } catch {
      this.setState({ error: true, loading: false, posts: [] });
    }
  }

  render() {
    if (this.state.loading) return <h1>Loding...</h1>;
    if (this.state.error) return <h1>Error</h1>;
    return <PostList posts={this.state.posts} />;
  }
}
