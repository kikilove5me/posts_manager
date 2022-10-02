import React, { useRef, useState } from "react";
import { PostForm } from "./components/PostForm";
import { PostList } from "./components/PostList";
import './styles/App.css';



function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript', body: 'Description' },
    { id: 3, title: 'JavaScript', body: 'Description' }
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  //gets post from child Component
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <select>
          <option value="value">sort name</option>
          <option value="value1">sort description</option>
        </select>
      </div>
      {
        posts.length !== 0
          ? <PostList remove={removePost} posts={posts} title="list of Posts 1" />
          : <h1 style={{ textAlign: "center" }}>no posts here!</h1>
      }
    </div >
  );
}

export default App;
