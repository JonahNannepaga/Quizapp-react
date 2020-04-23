import React, { Component } from "react";
import "./App.css";
import Quiz from "./Quiz";
import Copyright from "./Copyright";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Quiz Game developed in React</h1>
        </header>
        <Quiz />
        <Copyright />
      </div>
    );
  }
}

export default App;
