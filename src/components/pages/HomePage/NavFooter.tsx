import React, { useEffect, useState } from "react";

import "./styles.css";
import { PokeNavInfo } from "../../../service/types";
import { getPokemonNavInfo } from "../../../service/pokemon-data";

interface NavArrowProp {
  direction: string;
}

interface NavButtonsProp {
  direction: string;
  pokemonCode: number;
  pokemonImage: string;
  onClick: () => void;
}

interface NavFooterProps {
  code: string;
  totalPokemon: number;
  onNavClick: (newCode: string) => void;
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
  onClick,
}) => {
  return (
    <div className="flex flex-col cursor-pointer group" onClick={onClick}>
      <div className={`flex gap-2 ${direction}-nav`}>
        <div className="content-center">
          <span className="poke-code">{`#${pokemonCode}`}</span>
        </div>
        <div className="w-10 h-10 rounded-full border-[1px] border-gray-600 overflow-hidden">
          <img src={pokemonImage} alt={`#${pokemonCode}`} className="p-1" />
        </div>
      </div>
      <NavArrow direction={direction} />
    </div>
  );
};

const NavFooter: React.FC<NavFooterProps> = ({
  code,
  totalPokemon,
  onNavClick,
}) => {
  const [leftNav, setLeftNav] = useState<PokeNavInfo>({
    code: "0",
    imageUrl: "",
  });
  const [rightNav, setRightNav] = useState<PokeNavInfo>({
    code: "0",
    imageUrl: "",
  });

  const [showLeftNav, setShowLeftNav] = useState<boolean>(true);
  const [showRightNav, setShowRightNav] = useState<boolean>(true);

  useEffect(() => {
    const fetchNavInfo = async () => {
      const leftCode = Number(code) - 1;
      if (leftCode > 0) {
        const leftData = await getPokemonNavInfo(String(leftCode));
        setLeftNav(leftData);
        setShowLeftNav(true);
      } else {
        setShowLeftNav(false);
      }

      const rightCode = Number(code) + 1;
      if (rightCode <= totalPokemon) {
        const rightData = await getPokemonNavInfo(String(Number(code) + 1));
        setRightNav(rightData);
        setShowRightNav(true);
      } else {
        setShowRightNav(false);
      }
    };
    fetchNavInfo();
  }, [code]);

  return (
    <div className="flex w-full h-[100px] px-[200px] justify-between pb-16">
      {showLeftNav ? (
        <NavButtons
          direction="left"
          pokemonCode={Number(leftNav?.code)}
          pokemonImage={leftNav?.imageUrl}
          onClick={() => {
            const newCode = Number(code) - 1;
            if (newCode > 0) {
              onNavClick(String(newCode));
            }
          }}
        />
      ) : (
        <div className="invisible">
          <NavButtons
            direction="left"
            pokemonCode={0}
            pokemonImage=""
            onClick={() => {}}
          />
        </div>
      )}
      {showRightNav ? (
        <NavButtons
          direction="right"
          pokemonCode={Number(rightNav?.code)}
          pokemonImage={rightNav?.imageUrl}
          onClick={() => {
            const newCode = Number(code) + 1;
            if (newCode < totalPokemon) {
              onNavClick(String(newCode));
            }
          }}
        />
      ) : (
        <div className="invisible">
          <NavButtons
            direction="right"
            pokemonCode={0}
            pokemonImage=""
            onClick={() => {}}
          />
        </div>
      )}
    </div>
  );
};

export default NavFooter;
