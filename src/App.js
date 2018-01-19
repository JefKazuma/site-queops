import React, { Component } from 'react';
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Cases from "./Components/Cases/Cases";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Cases />
      </div>
    );
  }
}

export default App;
