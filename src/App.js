import React, { Component } from 'react';
import './App.css';
import qAndA from './qAndA';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>請計算下列利潤比率</h2>
          <h3>(小數點一位以下四捨五入，例如15.67% -> 15.7%)</h3>
        </header>
        <div>
          {qAndA.map((q, idx) => (<p key={idx}>{q.question}</p>))}
        </div>
      </div>
    );
  }
}

export default App;
