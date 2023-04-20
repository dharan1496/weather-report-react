import { Component } from "react";
import "./App.css";
import { Weather } from "./components/weather/weather";

export class App extends Component {
  render() {
    document.title = 'Weather report';
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}
