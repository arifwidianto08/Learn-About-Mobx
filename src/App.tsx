import React, { Component } from "react";
import { Todos } from "./components/Todos/Todos";
import Geolocation from "./components/GeolocationAPI/Geolocation";

class App extends Component<any, any> {
  render() {
    return (
      <div className="App">
        <Todos />
        <Geolocation />
      </div>
    );
  }
}

export default App;
