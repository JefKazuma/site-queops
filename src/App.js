import React, { Component } from 'react';
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
      </div>
    );
  }
}

export default App;
