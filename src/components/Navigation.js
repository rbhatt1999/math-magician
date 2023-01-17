import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="flex justify-between container py-2 bg-white shadow">
    <h2>Math Magician</h2>
    <ul className="flex gap">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="calculator">Calculator</Link>
      </li>
      <li>
        <Link to="quotes">Quotes</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;