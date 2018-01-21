import React, { Component } from 'react';
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Cases from "./Components/Cases/Cases";
import Parceiros from "./Components/Parceiros/Parceiros";
import Contato from "./Components/Contato/Contato";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Cases />
        <Parceiros />
        <Contato />
      </div>
    );
  }
}

export default App;
