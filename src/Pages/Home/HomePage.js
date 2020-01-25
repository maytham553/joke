import React from "react";
import PostList from "./../../PostList/PostList";
import FakeRepository from "../../Repository/FakeRepository";


export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loading: true, error: false, posts: [] };
    }

    async componentDidMount() {
        const repository = new FakeRepository();
        try {
            const posts = await repository.getRecentPosts();
            this.setState({ loading: false, error: false, posts: posts })
        } catch{
            this.setState({ loading: false, error: true, posts: [] })
        }
    }

    render() {
        if(this.state.loading)
            return <h1>Loading...</h1>;
            
        if(this.state.error)
            return <h1>ERROR: FAIL TO FETCH POSTS</h1>;

        return <PostList posts={this.state.posts} />
    }
}
