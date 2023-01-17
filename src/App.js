import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Navigation from './components/Navigation';
import './css/styles.css';

const App = () => (
  <div>
    <Navigation />
    <main className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quotes" element={<Quotes />} />
      </Routes>
    </main>
  </div>
);

export default App;
