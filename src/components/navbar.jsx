import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount }) {
  return (
    <>
      <div className="top-bar">
        ✨ Homemade Goodness Delivered with Love - Across Kurnool! ❤️
      </div>

      <nav className="navbar">

        <ul className="nav-links">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/menu">Food Items</Link>
          </li>

          <li>
            <Link to="/cart">
              🛒 Cart ({cartCount})
            </Link>
          </li>

        </ul>

      </nav>
    </>
  );
}

export default Navbar;