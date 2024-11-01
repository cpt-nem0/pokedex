import NavBar from "./NavBar";
import pokemonSvg from "../../assets/pokemon.svg?url";

const Header: React.FC = () => {
  return (
    <header className="w-full flex justify-between pb-2 px-10 items-center pt-8">
      <div className="w-40 h-auto relative">
        <img src={pokemonSvg} className="w-full h-full object-contain" />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
