import { Link } from "react-router-dom";
import "./styles.css";
import { List, X } from "@phosphor-icons/react";
import { useState, useRef, useEffect } from "react";

const NavBar: React.FC = () => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <nav className="hidden md:block">
        <div className="flex justify-center items-center gap-12">
          <Link to="/" className="nav-link">
            <p className="text-xl">Home</p>
          </Link>
          <Link to="/pokedex" className="nav-link">
            <p className="text-xl">Pokedex</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export const HamburgerMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="block md:hidden">
      <button onClick={handleMenuOpen}>
        {isMenuOpen ? <X size={32} /> : <List size={32} />}
      </button>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="motion-preset-slide-down motion-duration-150 absolute top-0 left-0 w-full bg-gray-900 text-white flex flex-col justify-center items-center z-40 gap-8 py-8"
        >
          <Link
            to="/"
            className="hover:text-gray-400 transition-colors text-xl"
          >
            Home
          </Link>
          <Link
            to="/pokedex"
            className="hover:text-gray-400 transition-colors text-xl"
          >
            Pokedex
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
