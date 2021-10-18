import React from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

import "./styles/App.css";

function App() {
  // eslint-disable-next-line
  const [posts, setPosts] = React.useState([
    { id: 1, title: "JavaScript", body: "Lorem ipsum dolor" },
    { id: 2, title: "ReactJS", body: "Lorem ipsum dolor" },
    { id: 3, title: "Redux", body: "Lorem ipsum dolor" },
  ]);

  const [post, setPost] = React.useState({
    title: "",
    body: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({
      title: "",
      body: "",
    });
  };
  return (
    <div className="App">
      <form action="">
        <MyInput
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          value={post.title}
          type="text"
          placeholder="text"
        />
        <MyInput
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          value={post.body}
          type="text"
          placeholder="body"
        />

        <MyButton type="submit" onClick={addNewPost}>
          Create
        </MyButton>
      </form>

      <PostList title="Post Backend" posts={posts} />
    </div>
  );
}

export default App;
