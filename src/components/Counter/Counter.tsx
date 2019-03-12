import React, { Component } from "react";
import { CounterState } from "./types";
export default class Counter extends Component<{}, CounterState> {
  timer: any;

  state: CounterState = {
    counter: 0
  };

  increment = () => {
    this.timer = setInterval(() => {
      this.setState(state => ({
        counter: state.counter + 1
      }));
    }, 1000);
  };

  componentWillMount() {}

  componentDidMount() {
    this.increment();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}
