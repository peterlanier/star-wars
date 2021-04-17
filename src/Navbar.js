import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/planets">
        <button>Planets</button>
      </Link>
      <Link to="/people">
        <button>People</button>
      </Link>
    </nav>
  );
};

export default Navbar;
