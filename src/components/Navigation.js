import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="flex justify-between container py-2 bg-white shadow">
    <h2 className="text-lg">Math Magician</h2>
    <ul className="flex gap">
      <li>
        <Link to="/math-magician">Home</Link>
      </li>
      <li>
        <Link to="/math-magician/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/math-magician/quotes">Quotes</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
