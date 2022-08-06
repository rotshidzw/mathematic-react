import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <main>
          <Calculator />
        </main>
      </div>
    );
  }
}

export default App;
