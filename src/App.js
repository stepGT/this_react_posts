import React from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = React.useState([
    { id: 1, title: "JavaScript", body: "Lorem ipsum dolor" },
    { id: 2, title: "ReactJS", body: "Lorem ipsum dolor" },
    { id: 3, title: "Redux", body: "Lorem ipsum dolor" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  /**
   * Delete post from state
   * @param {*} post
   */
  const deletePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length ? (
        <PostList delete={deletePost} title="Post Backend" posts={posts} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Post not found!</h1>
      )}
    </div>
  );
}

export default App;
