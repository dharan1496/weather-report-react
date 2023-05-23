import { Component } from "react";
import "./App.css";
import { Weather } from "./components/weather/weather";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";

export class App extends Component<{ test: string }, { counter: any; first: string }> {
  state = {
    counter: 0,
    first: "",
  };
  
  // constructor(props: {test: string}) {
  //   super(props);
  //   this.state = {
  //     counter: 0,
  //     first: "",
  //   };
  // }
  

  incrementCounter() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }

  componentDidMount(): void {
    console.log('mount', this.props.test);
    const first = localStorage.getItem("first");
    if (first) {
      this.setState(() => ({ first }));
    }
    // fetch(
    //   `http://api.weatherapi.com/v1/forecast.json?key=c50138e788d0428fa5c71216231904&q=chennai`
    // )
    //   .then((response: any) => response.json())
    //   .then((data: any) => this.setState(() => ({ first: data.location})))
  }

  // componentDidUpdate(): void {
  //     localStorage.setItem('first', this.state.first);
  // }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{ counter: any; first: string }>,
    snapshot?: any
  ): void {
    console.log("updated");
    if (prevState.counter !== this.state.counter) {
      this.setState({ first: `${this.state.counter} test` });
    }
  }

  componentWillUnmount(): void {
    console.log('unmount'); 
  }

  onChangeHandle(event: any) {
    const { value } = event.target;
    this.setState(() => ({ first: value }));
  }

  render() {
    console.log("render");
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/weather" element={<Weather />} />
          </Route>
          {/* <Route path="/weather" Component={Weather}/> */}
        </Routes>
        {/* <form>
          <input
            type="text"
            name="first"
            value={this.state.first}
            onChange={this.onChangeHandle.bind(this)}
          />
        </form>
        <button onClick={this.incrementCounter.bind(this)}>Count</button>{" "}
        {JSON.stringify(this.state)} */}
      </BrowserRouter>
    );
  }
}
