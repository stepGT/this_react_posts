import React from "react";
import { PostService } from "./API/PostService";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/loader/Loader";
import MyModal from "./components/UI/modal/MyModal";
import { useFetching } from "./hooks/useFetching";
import { usePosts } from "./hooks/usePosts";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = React.useState([]);

  const [modal, setModal] = React.useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
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

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <MyButton style={{ marginTop: '25px' }} onClick={() => setModal(true)}>
        Create user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {
        postError && <h1>Error - {postError}</h1>
      }
      {isPostsLoading ? (
        <Loader />
      ) : (
        <PostList
          delete={deletePost}
          title="Post Backend"
          posts={sortedAndSearchedPosts}
        />
      )}
    </div>
  );
}

export default App;
