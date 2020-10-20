import React from "react";
import Header from "./screens/Header";
import HomePage from "./screens/HomePage";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <HomePage />
      </React.Fragment>
    );
  }
}

export default App;
