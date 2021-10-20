import React from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
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

  const [searchQuery, setSearchQuery] = React.useState("");

  const sortedPost = React.useMemo(() => {
    return selectedSort
      ? [...posts].sort((a, b) =>
          a[selectedSort].localeCompare(b[selectedSort])
        )
      : posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = React.useMemo(() => {
    return sortedPost.filter((post) =>
      post.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPost]);

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <MyInput
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <MySelect
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
        value={selectedSort}
        onChange={sortPosts}
      />
      {sortedAndSearchedPosts.length ? (
        <PostList delete={deletePost} title="Post Backend" posts={sortedAndSearchedPosts} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Post not found!</h1>
      )}
    </div>
  );
}

export default App;
