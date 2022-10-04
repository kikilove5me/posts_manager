import React, { useState } from "react";
import { PostFilter } from "./components/PostFilter";
import { PostForm } from "./components/PostForm";
import { PostList } from "./components/PostList";
import { MyButton } from "./components/UI/button/MyButton";
import { MyModal } from "./components/UI/myModal/MyModal";
import { usePosts } from "./hooks/usePosts";

import './styles/App.css';



function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Max's post", body: 'Description' },
    { id: 2, title: "Pippo's post", body: 'Description' },
    { id: 3, title: "Jenny's post", body: 'Description' }
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);





  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }



  function fetchPosts()



  //gets post from child Component
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <MyButton
        style={{ marginTop: 30 }}
        onClick={() => setModal(true)}
      >
        create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        {/* create input bars and button */}
        <PostForm create={createPost} />
      </MyModal>

      {/* filter drop-down and search bar */}
      <PostFilter
        filter={filter}
        setFilter={setFilter} />

      <hr style={{ margin: '15px 0' }} />


      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="list of Posts 1" />

    </div >
  );
}

export default App;
