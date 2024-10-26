import React from "react";
import "./styles.css";

interface NavArrowProp {
  direction: string;
}

interface NavButtonsProp {
  direction: string;
  pokemonCode: number;
  pokemonImage: string;
}

const NavArrow: React.FC<NavArrowProp> = ({ direction }) => {
  return (
    <div
      className={`py-2 flex transition-transform duration-300 ease-in-out items-center ${direction}-nav ${
        direction === "right"
          ? "group-hover:translate-x-2"
          : "group-hover:-translate-x-2"
      }`}
    >
      <div className="bg-black w-full h-[2.5px]"></div>
      <div
        className={`bg-black w-[10px] h-[12px] arrow-head-${direction}`}
      ></div>
    </div>
  );
};

const NavButtons: React.FC<NavButtonsProp> = ({
  direction,
  pokemonCode,
  pokemonImage,
}) => {
  return (
    <div className="flex flex-col cursor-pointer group">
      <div className={`flex gap-2 ${direction}-nav`}>
        <div className="content-center">
          <span className="poke-code">{`#${pokemonCode}`}</span>
        </div>
        <div className="w-10 h-10 rounded-full border-[1px] border-gray-600 overflow-hidden">
          <img src={pokemonImage} alt={`#${pokemonCode}`} />
        </div>
      </div>
      <NavArrow direction={direction} />
    </div>
  );
};

const NavFooter: React.FC = () => {
  const imageSrcL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png";
  const pokeCodeL = 608;

  const imageSrcR =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png";
  const pokeCodeR = 610;

  return (
    <div className="w-full h-[100px] flex px-[200px] justify-between pb-16">
      <NavButtons
        direction="left"
        pokemonCode={pokeCodeL}
        pokemonImage={imageSrcL}
      />
      <NavButtons
        direction="right"
        pokemonCode={pokeCodeR}
        pokemonImage={imageSrcR}
      />
    </div>
  );
};

export default NavFooter;
