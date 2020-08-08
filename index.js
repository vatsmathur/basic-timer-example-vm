import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      interval: null
    };
  }
  startCounter = () => {
    this.setState({ interval: setInterval(this.increment, 1000) });
  };
  resetCounter = () => {
    this.setState({ time: 0 });
    clearInterval(this.state.interval);
  };
  pauseCounter = () => {
    clearInterval(this.state.interval);
  };
  increment = () => {
    this.setState({ time: this.state.time + 1 });
  };
  render() {
    return (
      <div>
        <div>Basic Counter - w/o Redux/Hooks/Imported Features</div>
        <div>
          <div id="counter">{this.state.time}</div>
          <button onClick={this.startCounter}>Start</button>
          <button onClick={this.pauseCounter}>Pause</button>
          <button onClick={this.resetCounter}>Reset</button>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
