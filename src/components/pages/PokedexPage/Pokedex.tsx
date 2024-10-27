import React from "react";
import PokeCard from "./PokeCard";
import { MagnifyingGlass } from "@phosphor-icons/react";

const Pokedex: React.FC = () => {
  const imageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/609.gif";
  const pokeCode = "609";
  const pokeName = "Chandelure";
  const pokeTypes = ["Fire", "Ghost"];

  return (
    <div className="w-full h-auto">
      <div className="flex w-full h-12  items-center justify-end px-14 ">
        <div className="flex bg-white gap-2 items-center w-[400px] p-2 pr-4 rounded-full border-2 border-gray-200 hover:border-gray-400 focus-within:border-gray-400">
          <div>
            <MagnifyingGlass className="text-xl" />
          </div>
          <div className="flex-1">
            <input
              className="outline-none w-full text-xl"
              placeholder="Try name or code (eg: pichu or 609)"
            />
          </div>
        </div>
      </div>
      <div className="p-12">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-y-20 justify-items-center">
          <PokeCard
            image={imageUrl}
            code={pokeCode}
            name={pokeName}
            types={pokeTypes}
          />
          <PokeCard
            image={imageUrl}
            code={pokeCode}
            name={pokeName}
            types={pokeTypes}
          />
          <PokeCard
            image={imageUrl}
            code={pokeCode}
            name={pokeName}
            types={pokeTypes}
          />
          <PokeCard
            image={imageUrl}
            code={pokeCode}
            name={pokeName}
            types={pokeTypes}
          />
        </div>
      </div>
      <div>{/* pagination */}</div>
    </div>
  );
};

export default Pokedex;
