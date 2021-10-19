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

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList title="Post Backend" posts={posts} />
    </div>
  );
}

export default App;
