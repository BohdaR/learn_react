import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";

function App() {
    const [posts, setPost] = useState([
        {id: 1, title: 'Python', text: 'Python programing language!'},
        {id: 2, title: 'JavaScript', text: 'JavaScript programing language!'},
        {id: 3, title: 'Ruby', text: 'Ruby programing language!'},
        {id: 4, title: 'C++', text: 'C++ programing language!'},
    ])
    const [title, setTitle] = useState('Your title')

    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
    }
  return (
      <div>
          <form>
              <input
                  type="text"
                  placeholder="Назва"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
              />
              <input type="text" placeholder="Опис"/>
              <button onClick={addNewPost}>Create post</button>
          </form>
          <PostList posts={posts} title={'Lang list'} />
      </div>
  );
}

export default App;
