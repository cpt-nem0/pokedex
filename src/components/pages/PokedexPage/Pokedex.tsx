import React from "react";
import PokeCard from "./PokeCard";
import SearchBar from "../../common/SearchBar";

const Pokedex: React.FC = () => {
  const imageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/609.gif";
  const pokeCode = "609";
  const pokeName = "Chandelure";
  const pokeTypes = ["Fire", "Ghost"];

  return (
    <div className="w-full h-auto">
      <div className="flex w-full h-12  items-center justify-end px-14 ">
        <SearchBar />
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
