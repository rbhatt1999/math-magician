import React from 'react';
import Calculator from './components/Calculator';
import './css/styles.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Calculator />
        </header>
      </div>
    );
  }
}

export default App;
