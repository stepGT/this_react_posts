import React from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";

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

  const [selectedSort, setSelectedSort] = React.useState("");

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <MySelect
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
        value={selectedSort}
        onChange={sortPosts}
      />
      {posts.length ? (
        <PostList delete={deletePost} title="Post Backend" posts={posts} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Post not found!</h1>
      )}
    </div>
  );
}

export default App;
