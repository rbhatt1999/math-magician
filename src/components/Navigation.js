import { NavLink } from 'react-router-dom';
import '../css/styles.css';

const Navigation = () => (
  <nav className="flex justify-between container py-2 bg-white shadow">
    <h2 className="text-lg">Math Magician</h2>
    <ul className="flex gap">
      <li>
        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} end to="/math-magician">Home</NavLink>
      </li>
      <li>
        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} end to="/math-magician/calculator">Calculator</NavLink>
      </li>
      <li>
        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} end to="/math-magician/quotes">Quotes</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
