// Dependencies
import React, { Component } from 'react';
import 'bootstrap';

// Components
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
