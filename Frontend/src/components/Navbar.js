import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🚗 CarHub</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add Car</Link>
      </div>
    </nav>
  );
}

export default Navbar;
