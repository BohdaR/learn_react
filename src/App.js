import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/functional_component/PostList";
import NameForm from "./components/functional_component/NameForm";
import EssayForm from "./components/functional_component/EssayForm";
import ClassFlavorForm from "./components/class_compinents/ClassFlavorForm";
import FlavorForm from "./components/functional_component/FlavorForm";

function App() {
    const [posts, setPost] = useState([
        {id: 1, title: 'Python', text: 'Python programing language!'},
        {id: 2, title: 'JavaScript', text: 'JavaScript programing language!'},
        {id: 3, title: 'Ruby', text: 'Ruby programing language!'},
        {id: 4, title: 'C++', text: 'C++ programing language!'},
    ])
  return (
      <div>
          {/*<NameForm />*/}
          {/*<EssayForm />*/}
          {/*<ClassFlavorForm />*/}
          {/*<FlavorForm flavors={["Rose", "Carnation", "lime"]} />*/}
          {/*<PostList posts={posts} title={'Lang list'} />*/}
      </div>
  );
}

export default App;
