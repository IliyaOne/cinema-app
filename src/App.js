import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';



import Shop from './containers/Cinema/Cinema';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Shop />
      </BrowserRouter>
    );
  }
}
export default App;