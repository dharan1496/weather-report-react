import { Component } from "react";
import "./App.css";
import { Weather } from "./components/weather/weather";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}
