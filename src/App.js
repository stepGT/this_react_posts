import React from "react";
import PostFilter from "./components/PostFilter";
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

  const [filter, setFilter] = React.useState({ sort: '', query: '' });

  const sortedPost = React.useMemo(() => {
    return filter.sort
      ? [...posts].sort((a, b) =>
          a[filter.sort].localeCompare(b[filter.sort])
        )
      : posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = React.useMemo(() => {
    return sortedPost.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPost]);

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList delete={deletePost} title="Post Backend" posts={sortedAndSearchedPosts} />
    </div>
  );
}

export default App;
