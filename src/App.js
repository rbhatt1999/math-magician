import Calculator from './components/Calculator';
import Navigation from './components/Navigation';
import './css/styles.css';

const App = () => (
  <div>
    <Navigation />
    <main className="container">
      <Calculator />
    </main>
  </div>
);

export default App;
