import React, { Component } from 'react';
import './App.css';
import Table from '../table';
import TableConnected from '../table-connected';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TableConnected/>
      </div>
    );
  }
}

export default App;
