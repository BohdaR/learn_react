import React, {useState} from "react";
import './styles/App.css'
import ClassReservation from "./components/class_compinents/ClassReservation";
import BoilingCalculator from "./components/functional_component/BoilingCalculator";

function App() {
    const [posts, setPost] = useState([
        {id: 1, title: 'Python', text: 'Python programing language!'},
        {id: 2, title: 'JavaScript', text: 'JavaScript programing language!'},
        {id: 3, title: 'Ruby', text: 'Ruby programing language!'},
        {id: 4, title: 'C++', text: 'C++ programing language!'},
    ])
  return (
      <div>
          <BoilingCalculator />
          {/*<ClassReservation />*/}
          {/*<NameForm />*/}
          {/*<EssayForm />*/}
          {/*<ClassFlavorForm />*/}
          {/*<FlavorForm flavors={["Rose", "Carnation", "lime"]} />*/}
          {/*<PostList posts={posts} title={'Lang list'} />*/}
      </div>
  );
}

export default App;
