import { Link } from "react-router-dom";
import "./styles.css";

const NavBar: React.FC = () => {
  return (
    <>
      <nav>
        <div className="flex justify-center items-center gap-12">
          <Link to="/" className="nav-link">
            <p className="text-xl">Home</p>
          </Link>
          <Link to="/pokedex" className="nav-link">
            <p className="text-xl">Pokedex</p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
