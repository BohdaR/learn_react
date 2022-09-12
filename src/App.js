import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'

function Welcome(props) {
  return <h1>Привіт, {props.name}</h1>;
}

// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }
//
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//
//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Привіт, світе!</h1>
//                 <h2>Зараз {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }

function App() {
    const [value, setValue] = useState('Some str')

  return (
      <div>
          <h2>{value}</h2>
          <input
              type="text"
              value={value}
              onChange={event => setValue(event.target.value)}
          />
        <Welcome name="Василина" />
        <Welcome name="Михайло" />
        <Welcome name="Вадим" />
          <Counter />
          <ClassCounter />
      </div>
  );
}

export default App;
