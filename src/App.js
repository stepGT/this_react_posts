import React from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/modal/MyModal";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = React.useState([]);

  const [modal, setModal] = React.useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

   const fetchPosts = async () => {
     const response = await axios.get("https://jsonplaceholder.typicode.com/posts/");
     setPosts(response.data);
   };

  /**
   * Delete post from state
   * @param {*} post
   */
  const deletePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id));
  };

  const [filter, setFilter] = React.useState({ sort: '', query: '' });

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>
        POSTS
      </MyButton>
      <MyButton style={{ marginTop: '25px' }} onClick={() => setModal(true)}>
        Create user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList delete={deletePost} title="Post Backend" posts={sortedAndSearchedPosts} />
    </div>
  );
}

export default App;
